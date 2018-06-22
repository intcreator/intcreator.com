import { PolymerElement, html } from '../../../../node_modules/@polymer/polymer/polymer-element.js';

import '../../../../node_modules/@polymer/app-route/app-location.js';
import '../../../../node_modules/@polymer/app-route/app-route.js';
import '../../../../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
import '../../../../node_modules/@polymer/iron-input/iron-input.js';
import '../../../../node_modules/@polymer/iron-pages/iron-pages.js';
import '../../../../node_modules/@polymer/iron-icons/iron-icons.js';
import '../../../../node_modules/@polymer/paper-tabs/paper-tabs.js';
import '/styles/int-styles.js';
import { GestureEventListeners } from '../../../../node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class EnigmaMachine extends GestureEventListeners(PolymerElement) {

    static get template() {
        return html`

		    <style include="int-styles">

                .message-area {
                    width: 100%;
                    height: 5em;
                }

            </style>

            <app-location route="{{route}}"></app-location>
            <app-route route="{{route}}" pattern="/portfolio/enigma/:mode" active="{{active}}" data="{{data}}"></app-route>

            <div class="int-page int-vertical-container">
                <h1>Enigma Machine Emulator</h1>
                <paper-tabs selected="{{data.mode}}" attr-for-selected="mode" noink>
                    <paper-tab mode="encrypt">Encrypt</paper-tab>
                    <paper-tab mode="decrypt">Decrypt</paper-tab>
                </paper-tabs>
                <iron-pages selected="[[data.mode]]" attr-for-selected="mode">
                    <section class="int-vertical-container" mode="encrypt">
                        <h2>Enter your message:</h2>
                        <textarea id="decrypted-message-input" class="message-area" value="{{messageToEncrypt::input}}"></textarea>

                        <h2>Enter a question:</h2>
                        <iron-input bind-value="{{encryptingQuestion}}" on-keydown="encryptOnEnter">
                            <input value="{{encryptingQuestion::input}}">
                        </iron-input>

                        <h2>Enter an answer:</h2>
                        <iron-input bind-value="{{encryptingAnswer}}" on-keydown="encryptOnEnter">
                            <input value="{{encryptingAnswer::input}}">
                        </iron-input>
                        <button class="int-button int-button--block" on-tap="encrypt">Encrypt</button>

                        <h2>Encrypted message:</h2>
                        <textarea id="encrypted-message-output" class="message-area" value="{{encryptedMessage::input}}" readonly></textarea>
                        <button class="int-button" disabled$="[[!encryptedMessage]]" on-tap="copy">Copy</button>
                        <a class="int-button" href="data:text/plain;charset=utf-8,[[encodedEncryptedMessage]]" download="encodedMessage.txt" disabled$="[[!encryptedMessage]]">Download</a>
                    </section>
                    <section class="int-vertical-container" mode="decrypt">
                        <h2>Paste or upload* the encrypted message:</h2>
                        <p><sup>*or type it if you love hunting for unicode characters</sup></p>
                        <label for="encrypted-message-upload" class="int-button">Upload</label>
                        <input id="encrypted-message-upload" class="int-button" type="file" accept=".txt" on-change="upload" hidden>
                        <textarea id="encrypted-message-input" class="message-area" value="{{questionAndMessageToDecrypt::input}}"></textarea>

                        <h2>Enter the answer to the following question: [[decryptingQuestion]]</h2>
                        <iron-input bind-value="{{decryptingAnswer}}" on-keydown="decryptOnEnter">
                            <input value="{{decryptingAnswer::input}}">
                        </iron-input>
                        <button class="int-button int-button--block" on-tap="decrypt">Decrypt</button>
                        <textarea id="decrypted-message-output" class="message-area" value="{{decryptedMessage::input}}" readonly></textarea>
                    </section>
                </iron-pages>
            </div>
        `;
    }

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

customElements.define('enigma-machine', EnigmaMachine);
