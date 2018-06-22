import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';

class IntFooter extends PolymerElement {

    static get is() { return 'int-footer' }

    connectedCallback() {
				super.connectedCallback();
				this.date = new Date().getFullYear();
    }

}

customElements.define(IntFooter.is, IntFooter);
