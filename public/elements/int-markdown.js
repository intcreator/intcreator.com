import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/marked-element/marked-element.js";
import "../styles/int-styles.js";

class IntMarkdown extends PolymerElement {
    static get template() {
        return html`
            <style include="int-styles">
                :host {
                }

                #container {
                    min-height: 50vh;
                    padding: 10vw;
                    padding-top: 50px;
                    padding-bottom: 5vh;
                }

                marked-element {
                    max-width: 100%;
                }

                img {
                    max-width: 100%;
                }
            </style>

            <div id="container">
                <marked-element>
                    <div id="marked-html" slot="markdown-html"></div>
                    <script type="text/markdown" src$="[[source]]"></script>
                </marked-element>
            </div>
        `;
    }

    static get properties() {
        return {
            source: {
                type: String,
            },
        };
    }
}

customElements.define("int-markdown", IntMarkdown);
