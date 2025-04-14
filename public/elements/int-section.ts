import { LitElement, css, html } from "lit";
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import { globalStyles } from "../styles/int-styles";

import "./int-headline.js";
import "./int-content-card.js";
import type { CardData } from "./int-content-card.js";
import "../styles/int-styles.js";

export type ExperienceData = {
    slug: string;
    headline: string;
    details: string;
    items: CardData[];
    note?: string;
};

@customElement('int-section')
export class IntSection extends LitElement {

    static styles = [globalStyles, css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        :host > * + * {
            margin-top: 30px;
        }
    `]

    @property({ type: Object })
    data: ExperienceData;

    @state()
    windowTimeout: NodeJS.Timeout;

    @queryAll('.showOnScroll')
    toShow: any;

    render() {
        return html`
            <int-headline .data=${this.data}></int-headline>
            ${map(this.data.items, (item) =>
            html`<int-content-card class="animated showOnScroll transparent" .data=${item}></int-content-card>`)
            }
            <p><small>${this.data.note}</small></p>
            <p></p>
        `;
    }

    private _fadeElements = () => {
        for (let el of this.toShow) {
            if (window.innerHeight - el.getBoundingClientRect().top - 50 > 0) {
                el.classList.remove("transparent");
                el.classList.add("fadeInUp");
            }
            if (window.innerHeight - el.getBoundingClientRect().top + 250 < 0) {
                el.classList.remove("fadeInUp");
                el.classList.add("transparent");
            }
        }
    }

    private _onWindowChange = () => {
        // debounce for .1s, good balance of performance and snappiness
        clearTimeout(this.windowTimeout)
        this.windowTimeout = setTimeout(this._fadeElements, 100)
    };

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener("scroll", this._onWindowChange, false);
        window.addEventListener("resize", this._onWindowChange, false);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener("scroll", this._onWindowChange, false);
        window.removeEventListener("resize", this._onWindowChange, false);
    }
}
