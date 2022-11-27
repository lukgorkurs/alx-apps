import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Footer from "components/sections/Footer/Footer";
import Header from "components/sections/Header/Header";
import LoginRegisterForm from "components/sections/LoginRegisterForm/LoginRegisterForm";

import { addUser } from 'helpers/http'


function RegisterPage() {
  const [mailInput, setMailInput] = useState('');
  const [isMailInputError, setIsMailInputError] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [isPassInputError, setIsPassInputError] = useState(false);

  const navigate = useNavigate();

  const handleMailChange = (event) => {
    setMailInput(event.target.value);
    console.log('M')
  }

  const handlePassChange = (event) => {
    setPassInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('HEJ');

    
    const isValid = mailInput.trim().length > 0
      && passInput.trim().length > 2;


      console.log(mailInput);

    setIsMailInputError(mailInput.trim().length === 0)
    setIsPassInputError(passInput.trim().length <= 2)

    // if(authorInput.trim().length === 0) {
    //   setIsAuthorInputError(true)
    // } else {
    //   setIsAuthorInputError(false)
    // }


    if(!isValid) {
      // jesli w funkcji uzywamy return, to JS nie wejdzie do dalszego wywolania funkcji
      return;
    }

    console.log('Po walidacji');

    // Date.now() zwraca obecny czas jako timestamp
    // timestamp to jest liczba sekund ktora uplynela od 1.01.1970
    const randomId = Date.now();

    const newUser = {
      id: uuidv4(),
      mail: mailInput,
      pass: passInput,
      name: null,
      avatar: null
    }

    addUser(newUser)
      .then(() => {
        navigate('/');
      })

    // Czyszczenie pol formularza
    setMailInput('');
    setPassInput('');
  }


  return (
    <div>
      <Header logo="Instagram App"/>
      <h1>Register Page</h1>
      <LoginRegisterForm
        handleSubmit={handleSubmit}
        loginInput={mailInput}
        handleMailChange={handleMailChange}
        passInput={passInput}
        handlePassChange={handlePassChange}
        isMailInputError={isMailInputError}
        isPassInputError={isPassInputError}
        buttonText="Register"
      />
      <Footer />
    </div>
  )
}

export default RegisterPage;