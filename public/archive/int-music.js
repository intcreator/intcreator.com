import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import '../styles/int-styles.js';
import './int-contact.js';

class IntMusic extends PolymerElement {

    static get is() { return 'int-music' }

}

customElements.define(IntMusic.is, IntMusic);
