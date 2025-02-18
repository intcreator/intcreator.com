import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "../styles/int-styles.js";

class IntContentCard extends PolymerElement {
    static get template() {
        return html`
            <style include="int-styles">
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
            </style>

            <a href$="[[data.url]]" target="_blank">
                <div class="image" style$="[[getStyles(data)]]"></div>
                <div class="text-background">
                    <h3>[[data.title]]</h3>
                    <p>[[data.description]]</p>
                </div>
            </a>
        `;
    }

    getStyles(data) {
        const position = data.imagePosition;
        let styles = "background-image: url('" + data.imageUrl + "');";
        if (data.backgroundColor) {
            styles += `background-color: ${data.backgroundColor};`;
        }
        if (position === "logo") {
            styles += "background-size: 80%;";
            styles += "background-repeat: no-repeat;";
        } else
            styles += position ? "background-position: " + position + ";" : "";
        return styles;
    }
}

customElements.define("int-content-card", IntContentCard);
