import { Link } from 'react-router-dom'


function Header() {

  
  return (

    <div className="main">
      <ul>
                <li>
                  <Link to="/">
                    Main
                  </Link>
                </li>
                <li>
                <Link to="/Login">
                  Login
                </Link>
                </li>
                <li>
                <Link to="/Register">
                  Register
                </Link>
                </li>
     </ul>
    </div>
  );

}

export default Header;
