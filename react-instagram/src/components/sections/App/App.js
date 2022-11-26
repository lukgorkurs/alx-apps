import { useState, useEffect } from 'react';
import './App.css';
import MessagesList from '../../molecules/MessagesList/MessagesList';
import WelcomeMessage from '../../atoms/WelcomeMessage/WelcomeMessage';
import Header from '../../molecules/Header/Header';
import MessagesForm from '../../molecules/MessagesForm/MessagesForm';
import {post, get , remove} from '../../../helpers/http.js';

function App() {
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [authorInputError,setAuthorInputError] = useState(false);




  const fetchMessages = () => {
    get("http://localhost:5000/messages")
    .then ((data) => setMessages(data))
    .catch((e) => console.log(e.message))
  }
  
  
  useEffect(() => {
    fetchMessages();
  }, [])



  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    const isValid = true;

    if (authorInput.length < 3) {
       isValid = false;
    };

    if (messageInput.length < 3) {
       isValid = false;
    };
    
  
    if (!isValid) {setAuthorInputError=true};


    if (!isValid) {
      return;
    }

    // Date.now() zwraca obecny czas jako timestamp
    // timestamp to jest liczba sekund ktora uplynela od 1.01.1970
    const randomId = Date.now();

    const newMessage = {
      id: randomId,
      author: authorInput,
      message: messageInput
    }

    const newMessages = messages.concat(newMessage)

    setMessages(newMessages)

    post("http://localhost:5000/messages",newMessage)
  }

  // Lista komponentow do stworzenia:

  // MessagesList
  // MessagesForm
  // Button
  // Link
  // Input
  // Header
  // WelcomeMessage (div z elementem p)
  // App jako sekcja


  // function handleRemoveMovie(id) {    
  //   const removeItem = movies.filter((movie) => {
  //         return movie.id !== id;
  //   });
  //   setMovies(removeItem);
  //   remove(PARAMS.movieUrl, id)
  // }

  function handleRemoveMessage(id) {    

    console.log(id);

    const removeItem = messages.filter((message) => {
          return message.id !== id;
    });
    setMessages(removeItem);
    remove("http://localhost:5000/messages", id)
  }



  return (
    <div>
      
      <Header>
        Instagram App
      </Header>

      <WelcomeMessage>
          Add new post
      </WelcomeMessage>

      <MessagesForm
          handleSubmit={handleSubmit}
          authorInput={authorInput}
          handleAuthorChange={handleAuthorChange}
          messageInput={messageInput}
          handleMessageChange={handleMessageChange}
          authorInputError={authorInputError}>
      </MessagesForm>

      <WelcomeMessage>
          Messages List
      </WelcomeMessage>

      <MessagesList
        messages={messages}
        handleRemoveMessage={handleRemoveMessage}>
      </MessagesList>

    </div>

    
  );
}

export default App;

