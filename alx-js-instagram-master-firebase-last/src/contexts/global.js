import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect } from "react";

import { auth } from "helpers/firebase";

export const GlobalContext = createContext();

//GlobalContext.Provider
//GlobalContext.Consumer

function GlobalProvider(props) {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);
 

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            
            if (user.email.length !=0)  {
                setUser(user.email)

            };
            


          //  setUser(user.email);
            //console.log(' -- '+user.email);
        })
    },[]);


    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const globalState = {
        headerText: "Jakiś tekst1",
        footerText: "stopka...",
        theme, //zostanie przekazane tak jak theme: theme
        changeTheme,
        user,
        setUser
    }
    

 

    // console.log(globalState.headerText);
    // console.log(globalState.theme;

    return (
        <GlobalContext.Provider value={globalState}>
            {/* <p>Hello from Global State</p> */}
            {props.children}
        </GlobalContext.Provider>
        
    )
}

export default GlobalProvider;