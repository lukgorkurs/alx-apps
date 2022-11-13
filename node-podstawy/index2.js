
console.log('Hello!');
// Node.JS domyslnie posiada inny sposob importow
// Node.JS uzywa domyslnie requirejs do importow
const fs = require('fs');

// fsp jest to wersja modulu fs, oparta na promisach zamiast callbackach (co poprawia czytelnosc)
const fsp = fs.promises;

// to jest to samo co - import fs from 'fs'

// // readFile - odczyt
// fsp.readFile('./kurs.txt', 'utf8')
//   .then(data => {
//     console.log(data);
//     // writeFile - zapis

//     // Mimo ze mamy promise jeden po drugim, to mamy troche Promise hell
//     const newContent = 'Zmiana tekstu na nowe';
//     fsp.writeFile('./kurs.txt', newContent, 'utf8')
//       .then(() => {
//         console.log('Udalo sie zapisac')
//       })
//   })


const loadData = () => {
  return fsp.readFile('./kurs.txt', 'utf8')
}

const saveData = () => {
  const newContent = 'Zmiana tekstu na nowe';
  return fsp.writeFile('./kurs.txt', newContent, 'utf8')
}
// moge zrobic .then() po loadData, poniewaz loadData zwraca Promise
loadData()
  .then(() => saveData());

// * Mozliwosc skrocenia zapisu

// loadData()
//   .then(saveData);

// * Stosowanie async/await

// ES6 - then/catch
// ES7+ - async/await

// async/await dziala tylko w funkcjach

// const asyncAwaitFunction = async () => {
//   // await jest to sposob zeby oczekiwac na koniec promisa
//   await loadData()
//   saveData()
// }

// asyncAwaitFunction()

// Inny przyklad uzycia async/await

// fetch('http://localhost:5000/messages')
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data);
//   })

// const loadData2 = async () => {
//   // await dziala jak jeden krok promise'a
//   const response = await fetch('http://localhost:5000/messages')
//   const data = await response.json()
//   console.log(data);
// }
// loadData2()

// Zadanie na teraz

// 1. Napisz funkcje, ktora bedzie odczytywala dane z pliku JSON, a nastepnie za pomoca metody map, wyswietl w konsoli tablice authorow wiadomosci

// 2. Napisz funkcje, ktora bedzie zapisywala nowe wiadomosci do pliku JSON (zeby poprawnie zapisac do pliku JSON, najpierw musisz go odczytac, zparsowac i nastepnie zapisac)