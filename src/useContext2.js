import React, { useContext } from 'react';
import { userContext } from './App';

function UseContext2() {
    const user = useContext(userContext);
    return (
        <>
            <h1>useContext2 {user}</h1>
        </>
    );
}

export default UseContext2;
