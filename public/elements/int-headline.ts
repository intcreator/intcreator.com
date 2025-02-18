import { LitElement, css, html } from "lit";
import {customElement, property} from 'lit/decorators.js';

import { globalStyles } from "../styles/int-styles";

@customElement('int-headline')
export class IntHeadline extends LitElement {

    static styles = [globalStyles, css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 800px;
        }
    `]

    @property({type: Object})
    data: {
        headline: string;
        details: string;
    };
    
    render() {
        return html`
            <h2>${this.data.headline}</h2>
            <p>${this.data.details}</p>
        `;
    }
}
