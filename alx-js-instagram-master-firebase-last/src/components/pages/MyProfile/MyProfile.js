import { getAuth, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Input from "components/atoms/Input/Input";
import Button from 'components/atoms/Button/Button';


function MyProfile() {

    const [nameInput, setNameInput]  = useState('');
    const [avatarInput, setAvatarInput]  = useState('');
  

    const auth = getAuth();


    

    const navigate = useNavigate();

    

    useEffect(() => {       
        setNameInput(auth.currentUser.displayName);
        setAvatarInput(auth.currentUser.photoURL);
    },[]);



    const handleSubmit = (event) => {
        event.preventDefault();
    
    
        updateProfile(auth.currentUser, {
            displayName: nameInput, photoURL: avatarInput
          }).then(() => {
            // Profile updated!
            // ...
      
            console.log(auth.currentUser.displayName);
            navigate('/')

          }).catch((error) => {
            // An error occurred
            // ...
          });
    
        //setEmailInputValue(event.target.value);
        //console.log(nameInput)
      }

      const handleNameChange = (event) => {
        setNameInput(event.target.value);
      }

      const handleAvatarChange = (event) => {
        setAvatarInput(event.target.value);
      }

  return (
    <MainTemplate>
      <h3>My profile</h3>

      <form onSubmit={handleSubmit}>      
        <label>
          Name
          <Input
                 value={nameInput}
                 onChange={handleNameChange}
          />
          Avatar
          <Input
               value={avatarInput}
               onChange={handleAvatarChange}
          />
          <Button
            text="Send"
          />

        </label>
        </form>
    </MainTemplate>
  )
}

export default MyProfile;