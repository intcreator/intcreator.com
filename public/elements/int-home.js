import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';
import './int-contact.js';
import { html } from '../../../node_modules/@polymer/polymer/lib/utils/html-tag.js';

class IntHome extends PolymerElement {
  static get template() {
    return html`
        <style include="int-styles">

            :host {
                display: block;
            }

            .container {
                padding: 1em;
                max-width: 1000px;
                margin: auto;
            }

            .container > * + * {
                margin-top: 1em;
            }

            .links {
                display: flex;
                justify-content: center;
            }

            .links > * + * {
                margin-left: .5em;
            }

            h1, h2, h3, h4, p {
                text-align: center;
            }

            article {
                display: flex;
            }

        </style>

        <div class="container">
            <h1>Intcreator</h1>
            <h2>High quality instrumentation for your songs</h2>
            <p>I will add harmonies, complementary melodies, and accents to your original songs, with the following instruments:</p>
            <h3>Synths</h3>
            <h3>Bass</h3>
            <h3>Organs</h3>
            <h3>Strings</h3>
            <h3>Pads</h3>
            <h3>Drums</h3>

            <h2>Pricing</h2>
            <h3>\$20 / hour</h3>

            <int-contact></int-contact>
            <p>Looking for studio rules or legal/copyright info?  Read the <a href="/fine-print">fine print</a>.</p>

            <h2>Need something else?</h2>
            <div class="links">
                <a class="int-button" href="/music">Recording/mixing</a>
                <a class="int-button" href="/tech">Websites/tech support</a>
            </div>
        </div>
`;
  }

  static get is() { return 'int-home' }
}

customElements.define(IntHome.is, IntHome);
