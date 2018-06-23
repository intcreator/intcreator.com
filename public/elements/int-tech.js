import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';
import './int-contact.js';

class IntTech extends PolymerElement {

    static get is() { return 'int-tech' }

}

customElements.define(IntTech.is, IntTech);
