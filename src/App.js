import React, { createContext } from 'react';
import UseContext1 from './useContext1';

// userContext സൃഷ്ടിക്കുക
export const userContext = createContext();

function App() {
    return (
        <> 
            <userContext.Provider value={'mueen'}>
                <UseContext1 /> 
            </userContext.Provider>
        </>
    );
}

export default App;
