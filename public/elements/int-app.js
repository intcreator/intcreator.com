import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
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
import './int-slider.js';

class IntApp extends PolymerElement {

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

/* <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
