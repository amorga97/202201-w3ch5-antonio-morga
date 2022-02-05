/* eslint-disable no-restricted-globals */
import { fetchPokemon } from '../services/pokeServices.js';
import { Component } from './component.js';

export class Details extends Component {
    constructor(selector) {
        super();
        this.reRender(selector);
    }

    async reRender(selector) {
        this.template = await this.generateTemplate();
        await this.renderInner(selector);
    }

    async generateTemplate() {
        const route = location.search;
        const id = route
            .match(/\d/g)
            .reduce(
                (previousValue, currentValue) =>
                    previousValue.toString() + currentValue.toString()
            );
        const pokemonData = await fetchPokemon(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const template = `<h2 class="pokemon-details__name">${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.other.dream_world.front_default}" alt="" class="pokemon-details__image" />
            <div class="pokemon-details__stats">
                <p class="pokemon-details__stats-item">Type: ${pokemonData.types[0].type.name}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[0].stat.name}: ${pokemonData.stats[0].base_stat}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[1].stat.name}: ${pokemonData.stats[1].base_stat}</p>
                <p class="pokemon-details__stats-item">${pokemonData.stats[2].stat.name}: ${pokemonData.stats[2].base_stat}</p>
            </div>
            <div class="pokemon-details__actions">
                <button
                    class="pokemon-details__button pokemon-details__button--catch"
                >
                    Catch
                </button>
                <button
                    class="pokemon-details__button pokemon-details__button--release"
                >
                    Release
                </button>
            </div>`;
        return template;
    }
}
// /idNo#*#/
