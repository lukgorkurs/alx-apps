// import Link from "components/atoms/Link/link";
import { Link } from 'react-router-dom'

function Header(props) {

    return (
      <header>
      <h1>{props.children}</h1>        
      <nav>
        <ul>
          <li>

            <Link to = "/add">Dodaj nowy post</Link>

            {/* <Link
                href="#"
                target= "_blank">
                Dodaj nowy post                
            </Link> */}

          </li>
        </ul>
      </nav>
    </header>
    );

}

export default Header;