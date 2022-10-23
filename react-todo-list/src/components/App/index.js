import { useState, useEffect } from 'react';
import './index.css';

function App() {

    const [text, changeText] = useState('World');  //poczatkowe słowo  const [a, b] = useState('c');

    const [inputValue, setInputValue] = useState('');  


    // const hook = useState('World');
    // const text = hook[0];
    // const changeText = hook[1];

const handleClick = (event) => {
    event.preventDefault();
    changeText('Hej!') 
}


const handleInputChange =(event) => {
    event.preventDefault();
    //console.log(event.target.value)
    setInputValue(event.target.value)
   // changeText(event.target.value)
}

const handleSubmit =(event) => {
    event.preventDefault();
    changeText(inputValue);
    setInputValue('');
}


  return (

    // <div className="App" onClick={handleClick}>  
    <div className="App" >  
    <form onSubmit={handleSubmit}>
      <label>
        Wpisz treść
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
      </label>
      <button type="submit">Send</button>
    </form>
    <h1> Hello {text} </h1>
  </div>
  );
}

export default App;
