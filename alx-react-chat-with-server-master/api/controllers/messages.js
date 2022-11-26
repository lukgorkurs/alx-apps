import { get, getAll, save, remove, update } from '../models/message.js'
// Kontroler jest to miejsce sterowania okreslona czescia aplikacji

// CRUD - 4 glowne operacje ktore mozna wykonac z danymi
// C - Create
// R - Read
// U - Update
// D - Delete

export const getMessages = () => {
  return getAll()
}

export const getMessage = id => {
  return get(id)
    .then(foundMessage => {
      return foundMessage ? foundMessage : {}
    })
}

export const saveMessage = (message) => {
  if(typeof message.id === 'number') {
    message.id = message.id.toString()
  }

  return save(message)
}

export const removeMessage = (idToRemove) => {
  return get(idToRemove)
    .then(() => {
      remove(idToRemove)
    })
    .catch(() => {
      return 'Cannot find message with ID given in the request'
    })
}

export const updateMessage = (messageToUpdate) => {

  return get(messageToUpdate.id)
    .then((message) => {
      // Metoda PUT dziala tak, ze jak element jest, to go modyfikuje, a jak nie ma to go tworzy

      return message ? update(messageToUpdate) : save(messageToUpdate)
    })
}

