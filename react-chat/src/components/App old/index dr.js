import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

// Jak pisac aplikacje krok po kroku
// 1. Tworze HTML
// 2. Mockuje dane (tworze tablice obiektow)
// 3. Robie obsluge renderowania tablicy obiektow
// 4. Dopinam formularz
// 5. Robie dodawanie rzeczy z formularza do tablicy obiektow
// 6. Renderuje nowa tablice

// const messages = [
//   {
//     id: '1',
//     author: 'Damian',
//     message: 'Kurs ALX jest fajny'
//   },
//   {
//     id: '2',
//     author: 'Paweł',
//     message: 'Co dzisiaj zjem?'
//   }
// ]

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInputValue, setMessageInputValue] = useState('')
  const [authorInputValue, setAuthorInputValue] = useState('')

  useEffect(() => {
    const messagesFromLS = localStorage.getItem('messages');

    if(messagesFromLS) {
      setMessages(JSON.parse(messagesFromLS))
    }
  // Znak [] oznacza, ze useEffect wykona sie tylko raz, po pierwszym renderze
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const newMessage = {
      id: uuidv4(),
      author: authorInputValue,
      message: messageInputValue
    }

    // concat rowniez sluzy do dodawania do tablicy, ale jest mniej inwazyjna (nie musze zmieniac parametrow, tylko tworzy mi sie nowa tablica);

    const newMessagesArray = messages.concat(newMessage);
    setMessages(newMessagesArray)
    localStorage.setItem('messages', JSON.stringify(newMessagesArray))

    // resetowanie wartosci inputow
    setMessageInputValue('');
    setAuthorInputValue('');
  }

  const handleAuthorInputChange = event => {
    // Zawsze zawartosc inputa jest dostepna pod event.target.value
    // console.log(event.target.value);
    setAuthorInputValue(event.target.value) ;
  }

  const handleMessageInputValue = event => {
    setMessageInputValue(event.target.value);
  }

  const handleRemoveMessage = (idToRemove) => {
    // console.log(idToRemove);
    // Usuwanie elementow z tablicy obiektow, w JS robi sie za pomoca funkcji filter.

  // Lapiemy wszystkie elementy, poza tym, ktory zostal klikniety
    const messagesWithRemovedItem = messages.filter(message => {
      return message.id !== idToRemove
    })

    setMessages(messagesWithRemovedItem);
    localStorage.setItem('messages', JSON.stringify(messagesWithRemovedItem));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Author
          <input
            type="text"
            placeholder="Wpisz autora"
            value={authorInputValue}
            onChange={handleAuthorInputChange}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            placeholder="Wpisz wiadomość"
            value={messageInputValue}
            onChange={handleMessageInputValue}
          />
        </label>
        <button type="submit">Send</button>
      </form>

      <ul>
        {
          messages.map(message => {
            return (
              <li key={message.id}>
                {message.message} - <strong>{message.author}</strong>
                {/* jezeli potrzebuje przekazac informacje typu ID do klikanego elementu, potrzebuje uzyc pustej funkcji strzalkowej przy definicji eventu i przekazac parametr do funkcji. */}
                <button
                  onClick={() => handleRemoveMessage(message.id)}
                >
                  X
                </button>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;