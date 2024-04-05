import React, { createContext } from 'react';
import App from '../App';
const Context = createContext();

const Maincontext = () => {
    return (
        <Context.Provider>
            <App/>
        </Context.Provider>
    );
}

export default Maincontext;
