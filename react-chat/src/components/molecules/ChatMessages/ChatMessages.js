function ChatMessages(props) {
    return (
         

         <ul>
     
        {props.messagesFromApp.map(post => {
          return <li key={post.id}>{post.message} <br/> {post.author} <br/>
            <button onClick={() => props.handleRemoveMessageFromApp(post.id)}>X</button>
            
            <hr/>
          </li>
        })}

      </ul>



    )
}

export default ChatMessages;