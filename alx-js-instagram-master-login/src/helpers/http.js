export const getMessages = () => {
  return fetch('http://localhost:5000/messages')
    .then(res => res.json())
}

export const getMessage = (id) => {
  return fetch(`http://localhost:5000/messages/${id}`)
    .then(res => res.json())
}

export const addMessage = (messageToAdd) => {
  return fetch('http://localhost:5000/messages', {
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

export const editMessage = (id, messageToEdit) => {
  return fetch(`http://localhost:5000/messages/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': "application/json"
    },
    body: JSON.stringify(messageToEdit)
  })
}

export const addUser = (userToAdd) => {
  return fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(userToAdd)
  })
}

export const getUsersPass = (mail) => {
  return fetch(`http://localhost:5000/users?mail=${mail}`)  
    .then(res => res.json())
}

// ${mail}