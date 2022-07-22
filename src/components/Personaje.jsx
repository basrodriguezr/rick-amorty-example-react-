import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findCharacterById } from "../functions/functions";

const Personaje = () => {
    const [personaje, setPersonaje] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        findCharacterById(id, setPersonaje);
    }, [id]);

    return (
        <>  
            {personaje && (
                <div className="personaje">
                    <h1>{personaje.name}</h1>
                    <img src={personaje.image} alt={personaje.name} />
                    <p>{personaje.species}</p>
                    <p>{personaje.status}</p>
                    <p>{personaje.type}</p>
                    <p>{personaje.location.name}</p>
                    <p>{personaje.origin.name}</p>
                </div>
            )}
        
        </>
    );
}

export default Personaje;