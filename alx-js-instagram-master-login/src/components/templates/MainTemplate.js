import Header from "components/sections/Header/Header";
import Footer from "components/sections/Footer/Footer";
import WelcomeMessage from "components/sections/WelcomeMessage/WelcomeMessage";

function MainTemplate (props) {
    return (           
        <div>
            <Header logo="Instagram App"/>
                <WelcomeMessage>              
                    <h3>{props.welcomeText}</h3>
                </WelcomeMessage>
                {props.children}
            <Footer />

        </div>
    )


}

export default MainTemplate;