import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import {post, get, remove} from '../../helpers/http.js';
import PARAMS from '../../helpers/params.js';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [messageInputValue, setMessageInputValue] = useState('');
  const [authorInputValue, setAuthorInputValue] = useState('');
  const [chat, setChat] = useState([]);


 

useEffect(() => {

     
      if (PARAMS.storage === 'LS') {
          const newChat = JSON.parse(localStorage.getItem(PARAMS.lsname));              
          if (newChat != null) setChat(newChat);
      }

      if (PARAMS.storage === 'JSON') {
        get(PARAMS.server)   ///locJson
        .then ((data) => setChat(data))
        .catch((e) => console.log(e.message))
      }

      ///-=----
      let interval = null;
    
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    
      return () => clearInterval(interval);
      ///-=----

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


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>
            Message:
            <input
              type="text"
              value={messageInputValue}
              onChange={handleMessageInputChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              value={authorInputValue}
              onChange={handleAuthorInputChange}
            />
          </label>
        <button type='submit'>Add Post</button>
      </form>

      <h3>Messages:</h3>

      <ul>
     
        {chat.map(post => {
          return <li key={post.id}>{post.message} <br/> {post.author} <br/>
            <button onClick={() => handleRemove(post.id)}>X</button>
            
            <hr/>
          </li>
        })}

      </ul>

      </header>
    </div>
  );
}

export default App;

