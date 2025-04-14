import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { globalStyles } from "../styles/int-styles";
import { ExperienceData } from "./int-section.js";
import "./int-section.js";
import { MainData } from "../data/main.js";

@customElement('int-fade-blocks')
export class IntFadeBlocks extends LitElement {

    static styles = [globalStyles, css`
        :host {
            display: flex;
            justify-content: center;
            padding: 0 30px;
        }

        #header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 60px 0;
            max-width: 700px;
        }

        #container {
            max-width: 1000px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 768px) {
            #header img {
                max-width: 150px;
            }
        }
    `]

    @property({ type: Array })
    blocks: ExperienceData[];

    render() {
        return html`
            <div id="container">
                <header id="header">
                    <a href="/"
                        ><img src="/images/home/inverted-symbol.png"
                    /></a>
                    <h1>Intcreator</h1>
                    <h2>
                        My name is Brandon der Blätter. I'm a full stack software engineer and a UX and 20th century technology nerd.
                    </h2>
                </header>
                ${map(this.blocks, (block) =>
            html`<int-section id=${block.slug} .data=${block}></int-section>`)
            }
            </div>
        `;
    }

    constructor() {
        super();
        this.blocks = MainData.properties.home.value.blocks;
    }
}
