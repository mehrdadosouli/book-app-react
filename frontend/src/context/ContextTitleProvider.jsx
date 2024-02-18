import React, { createContext, useEffect, useState } from 'react';

export const ContextTitle=createContext(null)
const ContextTitleProvider = ({children}) => {
    const [texts,setText]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/text')
        .then(res=>res.json())
        .then(dataa=>setText(dataa))
        .catch(err=>console.log(err))
    },[])
    return (
        <>
            <ContextTitle.Provider value={texts}>
                {children}
            </ContextTitle.Provider>
        </>
    );
};

export default ContextTitleProvider;