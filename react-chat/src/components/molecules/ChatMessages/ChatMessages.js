import Button from '../../atoms/WelcomeMessage/Button/Button';


function ChatMessages(props) {

  

    return (
         

         <ul>
     
        {props.messagesFromApp.map(post => {
          return <li key={post.id}>{post.message} <br/> <b>{post.author}</b>
            {/* <button onClick={() => props.handleRemoveMessageFromApp(post.id)}>X</button> */}


            <Button
                      text = 'X'
                      handleClick = {() => props.handleRemoveMessageFromApp(post.id)}
             />

            
            <hr/>
          </li>
        })}

      </ul>



    )
}

export default ChatMessages;