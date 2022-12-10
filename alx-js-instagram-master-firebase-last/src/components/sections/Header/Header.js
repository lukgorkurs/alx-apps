import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from 'contexts/global'


import './Header.css'
import Button from 'components/atoms/Button/Button';

function Header(props) {

  const globalState = useContext(GlobalContext);

  //console.log(globalState.headerText)
  //console.log('header '+globalState.theme)

  return (
    <header className={globalState.theme}>
      <h1>{props.logo}</h1>

      <Button
          text="Change Theme"
          onClick={globalState.changeTheme}
      />

      

      <nav>
        <ul>
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
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;