import { useState, useEffect } from 'react';
import './index.css';



// const myList = {
//     {
//                 tittle: 'pierwsze'      
//     }
// }


let myList= [] ;    




function TodoList() {


    const [inputValue, setInputValue] = useState('');  
  //  const [todos, setTodos] = useState([]);

    
 

  //  const [tasks, changeText] = useState('');


    // useEffect(() => {
    //     console.log('wykonal fa')
    // }, [myList]);

    

    const handleInputChange =(event) => {
        event.preventDefault();       
        setInputValue(event.target.value)       
    }
    

    const handleSubmit =(event) => {
        event.preventDefault(); 
        myList.push(inputValue);
        setInputValue('');    
    }
    


    return (
        <div>
            <p> Todo List</p>
            <form onSubmit={handleSubmit}>
                <label>
                Tittle:
                    <input 
                        type="text"
                        value={inputValue}                        
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Send</button>
            </form>

            <ul>
                {myList.map((task) => {
                    return(
                        <li>{task}</li>
                    );
                }) ?? []}
            </ul>

        </div>
    )
}


export default TodoList;