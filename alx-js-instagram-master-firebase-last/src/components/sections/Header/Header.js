import { getAuth, signOut } from "firebase/auth";
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from 'contexts/global'


import './Header.css'
import Button from 'components/atoms/Button/Button';

function Header(props) {  
  const navigate = useNavigate();

  const globalState = useContext(GlobalContext);
  const auth = getAuth();

  const handleLogout = (event) => {
      signOut(auth).then(() => {
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
      //console.log('Logout')
  }

  console.log(auth);

  return (
    <header className={globalState.theme}>
      <h1>{props.logo}</h1>

      <Button
          text="Change Theme"
          onClick={globalState.changeTheme}
      />

    
    {/* <Button
          text="Logout"
          onClick={signOut()}
      /> */}



{/*  Hello {auth.currentUser.displayName} */}



       { auth.currentUser
       ? <img src={auth.currentUser.photoURL} alt="avatar"/> 
       : null}

     
        <ul>          
            <li>

            Hello:
            {auth.currentUser
            ?   auth.currentUser.displayName
            : null}

              
            </li>
            <li>
            {/* komponent Link od react-router-dom, rozni sie tym, ze zamiast atrybutu href jest atrybut to */}
            <Link to="/add">
              Dodaj nowy post
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>    
          <li onClick={handleLogout}>
              Logout
          </li>     
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>    
          <li>                        
          {
          globalState.user
            ? <Link to="/MyProfile">           
              My Profile
            </Link>
            : ''
          }         
          </li>        
        </ul>
   
    </header>
  )
}

export default Header;