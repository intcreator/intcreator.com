import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../styles/int-styles.js";
import "./int-section.js";
import { MainData } from "../data/main.js";

class IntFadeBlocks extends PolymerElement {
    static get template() {
        return html`
            <style include="int-styles">
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
            </style>

            <div id="container">
                <header id="header">
                    <a href="/"
                        ><img src="/images/home/inverted-symbol.png"
                    /></a>
                    <h1>Intcreator</h1>
                    <h2>
                        My name is Brandon der Blätter. I'm a UX and 20th
                        century technology nerd.
                    </h2>
                </header>
                <template is="dom-repeat" items="[[blocks]]">
                    <int-section
                        id="[[item.slug]]"
                        data="[[item]]"
                    ></int-section>
                </template>
            </div>
        `;
    }

    static get is() {
        return "int-fade-blocks";
    }

    constructor() {
        super();
        this.blocks = MainData.properties.home.value.blocks;
    }
}

customElements.define(IntFadeBlocks.is, IntFadeBlocks);
