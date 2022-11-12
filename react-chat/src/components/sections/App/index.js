import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import {post, get, remove} from '../../../helpers/http.js';
import PARAMS from '../../../helpers/params.js';
import ChatMessages from '../../molecules/ChatMessages/ChatMessages';
import MessagesForm from '../../molecules/MessagesForm/MessagesForm';
import WelcomeMessage from '../../atoms/WelcomeMessage/WelcomeMessage';
import Button from '../../atoms/WelcomeMessage/Button/Button';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [messageInputValue, setMessageInputValue] = useState('');
  const [authorInputValue, setAuthorInputValue] = useState('');
  const [chat, setChat] = useState([]);


 

useEffect(() => {

       
      if (PARAMS.storage === 'LS') {
       
          const newChat = JSON.parse(localStorage.getItem(PARAMS.lsname));              
          if (newChat.length > 0) {
              setChat(newChat);
              
              console.log(newChat)
              

          }
          
      }

      if (PARAMS.storage === 'JSON') {
        get(PARAMS.server)   ///locJson
        .then ((data) => setChat(data))
        .catch((e) => console.log(e.message))
      }


      let interval = null;
    
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    
      return () => clearInterval(interval);


 }, [seconds]);

  
  const handleSubmit = event => {
    event.preventDefault();

       
    const newPost = {    
         id: uuidv4(),      
         message: messageInputValue,
         author: authorInputValue    
     }

    
    chat.push(newPost)


    if (PARAMS.storage === 'LS') {
        let daneStorageJSON= JSON.stringify(chat);
        localStorage.setItem(PARAMS.lsname,daneStorageJSON);
    }
    

    if (PARAMS.storage === 'JSON') {
        post(PARAMS.server,newPost)      
    }
  

     setMessageInputValue('');
     //setAuthorInputValue('')

  }


  const handleMessageInputChange = event => {
    event.preventDefault();
    setMessageInputValue(event.target.value)
  }


  const handleAuthorInputChange = event => {
    event.preventDefault();
    setAuthorInputValue(event.target.value)
  }


  function handleRemove(id) {
    
    const removeItem = chat.filter((post) => {
          return post.id !== id;
    });

    setChat(removeItem);
    
    if (PARAMS.storage === 'LS') { 
      
      let daneStorageJSON= JSON.stringify(removeItem);
      localStorage.setItem(PARAMS.lsname,daneStorageJSON);
    }

    if (PARAMS.storage === 'JSON') { 
        remove(PARAMS.server,id);
    }      
  }


  
  
  

  const handleRemoveAll = event => {
  
     
    // const removeItem = chat.filter((post) => {
    //       return post.id !== id;
    // });c

     setChat([]);


    console.log('test')

    //setChat('');

    
    if (PARAMS.storage === 'LS') { 
      
      let daneStorageJSON= JSON.stringify('');
      localStorage.setItem(PARAMS.lsname,daneStorageJSON);
    }


    if (PARAMS.storage === 'JSON') { 

      console.log('test')
      chat.forEach(element => remove(PARAMS.server,element.id));
             
    }      
  }


  return (
    <div className="App">      
      <header className="App-header">


      <WelcomeMessage
          text='Fill in Your message'
      />

      <MessagesForm
          handleSubmit={handleSubmit}
          messageInputValue={messageInputValue}
          handleMessageInputChange={handleMessageInputChange}
          authorInputValue={authorInputValue}
          handleAuthorInputChange={handleAuthorInputChange}
      />
       

       <WelcomeMessage
          text='Messages:'
      />


      <ChatMessages 
        messagesFromApp={chat}
        handleRemoveMessageFromApp={handleRemove}
      
      />
      
      {/* <button onClick={() => handleRemoveAll()}>Remove all</button> */}

      <Button
          text = 'Remove all'
          handleClick = {handleRemoveAll}
      />


      
      
     

      </header>
    </div>
  );
}

export default App;

