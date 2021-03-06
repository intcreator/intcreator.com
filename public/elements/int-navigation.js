import { PolymerElement, html } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../../node_modules/@polymer/iron-icons/iron-icons.js';
import '../../../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
// import '../../../node_modules/polymerfire/polymerfire.js';
import '/styles/int-styles.js';
import { GestureEventListeners } from '../../../node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class IntNavigation extends GestureEventListeners(PolymerElement) {

    static get template() {
        return html`
            <style include="int-styles">
                :host {
                    position: fixed;
                    min-width: 100%;
                    z-index: 10;
                }

                #menu-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, .8);
                    border-bottom: 1px solid #BBB;
                }

                ul {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 200;
                    list-style: none;
                    margin: 0;
                }

                li {
                    display: flex;
                    align-items: center;
                }

                li a {
                    padding: 0 30px;
                    color: white;
                }

                .menu-logo {
                    align-self: flex-start;
                }

                a:visited {
                    color: inherit;
                }

                #menu-icon {
                    display: none;
                }

                #stupid-button {
                    padding: 12px;
                    position: fixed;
                    bottom: 10px;
                    right: 10px;
                    opacity: .5;
                }

                #stupid-button:hover {
                    opacity: 1;
                }

                #stupid-modal {
                    position: fixed;
                    bottom: 10px;
                    right: 70px;
                    background-color: #222;
                    padding: 10px;
                    border-radius: 5px;
                    border: solid 1px #ddd;
                    max-width: 70%;
                }

                #stupid-input {
                    width: 100%;
                    height: 5em;
                }

                img {
                    height: 2em;
                }

                #menu-screen {
                    background: rgba(0, 0, 0, 1);
                    width: 150vw;
                    height: 150vh;
                    position: fixed;
                    z-index: -1;
                }

                .cover {
                    animation-duration: .4s;
                    animation-fill-mode: both;
                    animation-name: coverFade;
                    display: block;
                }

                @keyframes coverFade {
                    from {
                        display: none;
                        opacity: 0;
                    }

                    to {
                        display: block;
                        opacity: .6;
                    }
                }

                .uncover {
                    animation-duration: .4s;
                    animation-fill-mode: both;
                    animation-name: uncoverFade;
                    display: none;
                }

                @keyframes uncoverFade {
                    from {
                    display: block;
                    opacity: .6;
                    }

                    to {
                    display: none;
                    opacity: 0;
                    }
                }

                @media (max-width: 768px) {

                    #menu-container {
                        display: block;
                        position: fixed;
                        left: 100vw;
                        height: 150vh;
                        width: 100vh;
                        flex-direction: column;
                        align-items: flex-end;
                        border-bottom: none;
                        font-size: 1.5em;
                        background: none;
                        background: rgba(0, 0, 0, .8);
                    }

                    #menu-container > * {
                        flex-shrink: 0;
                    }

                    #menu-icon {
                        display: block;
                        position: fixed;
                        right: 0;
                        height: 45px;
                        width: 45px;
                        padding: 5px;
                        background: rgba(0, 0, 0, .8);
                        z-index: 1;
                    }

                    ul {
                        display: block;
                        padding: 0;
                    }

                    li a {
                        padding: 5px 20px;
                    }

                    .open {
                        animation-duration: .4s;
                        animation-fill-mode: both;
                        animation-name: slideInRight;
                    }

                    @keyframes slideInRight {
                        from {
                            transform: translate(0, 0);
                        }

                        to {
                            transform: translate(-200px, 0);
                        }
                    }

                    .close {
                    animation-duration: .4s;
                    animation-fill-mode: both;
                    animation-name: slideOutRight;
                    }

                    @keyframes slideOutRight {
                        from {
                            transform: translate(-200px, 0);
                        }

                        to {
                            transform: translate(0, 0);
                        }
                    }

                    a {
                    padding: 10px 30px 10px 10px;
                    }

                }

                </style>

                <firebase-app
                    name="int-navigation"
                    auth-domain="[[databaseUrl]]"
                    database-url="https://[[databaseUrl]]/"
                    api-key="[[apiKey]]">
                </firebase-app>
                <firebase-document
                    id="fire-save-doc"
                    app-name="int-navigation"
                    path="[[feedbackId]]"
                    data="{{feedbackMessage}}">
                </firebase-document>

                <iron-icon id="menu-icon" icon="icons:menu" on-tap="toggleMenu"></iron-icon>
                <div id="menu-container">
                <ul id="menu-list">
                    <li class="menu-logo"><a href="/"><img src="/images/home/inverted-symbol.png" /></a></li>
                    <li><a href="/about">About</a></li>
                    <!-- <li><a href="/music">Music</a></li> -->
                    <!-- <li><a href="/tech">Tech</a></li> -->
                    <!-- <li><a href="https://interlucid.com/">Interlucid</a></li> -->
                    <!-- <li><a href="https://twitter.com/intcreator">Twitter</a></li> -->
                    <!-- <li><a href="/portfolio">Portfolio</a></li> -->
                    <!-- <li><a href="/blog">Blog</a></li> -->
                    <li><a href="../data/brandon-der-blatter-resume.pdf">Résumé</a></li>
                </ul>
                </div>
                <div id="menu-screen" class="uncover" on-tap="closeThings"></div>
                <!-- <button id="stupid-button" class="int-button" on-tap="toggleStupid">
                    <iron-icon icon="announcement"></iron-icon>
                </button> -->
                <div id="stupid-modal" hidden$="[[!showStupidDialog]]">
                    <div class="int-vertical-container" hidden$="[[!showStupidForm]]">
                        <h3>"Gee, that was stupid."</h3>
                        <p>See something stupid on this site that shouldn't have happened?  Tell me about it!</p>
                        <textarea id="stupid-input" placeholder="What went horrendously wrong?" value="{{feedback::input}}" on-keydown="handleKeydown"></textarea>
                        <button class="int-button" on-tap="submitStupid" disabled$=[[!feedback]]>Submit</button>
                        <p>Now when something breaks, you can do something about it!  Thanks!</p>
                    </div>
                    <div class="int-vertical-container" hidden$="[[showStupidForm]]">
                        <h3>Thanks!</h3>
                        <p>Thanks for your feedback! I'll try to make the site less stupid.</p>
                    </div>
                </div>
        `
    }
    
    static get is() { return 'int-navigation'; }

    static get properties() {
        return {
            menuOpen: {
                type: Boolean,
                value: false
            },
            showStupidDialog: {
                type: Boolean,
                value: false
            },
            showStupidForm: {
                type: Boolean,
                value: true
            },
            database: {
                type: String,
                value: 'feedback'
            },
            feedback: {
                type: String,
                value: ''
            },
            block: {
                type: Boolean,
                value: false
            }
        };
    }

    constructor() {
				super();
				// this.apiKey = Credentials.apiKey;
				// this.databaseUrl = Credentials.databaseUrl;
    }

    openMenu() {
				this.$['menu-container'].classList.add('open');
				this.$['menu-container'].classList.remove('close');
				this.showOverlay();
    }

    closeMenu() {
				this.$['menu-container'].classList.remove('open');
				this.$['menu-container'].classList.add('close');
				this.hideOverlay();
    }

    showOverlay() {
				this.$['menu-screen'].classList.remove('uncover');
				this.$['menu-screen'].classList.add('cover');
    }

    hideOverlay() {
				this.$['menu-screen'].classList.remove('cover');
				this.$['menu-screen'].classList.add('uncover');
    }

    toggleMenu() {
				// toggle the mobile menu
				this.set('menuOpen', !this.menuOpen);
				if(this.menuOpen) {
            this.openMenu();
				} else {
            this.closeMenu();
				}
				this.$['menu-icon'].icon = this.menuOpen ? 'icons:clear' : 'icons:menu';
    }

    toggleStupid() {
				// toggle the stupid feedback modal
				this.set('showStupidDialog', !this.showStupidDialog);
				if(this.showStupidDialog) {
            this.showOverlay();
            this.$['stupid-input'].focus();
				} else {
            this.hideOverlay();
				}
    }

    handleKeydown(e) {
				// submit on enter but not shift enter
				if(e.keyCode === 13 && !e.shiftKey) this.submitStupid();
				// hide on escape
				if(e.keyCode === 27) this.closeThings();
    }

    submitStupid() {
				this.set('showStupidForm', false);
				this.hideOverlay();
				this.$['fire-save-doc'].data = {
            message: this.feedback,
  timestamp: new Date().toDateString()
				};
				this.$['fire-save-doc'].saveValue(this.database);
				this.$['fire-save-doc'].reset();
				this.set('feedback', '');
				setTimeout(() => {
            this.set('showStupidDialog', false);
            this.set('showStupidForm', true);
				}, 3000);

    }

    closeThings() {
				// close the menu if it's open
				if(this.menuOpen) {
            this.toggleMenu();
				}
				// close everything else
				this.hideOverlay();
				this.set('showStupidDialog', false);
    }

}

customElements.define(IntNavigation.is, IntNavigation);
