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
                <button type='submit'>Add Post</button>
            </form>

        )

}


export default MessagesForm;