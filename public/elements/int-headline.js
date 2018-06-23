import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';

class IntHeadline extends PolymerElement {

    static get template() {
        return html`
            <style include="int-styles">
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                max-width: 800px;
            }
            </style>

            <h2>[[data.headline]]</h2>
            <p>[[data.details]]</p>
        `
    }

}

customElements.define('int-headline', IntHeadline);
