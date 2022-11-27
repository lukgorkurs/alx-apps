export const getMessages = () => {
  return fetch('http://localhost:5000/messages')
    .then(res => res.json())
}

export const addMessage = (messageToAdd) => {
  fetch('http://localhost:5000/messages', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(messageToAdd)
  })
}

export const removeMessage = (idToRemove) => {
  fetch(`http://localhost:5000/messages/${idToRemove}`, {
    method: 'DELETE'
  })
}

// export const editMessage = (idToEdit) => {
// fetch(`http://localhost:5000/messages/${idToEdit}`, {
//   method: 'PUT',
//   headers: {
//     'Content-type': "application/json"
//   },
//   body: JSON.stringify(editedMessage)
// })


export const getMessage = (idToEdit) => {
fetch(`http://localhost:5000/messages/${idToEdit}`)
      .then(res => res.json())
}