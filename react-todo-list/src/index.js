import React, {useState} from 'react';  //obowiązkowe....

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './components/App'; //nie trzeba index bo w folderze kod jest w index

import TodoList from './components/TodoList'; //nie trzeba index bo w folderze kod jest w index




const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'test'

const htmlNode = <p>React jest fajny</p>



const calculateSum = (a, b) => {
  return a + b;
}

root.render(
  <React.StrictMode>
{/*     
    <h1 className="heading">Hello World! {name} { 2 + 2 }</h1>
    {htmlNode}
    
    <p>Suma liczby 2 i 2 to {calculateSum(2, 2)}</p> */}

    {/* <App /> */}

    <TodoList />

  </React.StrictMode>
);




