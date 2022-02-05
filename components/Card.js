import { fetchPokemon } from '../services/pokeServices.js';
import { Component } from './component.js';

export class Card extends Component {
    constructor(pokemon) {
        super();
        this.template = this.generateTemplate(pokemon);
    }

    async generateTemplate(pokemon) {
        const pokemonData = await fetchPokemon(pokemon.url);
        const template = `
            <div className="card">
                <a href="pages/details.html?=id${pokemonData.id}">
                        <h3 class="card__name">${pokemonData.name}</h3>
                        <img
                            src="${pokemonData.sprites.front_default}"
                            alt=""
                            class="card__image"
                        />
                        <ul class="card__stats">
                            <li class="card__stats-item">
                             Experience: ${pokemonData.base_experience}
                            </li>
                            <li class="card__stats-item">Height: ${pokemonData.height}0cm</li>
                            <li class="card__stats-item">Weight: ${pokemonData.weight}Kg</li>
                        </ul>
                </a>
                <div className="card__actions">
                        <button className="card__actions-item card__catch">Catch</button>
                        <button className="card__actions-item card__release">Release</button>
                </div>
            </div>
        `;

        return template;
    }
}
