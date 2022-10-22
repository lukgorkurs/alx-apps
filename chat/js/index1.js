import { stringify, v4 as uuidv4 } from 'uuid';



// const list = document.querySelector('#list');

// let todos = [];

// const renderTodos = () => {
//   todos.forEach(todo => {
//     list.innerHTML += `<li> ${todo.title} </li>`      
//   });
// }

// const fetchTodos = () => {
//   // fetch
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//       return response.json();
//     })
//     .then(data => {
//       todos = data;
//       renderTodos();
//     })
//     .catch(error => {
//       console.log(error.message);
//     })
// }

// fetchTodos();


const fetchBooks = () => {
  // fetch
  fetch('http://localhost:3000/books')
    .then((response) => {
      return response.json();
    })
    .then(data => {    
      bookLibrary = data; //
      renderBooks(data);
    })
    .catch(error => {
      console.log(error.message);
    })
}


// const postBook = (newBook) =>
// {
//   console.log(newBook);
//   fetch('http://localhost:3000/books', {
//     method: 'POST',
//     headers: {
//       'Content-Type': "application/json"
//     },
//     body: JSON.stringify(newBook)
//   })
 
//    fetchBooksFiltered('');

// }




const postBook = (newBook) => {
  fetch('http://localhost:3000/books/', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(newBook)
  })
  .then(res => res.json())
  .then(() => {
    bookLibrary.push(newBook);
    renderBooks(bookLibrary)
  })
}




const fetchBooksFiltered = (phrase) => {
  // fetch
  fetch('http://localhost:3000/books')
    .then((response) => {
      return response.json();
    })
    .then(data => {    
      bookLibrary = data; //
      renderBooks(data
        .filter(book => {
        return book.title.toLowerCase().includes(phrase.toLowerCase())
      }));
    })
    .catch(error => {
      console.log(error.message);
    })
}



// const booksFromLocalDatabase = [
//   {
//     title: "Harry Potter i kamień filozoficzny",
//     category: "Fantasy",
//     author: "J.K. Rowling",
//     year: 1992,
//     price: 49.99,
//   },
//   {
//     title: "God father",
//     category: "Crime",
//     author: "Mario Puzo",
//     year: 1960,
//     price: 59.99,
//   }
// ]

// let bookLibrary = JSON.parse(localStorage.getItem('books'));

// if(!bookLibrary) {
//   bookLibrary = booksFromLocalDatabase
// }

// Forma skrocona przy uzyciu operatora ??

// const bookLibrary = JSON.parse(localStorage.getItem('books')) ?? booksFromLocalDatabase;


let bookLibrary =  [];

//const bookLibrary = JSON.parse(localStorage.getItem('books')) ?? [];

const booksList = document.querySelector('#list');
const booksForm = document.querySelector('#booksForm');
const searchInput = document.querySelector('#searchInput')
const addBookForm = document.querySelector('#addBookForm');

const addBookTitleInput = document.querySelector('#newBookTitle')
const addBookCategoryInput = document.querySelector('#newBookCategory')
const addBookYearInput = document.querySelector('#newBookYear')
const addBookAuthorInput = document.querySelector('#newBookAuthor')
const addBookPriceInput = document.querySelector('#newBookPrice')

// * Destrukcja obiektow
// books.forEach(({ title, category  }) => {
//   booksList.innerHTML += `
//     <li>
//       <h2>${title}</h2>
//       <p>Kategoria: ${category}</p>
//     </li>
//   `
// })

const renderBooks = (books) =>  {
  booksList.innerHTML = '';

  books.forEach((book) => {
    booksList.innerHTML += `
      <li>
        <h2>${book.title}</h2>
        <p>Kategoria: ${book.category}</p>
        <p>Autor: ${book.author}</p>
        <p>Rok Wydania: ${book.year}</p>
        <p>Cena: ${book.price}zł</p>        
      </li>
    `
  })
}

//<p>UUID: ${uuidv4()}</p>

const filterBook = event => {
  event.preventDefault();


  fetchBooksFiltered(searchInput.value);
  // const foundBooks = bookLibrary.filter(book => {
  //   return book.title.toLowerCase().includes(searchInput.value.toLowerCase())
  // })

  // renderBooks(foundBooks);
  searchInput.value = '';
}

const addBook = event => {
  event.preventDefault();

  const newBook = {
    id: uuidv4(),
    title: addBookTitleInput.value,
    category: addBookCategoryInput.value,
    author: addBookAuthorInput.value,
    year: addBookYearInput.value,
    price: addBookPriceInput.value
  }


  postBook(newBook);
  // bookLibrary.push(newBook);
  // localStorage.setItem('books', JSON.stringify(bookLibrary))
  // renderBooks(bookLibrary)

  addBookTitleInput.value = ''
  addBookCategoryInput.value = ''
  addBookAuthorInput.value = ''
  addBookYearInput.value = ''
  addBookPriceInput.value = ''
}

//renderBooks(bookLibrary)

// fetchBooks();

fetchBooksFiltered('');

booksForm.addEventListener('submit', filterBook)
addBookForm.addEventListener('submit', addBook)

