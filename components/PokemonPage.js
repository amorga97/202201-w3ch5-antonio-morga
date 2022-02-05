import { Component } from './component.js';
import { fetchPage, fetchPokemon } from '../services/pokeServices.js';
import { Card } from './Card.js';

export class PokemonPage extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.reRender(this.selector);
    }

    async reRender(selector, endpoint) {
        const nextEndpoint = '';
        const previousEndpoint = '';
        this.template = await this.generateTemplate(
            endpoint,
            nextEndpoint,
            previousEndpoint
        );
        await this.renderOuter(selector);
        this.nextButtonHandler(selector, nextEndpoint);
        this.previousButtonHandler(selector, nextEndpoint);
    }

    async generateTemplate(endpoint) {
        const pokemonPage = await fetchPage(endpoint);
        this.nextEndpoint = pokemonPage.next;
        this.previousEndpoint = pokemonPage.previous;
        const lastPokemonEndpoint =
            pokemonPage.results[pokemonPage.results.length - 1].url;
        const lastPokemonData = await fetchPokemon(lastPokemonEndpoint);
        let template = `
            <main class="main">
                <section class="poke-list">
                    <h2 class="poke-list__results">Results</h2>
                    <ul class="poke-list__page-menu">
                        <li><button href="" class="poke-list__page--previous">Previous Page</button></li>
                        <li><a href="" class="poke-list__page">${lastPokemonData.id} of ${pokemonPage.count}</a></li>
                        <li><button href="" class="poke-list__page--next">Next Page</button></li>
                    </ul>
                    <ul class="poke-list__items">
                `;

        const cardPromises = [];
        pokemonPage.results.forEach((result) => {
            cardPromises.push(new Card(result).template);
        });
        await (
            await Promise.all(cardPromises)
        ).forEach((element) => {
            template += element;
        });
        template += `
                    </u>
                    <ul class="poke-list__page-menu">
                        <li><button href="" class="poke-list__page--previous">Previous Page</button></li>
                        <li><a href="" class="poke-list__page">${lastPokemonData.id} of ${pokemonPage.count} </a></li>
                        <li><button id"next-button" href="" class="poke-list__page--next">Next Page</button></li>
                    </ul>
                </section>
            </main>`;
        return template;
    }

    nextEndpoint(url) {
        return url;
    }

    nextButtonHandler() {
        const buttons = document.querySelectorAll('.poke-list__page--next');
        buttons.forEach((button) => {
            button.addEventListener('click', async () => {
                await this.reRender(this.selector, this.nextEndpoint);
            });
        });
    }

    previousButtonHandler() {
        const buttons = document.querySelectorAll('.poke-list__page--previous');
        buttons.forEach((button) => {
            button.addEventListener('click', async () => {
                await this.reRender(this.selector, this.previousEndpoint);
            });
        });
    }
}
