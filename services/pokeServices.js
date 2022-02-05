export const fetchPage = async (endpoint) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};

export const fetchPokemon = async (endpoint) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${endpoint}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};
