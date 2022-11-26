import Button from "components/atoms/Button/Button";
import { Link } from 'react-router-dom'

function MessagesList(props) {

    return (

// handleClick={() => props.handleRemoveMessage(message.id)} >

        <ul>
        {
          props.messages.map(message => {
            return (
              <li key={message.id}>
                {message.message} - <strong>{message.author}</strong> 
                
                

                <Link to = "/edit/{message.id}">
                
                <Button>
                    
                    Edit
                </Button>

                </Link>


                                       

                <Button
                    handleClick={() => props.handleRemoveMessage(message.id)} >
                    X
                </Button>                     
              </li>
            )
          })
        }
      </ul>

    );
}

export default MessagesList;