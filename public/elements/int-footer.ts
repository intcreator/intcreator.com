import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

import { globalStyles } from "../styles/int-styles";

@customElement('int-footer')
export class IntFooter extends LitElement {

    static styles = [globalStyles, css`
        :host {
            text-align: center;
            margin: 0 1em;
            color: gray;
        }
    `]

    @property({ type: Number })
    date: number;

    render() {
        return html`
            <footer>Copyright © Intcreator ${this.date}</footer>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.date = new Date().getFullYear();
    }
}
