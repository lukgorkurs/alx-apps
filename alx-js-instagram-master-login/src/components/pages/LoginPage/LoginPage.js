import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'helpers/firebase';

import LoginRegisterForm from "components/sections/LoginRegisterForm/LoginRegisterForm";
import MainTemplate from 'components/templates/MainTemplate';

import { getUsersPass } from 'helpers/http'

function LoginPage() {
  const [mailInput, setMailInput] = useState('');  
  const [passInput, setPassInput] = useState('');
  const [myMessage, setMyMessage] = useState('');
  const [isLoginError, setIsLoginError] = useState('');


  



  // const [isMailInputError, setIsMailInputError] = useState(false);
  // const [isPassInputError, setIsPassInputError] = useState(false);
  

  

  const navigate = useNavigate();

  

  const handleMailChange = (event) => {
    setMailInput(event.target.value);
  }

  const handlePassChange = (event) => {
    setPassInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setMyMessage('');
    
    // setIsMailInputError(mailInput.trim().length === 0)
    // setIsPassInputError(passInput.trim().length <= 2)

    // if(!isValid) {
    //   return;
    // }


 
      // getUsersPass(mailInput)
      //   .then(data => {
      //     if (data[0].pass === passInput) {
      //       navigate('/');
      //     } else {
      //       setMyMessage('Błędne hasło')
      //     }


      //   })
  

      signInWithEmailAndPassword(auth, mailInput, passInput)
            .then(()=>{
                navigate('/')
            })
            .catch(() => setIsLoginError(true));


    setMailInput('');
    setPassInput('');

  }


  return (
    
    <MainTemplate 
      welcomeText="Login Page">

      <LoginRegisterForm
        handleSubmit={handleSubmit}
        mailInput={mailInput}
        handleMailChange={handleMailChange}
        passInput={passInput}
        handlePassChange={handlePassChange}
        // isMailInputError={isMailInputError}
        // isPassInputError={isPassInputError}
        buttonText="Login"
        text={myMessage}
      />
    </MainTemplate>

  )
}

export default LoginPage;