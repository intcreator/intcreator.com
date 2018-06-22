import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';
import './int-section.js';
import '../data/main.js';

class IntFadeBlocks extends PolymerElement {

    static get is() { return 'int-fade-blocks' }

    constructor() {
				super();
				this.blocks = MainData.properties.home.value.blocks;
    }

}

customElements.define(IntFadeBlocks.is, IntFadeBlocks);
