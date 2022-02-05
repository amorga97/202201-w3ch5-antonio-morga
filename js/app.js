/* eslint-disable no-restricted-globals */
import { Header } from '../components/Header.js';
import { PokemonPage } from '../components/PokemonPage.js';
import { Details } from '../components/Details.js';

(async () => {
    const app = async () => {
        new Header('.header').renderOuter('.header');
    };
    switch (location.pathname) {
        case '/index.html':
            await new PokemonPage('.poke-list');
            break;

        case '/pages/details.html':
            new Details('.pokemon-details');
            break;
        default:
    }
    document.addEventListener('DOMContentLoaded', app);
})();
