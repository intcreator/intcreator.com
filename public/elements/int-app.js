import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../../node_modules/@polymer/iron-pages/iron-pages.js';
import '../../../node_modules/@polymer/app-route/app-route.js';
import '../../../node_modules/@polymer/app-route/app-location.js';
import '/styles/int-styles.js';
import './int-navigation.js';
import './int-fade-blocks.js';
// import './int-home.js';
// import './int-music.js';
// import './int-tech.js';
// import './int-blog.js';
import './int-markdown.js';
import './int-footer.js';
// import './int-slider.js';

class IntApp extends PolymerElement {

    static get template() {
        return html`
            <style include="int-styles">

                :host {

                }

                #container {
                    min-height: 50vh;
                    padding-top: 50px;
                }

                marked-element {
                    max-width: 100%;
                }

                img {
                    max-width: 100%;
                }

            </style>

            <app-location route="{{route}}" url-space-regex="^(?!\/[a-zA-Z]*\/[a-zA-Z]+.*).*"></app-location>
            <app-route route="{{route}}" pattern="/:page" active="{{active}}" data="{{data}}" tail="{{tail}}"></app-route>

            <int-navigation></int-navigation>
            <div id="container">
                <iron-pages selected="[[data.page]]" attr-for-selected="page" fallback-selection="404">
                <int-fade-blocks page=""></int-fade-blocks>
                <int-home page="studio"></int-home>
                <int-music page="music"></int-music>
                <int-tech page="tech"></int-tech>
                <int-markdown page="fine-print" source="../data/pages/fine-print.md"></int-markdown>
                <int-blog page="timl" route="{{tail}}" blog="timl"></int-blog>
                <int-markdown page="about" source="../data/pages/about.md"></int-markdown>
                <int-markdown page="cv" source="../data/pages/cv.md"></int-markdown>
                <int-markdown page="portfolio" source="../data/pages/portfolio.md"></int-markdown>
                <int-markdown page="legacy" source="../data/pages/legacy.md"></int-markdown>
                <int-slider page="slider"></int-slider>
                <h3 page="404">404 - page not found!</h3>
                </iron-pages>
                <int-footer></int-footer>
            </div>
        `
    }

    static get is() { return 'int-app' }

    static get properties() {
        return {
            route: {
                type: Object
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        console.log("Hello there.  It looks like you're interested in how my site works.  Rest assured, all the code can be found at https://github.com/intcreator/intcreator.com for your viewing pleasure.");
    }

}

customElements.define(IntApp.is, IntApp);
