import React, { useEffect, useState } from "react";
import { findAllCharacters } from "../functions/functions";

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null);
    useEffect(() => {
        findAllCharacters(setPersonajes);
    },[]);
    return (
        // <div>
        //     <h1>Inicio</h1>
        // </div>

        <> 
            {personajes!=null && personajes.map(personaje => (     //!==null es para que no se muestre el error de que no hay personajes
                <div key={personaje.id}>    
                    <h1> <a href={`/personaje/${personaje.id}`}>{personaje.name}</a></h1>
                    <img src={personaje.image} alt={personaje.name} />
                    </div>)
            )}
        </>
    );
}

export default Inicio;