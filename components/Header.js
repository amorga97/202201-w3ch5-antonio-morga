import { Component } from './Component.js';

export class Header extends Component {
    constructor(selector) {
        super();
        this.template = this.generateTemplate();
        this.renderInner(selector);
    }

    generateTemplate() {
        const template = `
            <header class="header">
                <h1 class="page-title">PokeApi</h1>
                <nav class="header__menu">
                    <li><a href="../index.html" class="header__item">Home</a></li>
                    <li><a href="" class="header__item">My pokemons</a></li>
                </nav>
            </header>`;
        return template;
    }
}
