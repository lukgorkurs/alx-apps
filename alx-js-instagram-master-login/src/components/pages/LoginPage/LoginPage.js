import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';


import Footer from "components/sections/Footer/Footer";
import Header from "components/sections/Header/Header";
import LoginRegisterForm from "components/sections/LoginRegisterForm/LoginRegisterForm";

import { getUsersPass } from 'helpers/http'

function LoginPage() {
  const [mailInput, setMailInput] = useState('');  
  const [passInput, setPassInput] = useState('');
  const [myMessage, setMyMessage] = useState('');

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


 
      getUsersPass(mailInput)
        .then(data => {
          if (data[0].pass === passInput) {
            navigate('/');
          } else {
            setMyMessage('Błędne hasło')
          }


        })

  

    setMailInput('');
    setPassInput('');

  }


  return (
    <div>
      <Header logo="Instagram App"/>
      <h1>Login Page</h1>
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
       
      <Footer />
    </div>
  )
}

export default LoginPage;