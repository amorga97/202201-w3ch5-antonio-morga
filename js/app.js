/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { fetchPage, fetchPokemon } from '../services/pokeServices.js';
import { catchPokemon, releasePokemon } from '../services/localApiServices.js';
import { Header } from '../components/Header.js';
import { PokemonPage } from '../components/PokemonPage.js';

(async () => {
    const app = async () => {
        new Header('.header').renderOuter('.header');
    };
    switch (location.pathname) {
        case '/index.html':
            await new PokemonPage('.poke-list');
            break;
        default:
    }
    document.addEventListener('DOMContentLoaded', app);
})();
