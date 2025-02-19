import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
import '../../../polymerfire/polymerfire.js';
import '../styles/int-styles.js';
import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';

class IntContact extends PolymerElement {
  static get template() {
    return html`
        <style include="int-styles">
            
            :host {
                display: block;
                max-width: 400px;
                margin-left: auto;
                margin-right: auto;
            }

            h2 {
                text-align: center;
            }

            h3,
            p {
                margin-top: 1em;
            }

            .contact-link {
                display: block;
                font-size: 1.3em;
            }

            button,
            input {
                width: 100%;
            }

            * + * {
                margin-top: .5em;
            }

            textarea {
                width: 100%;
            }

        </style>

            <firebase-document id="fire-save-doc" app-name="int-navigation" path="[[messageId]]" data="{{contactMessage}}">
            </firebase-document>

            <h2>Contact</h2>
            <!-- <a class="int-button contact-link" href="https://www.messenger.com/t/intcreator" target="_blank">Facebook Messenger</a> -->
            <a class="int-button contact-link" href="https://bsky.app/profile/intcreator.com" target="_blank">Bluesky</a>
            <a class="int-button contact-link" href="https://discord.gg/nvrRYXn" target="_blank">Discord Server</a>
            <h3>Email me</h3>
            <input placeholder="Your email address..." value="{{email::input}}">
            <textarea rows="5" placeholder="Your message..." value="{{message::input}}"></textarea>
            <button class="int-button contact-link" on-click="sendMessage" disabled\$="[[!isValidMessage(email, message)]]">Send</button>
            <p hidden\$="[[!showStatus]]">Sent!</p>
`;
  }

  static get is() { return 'int-contact' }

  static get properties() {
      return {
          email: {
              type: String,
              value: ''
          },
          message: {
              type: String,
              value: ''
          },
          database: {
              type: String,
              value: 'messages'
          },
          showStatus: {
              type: Boolean,
              value: false
          }
      };
  }

  isValidMessage(email, message) {
      return message && email && email.toUpperCase().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/)
  }

  sendMessage() {
      this.$['fire-save-doc'].data = {
          email: this.email,
          message: this.message,
          timestamp: new Date().toLocaleString()
      };
      this.$['fire-save-doc'].saveValue(this.database);
      this.$['fire-save-doc'].reset();
      this.email = '';
      this.message = '';
      this.showStatus = true;
      setTimeout(() => this.showStatus = false, 3000)
  }
}

customElements.define(IntContact.is, IntContact);
