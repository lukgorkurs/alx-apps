import Button from '../../atoms/WelcomeMessage/Button/Button';

function MessagesForm(props) {


        return (


            <form onSubmit={props.handleSubmit}>
                <label>
                    Message:
                    <input
                        type="text"
                        value={props.messageInputValue}
                        onChange={props.handleMessageInputChange}
                    />
                </label>
                <label>
                    Author:
                    <input
                        type="text"
                        value={props.authorInputValue}
                        onChange={props.handleAuthorInputChange}
                    />
                </label>
                {/* <button type='submit'>Add Post</button> */}

                <Button
                      text = 'Add Post'
                      handleClick = {props.handleSubmit}
                />


            </form>

        )

}


export default MessagesForm;