import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../../node_modules/@polymer/marked-element/marked-element.js';
import '/styles/int-styles.js';
class IntMarkdown extends PolymerElement {

    static get is() { return 'int-markdown' }

    static get properties() {
				return {
            source: {
                type: String
            }
				}
    }

}

customElements.define(IntMarkdown.is, IntMarkdown);

/* <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
