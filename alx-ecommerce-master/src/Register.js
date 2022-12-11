import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

import { auth } from "./firebase";
import Header from "./Header"

function Register() {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [validationError, setValidationError] = useState(false)

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmailInputValue(event.target.value);
  }

  const handlePasswordInputChange = (event) => {
    setPasswordInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidationError(false)

    createUserWithEmailAndPassword(auth, emailInputValue, passwordInputValue)
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        setValidationError(true);
      })
  }

  // 1. W momencie jak nie uda sie zalogowac uzytkownika (bo wpisze zle dane), to wypisz ta wiadomosc pod formularzem.

  // 2. Zrob obsluge rejestracji, w ktorej rejestrujemy uzytkownika a nastepnie przechodzimy na strone glowna

  return (
    <div>
      <Header/>
      <h1>Hello Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text" value={emailInputValue} onChange={handleEmailChange}/>
        </label>
        <label>
          Hasło
          <input type="password" value={passwordInputValue} onChange={handlePasswordInputChange}/>
        </label>
        <button>Register</button>
      </form>
      {validationError && <small>Twoje email jest niepoprawny lub haslo ma mniej niz 6 znakow</small>}
    </div>
  )
}

export default Register