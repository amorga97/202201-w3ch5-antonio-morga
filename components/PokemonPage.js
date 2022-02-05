import { Component } from './component.js';
import { fetchPage } from '../services/pokeServices.js';
import { Card } from './Card.js';

export class PokemonPage extends Component {
    constructor(selector) {
        super();
        this.template = this.generateTemplate();
        this.renderOuter(selector);
    }

    async generateTemplate(endpoint = '?offset=0&limit=10') {
        const pokemonPage = await fetchPage(endpoint);
        let template = `
            <main class="main">
                <section class="poke-list">
                    <h2 class="poke-list__results">Results</h2>
                    <ul class="poke-list__page-menu">
                        <li><button href="" class="poke-list__page--previous">Previous Page</button></li>
                        <li><a href="" class="poke-list__page">1</a></li>
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
                        <li><a href="" class="poke-list__page">1</a></li>
                        <li><button href="" class="poke-list__page--next">Next Page</button></li>
                    </ul>
                </section>
            </main>`;
        return template;
    }
}
