import { LitElement, css, html } from "lit";
import { customElement } from 'lit/decorators.js';

import { globalStyles } from "../styles/int-styles";

@customElement('int-404')
export class Int404 extends LitElement {

    static styles = [globalStyles, css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 800px;
            margin: auto;
        }

        :host * + * {
            margin-bottom: 30px;
        }

        .big-button {
            padding: 100px;
            font-size: 4em;
            cursor: pointer;
        }   
    `]


    render() {
        return html`
            <h1>404</h1>
            <h2>Congratulations, you broke the internet.</h2>
            <p>Okay, that's not necessarily true.  If you like you can give up and <a href="/">go home</a>.  In any case, we provide this button to help you fix the problem:</p>
            <button class="big-button" onclick="window.history.back()">Fix the thing</button>
            <p>I &lt;3 <code>404.html</code></p>
            <p>P.S. Can you ever tell if you've reached the actual page with the 404 content?  I mean...it looks like a 404 page...</p>
        `;
    }
}
