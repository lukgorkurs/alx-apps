import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";


function MessagesForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>             
        <Input
            value={props.authorInput}
            handleChange={props.handleAuthorChange}>
            Author
        </Input>
        <Input
            value={props.messageInput}
            handleChange={props.handleMessageChange}>
            Message
        </Input>
        <Button 
          type='submit'
          onClick={props.handleSubmit}>
          Send          
        </Button>        
        
      </form>
    )

}

export default MessagesForm;
