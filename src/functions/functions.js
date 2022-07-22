import axios from "axios";

const findAllCharacters = async (state) => {
    const request = await axios.get("https://rickandmortyapi.com/api/character/");
    state(request.data.results);
};

const findCharacterById = async (id, state) => {
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    //console.log(request.data)
    state(request.data);
}

export {
    findAllCharacters,
    findCharacterById 
};