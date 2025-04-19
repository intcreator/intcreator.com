import { LitElement, css, html } from "lit";
import { customElement, state } from 'lit/decorators.js';

import { globalStyles } from "../styles/int-styles";
import "./int-navigation.js";
import "./int-fade-blocks.js";
import "./int-markdown.js";
import "./int-footer.js";

@customElement('int-app')
export class IntApp extends LitElement {

    static styles = [globalStyles, css`
        #container {
            min-height: 50vh;
            padding-top: 50px;
        }
    `]

    render() {
        return html`
            <int-navigation></int-navigation>
            <div id="container">
                <slot></slot>
            </div>
            <int-footer></int-footer>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        console.log(
            "Hello there.  It looks like you're interested in how my site works.  Rest assured, all the code can be found at https://github.com/intcreator/intcreator.com for your viewing pleasure."
        );
    }
}
