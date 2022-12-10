import { useState, createContext } from "react";

export const GlobalContext = createContext();

//GlobalContext.Provider
//GlobalContext.Consumer

function GlobalProvider(props) {
    const [theme, setTheme]= useState('light');
 
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const globalState = {
        headerText: "Jakiś tekst1",
        footerText: "stopka...",
        theme, //zostanie przekazane tak jak theme: theme
        changeTheme
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