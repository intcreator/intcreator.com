import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';

class IntContentCard extends PolymerElement {

    static get is() { return 'int-content-card' }

    getStyles(data) {
				const position = data.imagePosition;
let styles = "background-image: url('" + data.imageUrl + "');";
if(position === "logo") {
  styles += "background-size: contain;";
  styles += "background-repeat: no-repeat;";
}
else styles += position ? "background-position: " + position + ";" : "";
return styles;
    }

}

customElements.define(IntContentCard.is, IntContentCard);
