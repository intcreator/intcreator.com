import { LitElement, css, html } from "lit";
import {customElement, property} from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import { marked } from "marked";

import { globalStyles } from "../styles/int-styles";

type CardData = {
    title: string,
    description: string,
    url: string,
    imageUrl: string,
    imageStyles: string,
}

@customElement('int-content-card')
export class IntContentCard extends LitElement {

    static styles = [globalStyles, css`
        :host {
            width: 100%;
        }

        a,
        a:visited {
            color: inherit;
        }

        a:hover {
            text-decoration: none;
        }

        h3:hover {
            text-decoration: underline;
        }

        .text-background {
            background-color: #333333;
            padding: 5vw;
        }

        .image {
            height: 30vw;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-color: #121212;
        }
    `];

    @property({type: Object})
    data: CardData;

    render() {
        return html`
            <a href=${this.data.url} target="_blank">
                <div class="image" style=${`background-repeat: no-repeat; background-image: url('${this.data.imageUrl}'); ` + this.data.imageStyles}></div>
                <div class="text-background">
                    <h3>${this.data.title}</h3>
                    ${unsafeHTML(marked.parse(this.data.description) as string)}
                </div>
            </a>
        `;
    }

}
