import { useState, useEffect } from 'react';

import MessagesList from 'components/sections/MessagesList/MessagesList';
import MainTemplate from 'components/templates/MainTemplate';

import {
  removeMessage,
  getMessages
} from 'helpers/http';
import Footer from 'components/sections/Footer/Footer';

function HomePage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('Test')
    getMessages()
      .then(data => {
        setMessages(data);
      })
  }, [])

  const handleMessageRemove = (id) => {
    const filteredMessage = messages.filter(message => {
      return message.id !== id
    })

    removeMessage(id)
    setMessages(filteredMessage)
  }

  return (
    <div>

      <MainTemplate
          welcomeText="Messages List">

          <MessagesList
            messages={messages}
            handleMessageRemove={handleMessageRemove}/>    

      </MainTemplate>
      
    </div>
  );
}

export default HomePage;