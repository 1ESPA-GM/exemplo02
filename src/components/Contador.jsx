import {useState} from 'react'
import React from 'react';

const Contador = () => {
    const[contador, setContador]=useState(0);
    
    return(

        <>
        <h1>eu comtador</h1>

        <p>Você clicou {contador}</p>
        <button onClick={()=>setContador(contador +1)}>Aumentar</button>
        <button onClick={()=>setContador(contador -1)}>Diminuir</button>
        </>
        
     
    )
}

export default Contador