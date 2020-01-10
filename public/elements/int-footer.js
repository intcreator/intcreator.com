import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';

class IntFooter extends PolymerElement {

    static get template() {
        return html`
            <style include="int-styles">
                :host {
                    text-align: center;
                    margin: 0 1em;
                    color: gray;
                }
            </style>
            <footer>Copyright © Intcreator [[date]]</footer>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.date = new Date().getFullYear();
    }

}

customElements.define('int-footer', IntFooter);
