function WelcomeMessage(props) {

    return (
        <div>
        <p>
           {props.children}
        </p>
      </div>
    );

}

export default WelcomeMessage;