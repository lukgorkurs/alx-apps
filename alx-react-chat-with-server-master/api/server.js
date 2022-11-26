import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import {
  getMessage,
  getMessages,
  saveMessage,
  removeMessage,
  updateMessage
} from './controllers/messages.js';

const app = express();

// Dokonfiguruje obsluge req.body w przypadku POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Umozliwiam robienie requestow z FE
app.use(cors())

// req - informacje o requescie przychodzacym
  // req.body - odbior danych z metody POST, PUT
  // req.params - odbior danych z metod GET, REMOVE
  // req.query - odbior danych z queryStringa

  // Przyklad querystring
  // https://www.google.com/search?q=szali&oq=szali&aqs=chrome..69i57j0i512l6j69i60.1006j0j7&sourceid=chrome&ie=UTF-8

// res - mozliwosc odeslania rzeczy do przegladarki
  // res.send - zwrocenie danyh
  // res.status - zwrocenie kodu odpowiedzi

// API - Application Programming Interface

// API jest to zbior danych dostepny w ramach jakiegos serwisu

// Endpoint jest to pojedynczy punkt, z ktorego pobieram konkretne dane

// api.allegro.pl/notifications -> zwroci informacje o moich notyfikacjach
// api.allegro.pl/messages -> zwroci informacje o moich wiadomosciach

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})


app.get('/messages', (req, res) => {
  getMessages()
    .then(data => {
      res.status(200).send(data);
    })
})

app.get('/messages/:messageId', (req, res) => {
  getMessage(req.params.messageId)
    .then(message => {
      res.status(200).send(message);
    })
})

app.post('/messages', (req, res) => {
  // W widoku mozemy zrobic dodatkowa walidacje danych wejsciowych, aby sie upewnic ze jest sens korzystania z kontrolera.
  if(!req.body.id) {
    return res.status(400).send('You need to provide ID');
  }
  // Zawartosc z POST
  // console.log(req.body);

  saveMessage(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
})

app.delete('/messages/:messageId', (req, res) => {
  // console.log(req.params.messageId);
  removeMessage(req.params.messageId)
    .then(() => {
      res.status(200).send('OK!');
    })
})

app.put('/messages', (req, res) => {
  if(!req.body.id) {
    return res.status(400).send('You need to provide ID');
  }

  updateMessage(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})