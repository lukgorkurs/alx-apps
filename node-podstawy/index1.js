
const fs = require('fs');
const fsp = fs.promises;


const loadData = () => {
    return fsp.readFile('./data.json', 'utf8')
  }

loadData()
  .then((data) => {

        // console.log(data);

        // console.log('----');

        // console.log(JSON.parse(data));

        // console.log('----');
             
        const parsedJSON = JSON.parse(data);
        const authors = parsedJSON.messages.map (message => message.author)
        console.log(authors)
  })

  loadData()
  .then((data) => {
        const parsedJSON = JSON.parse(data);

        const newMessage = {
            id: "128",
            author: "Damian",
            message: "Kurs ALX jest fajny !!!!"
        }
        parsedJSON.messages.push(newMessage);
        return fsp.writeFile('./data.json', JSON.stringify(parsedJSON), 'utf8')
  })
  .then(() => loadData())
  .then((data) => console.log('udało się!', data))
    

