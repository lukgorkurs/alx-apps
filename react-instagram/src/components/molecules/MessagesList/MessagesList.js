import Button from "../../atoms/Button/Button";

function MessagesList(props) {

    return (

        <ul>
        {
          props.messages.map(message => {
            return (
              <li key={message.id}>
                {message.message} - <strong>{message.author}</strong>                
                
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