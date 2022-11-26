import { useState } from 'react';
import './App.css';
import MessagesList from '../../molecules/MessagesList/MessagesList';
import WelcomeMessage from '../../atoms/WelcomeMessage/WelcomeMessage';
import Header from '../../molecules/Header/Header';
import MessagesForm from '../../molecules/MessagesForm/MessagesForm';

function App() {
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAuthorChange = (event) => {
    setAuthorInput(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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
          handleMessageChange={handleMessageChange}>
      </MessagesForm>

      <WelcomeMessage>
          Messages List
      </WelcomeMessage>

      <MessagesList
        messages={messages}>
      </MessagesList>

    </div>

    
  );
}

export default App;

