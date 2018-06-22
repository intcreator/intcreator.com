/* <link rel="import" href="../../bower_components/polymerfire/polymerfire.html"> */
/* <link rel="import" href="../../bower_components/iron-icons/iron-icons.html"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '../../../../@polymer/polymer/polymer-element.js';

import '../../../../@polymer/app-route/app-location.js';
import '../../../../@polymer/app-route/app-route.js';
import '../../../../@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
import '../../../../@polymer/iron-input/iron-input.js';
import '../../../../@polymer/iron-pages/iron-pages.js';
import '../../../../@polymer/paper-tabs/paper-tabs.js';
import '/styles/int-styles.js';
import { GestureEventListeners } from '../../../../@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class EnigmaMachine extends GestureEventListeners(PolymerElement) {

    static get is() { return 'enigma-machine'; }

    static get properties() {
				return {
            questionAndMessageToDecrypt: {
                type: String,
                observer: '_questionAndMessageToDecryptChanged'
            },
            encodedEncryptedMessage: {
                type: String,
                computed: 'encodeEncryptedMessage(encryptedMessage)'
            }
				};
    }

    connectedCallback() {
				super.connectedCallback();
				this.set('data', this.data.mode === '' ? { mode: 'encrypt' } : this.data);
    }

    encryptOnEnter(e) {
				if(e.keyCode === 13) this.encrypt();
    }

    encrypt() {
				const key = this.encryptingAnswer;
				const encryptedMessage = this.messageToEncrypt.split('').map((letter, index) => {
            return String.fromCharCode(letter.charCodeAt() + key[index % key.length].charCodeAt());
				}).join('');
				this.set('encryptedMessage', `${this.encryptingQuestion}\n\n${encryptedMessage}`);
    }

    _questionAndMessageToDecryptChanged(newMessage) {
				const messageParts = newMessage.split('\n');
				this.set('decryptingQuestion', messageParts[0]);
				this.set('messageToDecrypt', messageParts[messageParts.length - 1]);
    }

    encodeEncryptedMessage(encryptedMessage) {
				return encodeURIComponent(encryptedMessage);
    }

    decryptOnEnter(e) {
				if(e.keyCode === 13) this.decrypt();
    }

    decrypt() {
				const key = this.decryptingAnswer;
				const decryptedMessage = this.messageToDecrypt.split('').map((letter, index) => {
            return String.fromCharCode(letter.charCodeAt() - key[index % key.length].charCodeAt());
				}).join('');
				this.set('decryptedMessage', decryptedMessage);
    }

    copy() {
				const encryptedOutput = this.shadowRoot.querySelector('#encrypted-message-output');
				encryptedOutput.select();
				document.execCommand('copy');
				encryptedOutput.blur();
    }

    upload(e) {
				const file = e.target.files[0];
				const reader = new FileReader();
				reader.onload = (() => { return (e) => { this.set('questionAndMessageToDecrypt', e.target.result); }; })();
				reader.readAsText(file);
    }
}

customElements.define(EnigmaMachine.is, EnigmaMachine);
