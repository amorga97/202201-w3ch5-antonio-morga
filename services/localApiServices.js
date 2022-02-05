export const releasePokemon = async (id) => {
    const url = `http://localhost:3005/pokemon/${id}`;
    const resp = fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await resp.json();
    return data;
};

export const catchPokemon = async (object) => {
    const url = `http://localhost:3005/pokemon`;
    const resp = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    });
    const data = await resp.json();
    return data;
};
