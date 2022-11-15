// Model jest to czesc architektury MVC, ktora odpowiada za kontakt z danymi
import fs from 'fs';
const fsp = fs.promises;

const MESSAGES_JSON_PATH = 'api/db/messages.json'

const getJSONFile = (fileName) => {
  return fsp.readFile(fileName, 'utf8')
    .then(data => JSON.parse(data))
}

const saveToJSONFile = (fileName, objectToSave) => {
  return fsp.writeFile(fileName, JSON.stringify(objectToSave), 'utf8');
}

export const getAll = () => {
  return getJSONFile(MESSAGES_JSON_PATH)
}

export const get = (id) => {
  return getJSONFile(MESSAGES_JSON_PATH)
    .then(data => {
      return data.messages
        .find(message => message.id === id)
    })
}

export const save = objectToSave => {
  return getJSONFile(MESSAGES_JSON_PATH)
    .then(data => {
      data.messages.push(objectToSave);

      return saveToJSONFile(MESSAGES_JSON_PATH, data)
    })
}

export const remove = id => {
  return getJSONFile(MESSAGES_JSON_PATH)
    .then(data => {
      const filteredElements = data.messages.filter(message => {
        return message.id !== id
      })

      const structureToSave = {
        messages: filteredElements
      }

      return saveToJSONFile(MESSAGES_JSON_PATH, structureToSave)
    })
}

export const update = objectToUpdate => {
  return getJSONFile(MESSAGES_JSON_PATH)
    .then(data => {
      const foundElementIndex = data.messages.findIndex(message => message.id === objectToUpdate.id)

      if(objectToUpdate.message) {
        data.messages[foundElementIndex].message = objectToUpdate.message
      }
      if(objectToUpdate.author) {
        data.messages[foundElementIndex].author = objectToUpdate.author
      }

      return saveToJSONFile(MESSAGES_JSON_PATH, data)
    })
}