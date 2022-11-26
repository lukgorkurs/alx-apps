import Link from "../../atoms/Link/link";

function Header(props) {

    return (
      <header>
      <h1>{props.children}</h1>        
      <nav>
        <ul>
          <li>

            <Link
                href="#"
                target= "_blank">
                Dodaj nowy post                
            </Link>

          </li>
        </ul>
      </nav>
    </header>
    );

}

export default Header;