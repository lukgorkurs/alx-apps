const fs = require('fs');
const fsp = fs.promises;
// Zadania do wykonania

// 1. Stworz funkcje, ktora odczyta wszystkie dostepne filmy w pliku movies.json

const readFromJSON = () => {
  return fsp.readFile('./movies.json', 'utf8')
    .then((data) => JSON.parse(data));
}

// readFromJSON()
//   .then((data) => {
//     console.log(data)
//   })

// 2. Stworz funkcje, ktora znajdzie z movies.json film o polu imdbID rowny tt2306299

// readFromJSON()
//   .then(data => {
//     const movie = data.movies.find(movie => movie.imdbID === 'tt2306299')

//     console.log(movie);
//   })

// 3. Stworz funkcje, ktora znajdzie w movies.json wszystkie filmy wyprodukowane po roku 2000

// readFromJSON()
//   .then(data => {
//     const moviesAfter2000 = data.movies.filter(movie => {
//       return movie.Year >= 2000
//     })

//     console.log(moviesAfter2000);
//   })

// 4. Stworz funkcje, ktora znajdzie element o polu imdbID tt2707408 i zmieni jego rating na 8.0 a nastepnie zapisze do pliku

readFromJSON()
  .then(data => {
    // Zwraca indeks 10
    const foundMovieIndex = data.movies.findIndex(movie => movie.imdbID === 'tt2707408');

    data.movies[foundMovieIndex].Rating = '8.0';

    fsp.writeFile('./movies.json', JSON.stringify(data));
  })


// parsedJSON.movies[foundMovieIndex].Rating = '8.0';
// fs.writeFile(parsedJSON)

// 5. Stworz funkcje, ktora doda do tablicy movies, nowy film

readFromJSON()
  .then(data => {
    data.movies.push({
      Title: "Jak rozpętałem drugą wojnę światową",
      Year: "1969"
    })

    return fsp.writeFile('./movies.json', JSON.stringify(data), 'utf8');
  })
  .catch(error => {
    console.log(error);
  })


// 6. Stworz funkcje, ktora usunie element z tablicy o polu imdbID rowne tt3748528 a nastepnie zapisze plik :)

readFromJSON()
  .then(data => {
    const filteredMovies = data.movies.filter(movie => {
      return movie.imdbID !== 'tt3748528'
    });

    fsp.writeFile('./movies.json', JSON.stringify(filteredMovies), 'utf8')
  })