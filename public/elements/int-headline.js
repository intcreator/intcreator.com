import '../../../node_modules/@polymer/polymer/polymer-element.js';
import '/styles/int-styles.js';
import { Polymer } from '../../../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="int-styles">
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 800px;
      }
    </style>

    <h2>[[data.headline]]</h2>
    <p>[[data.details]]</p>
`,

  is: 'int-headline',

  ready: function() {
    // console.log(data)
  }
});
