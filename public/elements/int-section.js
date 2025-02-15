import {
    PolymerElement,
    html,
} from "../../../node_modules/@polymer/polymer/polymer-element.js";
import "./int-headline.js";
import "./int-content-card.js";
import "/styles/int-styles.js";

class IntSection extends PolymerElement {
    static get template() {
        return html`
            <style include="int-styles">
                :host {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                }

                :host > * + * {
                    margin-top: 30px;
                }
            </style>

            <int-headline data="[[data]]"></int-headline>
            <template is="dom-repeat" items="[[data.items]]">
                <int-content-card
                    class="animated showOnScroll fadeOutDown"
                    data="[[item]]"
                ></int-content-card>
            </template>
            <p><small>[[data.note]]</small></p>
            <p></p>
        `;
    }

    static get is() {
        return "int-section";
    }

    static get properties() {
        return {
            toShow: {
                type: Array,
                value: [],
            },
        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
        this.setUpWindowEvents();
    }

    setUpWindowEvents() {
        let latestKnownScrollY = 0;
        let ticking = false;

        const onWindowChange = () => {
            latestKnownScrollY = window.scrollY;
            requestTick();
        };

        const update = () => {
            ticking = false;
            this.fadeElements();
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(update);
            }
            ticking = true;
        };

        window.addEventListener("scroll", onWindowChange, false);
        window.addEventListener("resize", onWindowChange, false);
    }

    fadeElements() {
        // only load DOM elements once
        this.toShow = this.toShow.length
            ? this.toShow
            : this.shadowRoot.querySelectorAll(".showOnScroll");
        for (let el of this.toShow) {
            if (window.innerHeight - el.getBoundingClientRect().top - 50 > 0) {
                el.classList.remove("fadeOutDown");
                el.classList.add("fadeInUp");
            }
            if (window.innerHeight - el.getBoundingClientRect().top + 250 < 0) {
                el.classList.remove("fadeInUp");
                el.classList.add("fadeOutDown");
            }
        }
    }
}

customElements.define(IntSection.is, IntSection);
