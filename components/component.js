export class Component {
    template;

    renderInner(selector) {
        document.querySelector(selector).innerHTML = this.template;
    }

    async renderOuter(selector) {
        document.querySelector(selector).outerHTML = await this.template;
    }
}
