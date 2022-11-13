const fs = require('fs');
const fsp = fs.promises;

// Zadania do wykonania

// 1. Stworz funkcje, ktora odczyta wszystkie dostepne filmy w pliku movies.json

const loadData = () => {
    return fsp.readFile('./movies.json', 'utf8')
  }

//   loadData()
//   .then((data) => {
//         const parsedJSON = JSON.parse(data);
//         const titles = parsedJSON.movies.map (movie =>movie.Title)
//         console.log(titles)
//   })

// 2. Stworz funkcje, ktora znajdzie z movies.json film o polu imdbID rowny tt2306299

// loadData()
//   .then((data) => {
//         const parsedJSON = JSON.parse(data);
//         const titles = parsedJSON.movies
//             .filter (movie => movie.imdbID.includes('tt2306299'))        
//             .map (movie =>movie.Title)
//         console.log(titles)
//   })

// 3. Stworz funkcje, ktora znajdzie w movies.json wszystkie filmy wyprodukowane po roku 2000

// loadData()
//   .then((data) => {
//         const parsedJSON = JSON.parse(data);
//         const titles = parsedJSON.movies
//             .filter (movie => (movie.Year > 2000))        
//             .map (movie =>movie.Title + ' -> ' + movie.Year)
//         console.log(titles)
//   })


// 4. Stworz funkcje, ktora znajdzie element o polu imdbID tt2707408 i zmieni jego rating na 8.0 a nastepnie zapisze do pliku


        
        // parsedJSON
        //     .filter (movie => movie.imdbID.includes('tt2707408')).imdbRating = '8.0';
            

// loadData()
//   .then((data) => {
//         const parsedJSON = JSON.parse(data);
//         //const titles = 
//         parsedJSON.movies
//             .filter (movie => movie.imdbID.includes('tt2707408'))        
//             .map (movie => (movie.imdbRating = '9.9'))       

//         return fsp.writeFile('./movies.json', JSON.stringify(parsedJSON), 'utf8')
//   })

        



// 5. Stworz funkcje, ktora doda do tablicy movies, nowy film

// loadData()
//   .then((data) => {
//         const parsedJSON = JSON.parse(data);
      
//         const newMovie = {
//             "Title": "Test 11",
//             "Year": "2009",
//             "Rated": "PG-13",
//             "Released": "18 Dec 2009",
//             "Runtime": "162 min",
//             "Genre": "Action, Adventure, Fantasy",
//             "Director": "James Cameron",
//             "Writer": "James Cameron",
//             "imdbID": "12132311"
//         }

//         parsedJSON.movies.push(newMovie);
//         return fsp.writeFile('./movies.json', JSON.stringify(parsedJSON), 'utf8')
//   })

//6. usunie element z tablicy tt3748528


// const titles = parsedJSON.movies
//             .filter (movie => movie.imdbID.includes('tt2306299'))        
//             .map (movie =>movie.Title)
//         console.log(titles)

loadData()
  .then((data) => {
        const parsedJSON = JSON.parse(data);
        const newMovies = parsedJSON.movies
            .filter (movie => ! movie.imdbID.includes('tt3748528'))                    
            //.map (movie =>movie.Title)        

        console.log(newMovies.length);

        return fsp.writeFile('./movies.json', JSON.stringify(newMovies), 'utf8')
  })