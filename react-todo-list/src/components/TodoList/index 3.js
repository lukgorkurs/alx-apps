import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


// 1. Stworz formularz, ktory posiada pole title i guzik do submitowania formularza. (aby dodac zadanie do listy)
// 2. Stworz listę, która będzie przetrzymywała zadanie do wyswietlenia (tylko jedno)
// 3*. przy uzyciu funkcji map, spraw zeby mozna bylo dodawac wiele zadan
// 4**. dodaj hook useEffect i dane odczytuj i zapisuj do localStorage :)


//obsluga endpointa http    jsonplaceholder /

// 5***. dodaj json-server i zrob obsluge API

function TodoList() {
  const [todoInputValue, setTodoInputValue] = useState('');
  // const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([]);
  const [currentTime, setCurrentTime] = useState(null);

  // useEffect - wbudowany hook do asynchronicznosci

  // przeznaczenie
  // 1. zapytania http
  // 2. ustawienie komponentow (timer, stoper, poczatkowa konfiguracja)

  // Opis
  // pusta tablica [] oznacza, ze funkcja odpali tylko tylko raz, po pierwszym renderze

  useEffect(() => {
    getTime(); // pierwsze wywolanie (zeby nie bylo opoznienia)
    // setInterval odpala sie co sekunde
    setInterval(() => {
      // co sekunde update czasu
      getTime();
    }, 1000)
  }, [])

  const getTime = () => {
    // obiekt Date jest to wbudowany obiekt do obslugi dat
    const date = new Date();


    const temp = date.toString();

    setCurrentTime(temp.substring(0,24))
  }

  const handleTodoInputChange = event => {
    setTodoInputValue(event.target.value)
  }

  const handleSubmit = event => {
    // MUST HAVE PRZY SUBMICIE
    event.preventDefault();

    // setTodoText(todoInputValue)

    const newTodo = {
      id: uuidv4(),
      title: todoInputValue,       
      createdAt:currentTime    
    }


    console.log(currentTime)

    const newTodos = todos.concat(newTodo);
    setTodos(newTodos);

    setTodoInputValue('')
  }

  const handleRemoveTodos = () => {
    setTodos([]);
  }

  return (
    <div>
      <p>Todo List</p>
      {/* React dziala tak, ze jak element zwroci null, to go nie wyswietla */}
      {currentTime ? <p>{currentTime}</p> : null}
      {/* {currentTime && <p>{currentTime}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Task
          <input
            type="text"
            value={todoInputValue}
            onChange={handleTodoInputChange}
          />
        </label>
        <button type='submit'>Add Task</button>
      </form>
      <ul>
        {/* <li>{todoText}</li> */}

        {/* {
          title: 'Wynieść śmieci'
        } */}

        {/* <li>{TODOS[0].title}</li> */}

        {todos.map(todo => {
          return <li key={todo.id}>{todo.title} / {todo.createdAt ? todo.createdAt : null}</li>
        })}
      </ul>
      {/* 2. Zrobic obsluge usuwania zadan z listy */}
      <button onClick={handleRemoveTodos}>Remove Todos</button>
    </div>
  )
}

export default TodoList;