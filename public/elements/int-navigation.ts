import { LitElement, css, html } from "lit";
import {customElement, state} from 'lit/decorators.js';
import {ref, createRef, Ref} from 'lit/directives/ref.js';

import "@polymer/iron-icons/iron-icons.js";

import { globalStyles } from "../styles/int-styles";

@customElement('int-navigation')
export class IntNavigation extends LitElement {

    static styles = [globalStyles, css`
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
            background: rgba(0, 0, 0, 0.8);
            border-bottom: 1px solid #bbb;
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
            opacity: 0.5;
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
            animation-duration: 0.4s;
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
                opacity: 0.6;
            }
        }

        .uncover {
            animation-duration: 0.4s;
            animation-fill-mode: both;
            animation-name: uncoverFade;
            display: none;
        }

        @keyframes uncoverFade {
            from {
                display: block;
                opacity: 0.6;
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
                background: rgba(0, 0, 0, 0.8);
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
                background: rgba(0, 0, 0, 0.8);
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
                animation-duration: 0.4s;
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
                animation-duration: 0.4s;
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
    `];

    stupidInput: Ref<HTMLInputElement> = createRef();

    render() {
        return html`
            <iron-icon
                id="menu-icon"
                icon="${this._menuOpen ? "icons:clear" : "icons:menu"}"
                @click=${this.toggleMenu}
            ></iron-icon>
            <div id="menu-container" class="${this._menuOpen ? "open" : "close"}">
                <ul id="menu-list" @click=${this.closeThings}>
                    <li class="menu-logo">
                        <a href="/"
                            ><img src="/images/home/inverted-symbol.png"
                        /></a>
                    </li>
                    <li><a href="/about">About</a></li>
                    <!-- <li><a href="/music">Music</a></li> -->
                    <!-- <li><a href="/tech">Tech</a></li> -->
                    <!-- <li><a href="https://interlucid.com/">Interlucid</a></li> -->
                    <!-- <li><a href="https://bsky.app/profile/intcreator.com">Bluesky</a></li> -->
                    <!-- <li><a href="/portfolio">Portfolio</a></li> -->
                    <!-- <li><a href="/blog">Blog</a></li> -->
                    <li>
                        <a href="../data/brandon-der-blatter-resume.pdf"
                            >Résumé</a
                        >
                    </li>
                </ul>
            </div>
            <div id="menu-screen" class="${ this._overlayUp ? "cover" : "uncover" }" @click=${this.closeThings}></div>
            <!-- <button id="stupid-button" class="int-button" on-tap="toggleStupid">
                    <iron-icon icon="announcement"></iron-icon>
                </button> -->
            <div id="stupid-modal" ?hidden=${ !this._showStupidDialog }>
                <div
                    class="int-vertical-container"
                    ?hidden=${this._showStupidForm}
                >
                    <h3>"Gee, that was stupid."</h3>
                    <p>
                        See something stupid on this site that shouldn't have
                        happened? Tell me about it!
                    </p>
                    <textarea
                        id="stupid-input"
                        ${ref(this.stupidInput)}
                        placeholder="What went horrendously wrong?"
                        value="{{feedback::input}}"
                        @keydown=${this.handleKeydown}
                    ></textarea>
                    <button
                        class="int-button"
                        on-tap="submitStupid"
                        ?disabled=${this._feedback === ""}
                    >
                        Submit
                    </button>
                    <p>
                        Now when something breaks, you can do something about
                        it! Thanks!
                    </p>
                </div>
                <div
                    class="int-vertical-container"
                    hidden$="[[showStupidForm]]"
                >
                    <h3>Thanks!</h3>
                    <p>
                        Thanks for your feedback! I'll try to make the site less
                        stupid.
                    </p>
                </div>
            </div>
        `;
    }

    @state()
    private _menuOpen = false;

    @state()
    private _overlayUp = false;

    @state()
    private _showStupidDialog = false;

    @state()
    private _showStupidForm = true;

    @state()
    private _database = "feedback";

    @state()
    private _feedback = "";

    @state()
    private _block = false;

    // constructor() {
    //     super();
    //     // this.apiKey = Credentials.apiKey;
    //     // this.databaseUrl = Credentials.databaseUrl;
    // }

    toggleMenu() {
        // toggle the mobile menu
        this._menuOpen = !this._menuOpen;
        this._overlayUp = !this._overlayUp;
    }

    toggleStupid() {
        // toggle the stupid feedback modal
        this._showStupidDialog = !this._showStupidDialog
        this._overlayUp = !this._overlayUp;
        if (this._showStupidDialog) {
            const stupidInput = this.stupidInput.value;
            stupidInput.focus()
        }
    }

    handleKeydown(e: KeyboardEvent) {
        // submit on enter but not shift enter
        if (e.key === "Enter" && !e.shiftKey) this.submitStupid();
        // hide on escape
        if (e.key === "Escape") {
            this._showStupidDialog = false;
            this._overlayUp = false;
        }
    }

    submitStupid() {

        // this.$["fire-save-doc"].data = {
        //     message: this.feedback,
        //     timestamp: new Date().toDateString(),
        // };
        // this.$["fire-save-doc"].saveValue(this.database);
        // this.$["fire-save-doc"].reset();
        // TODO: await and error catch database API call
        this._showStupidForm = false;
        this._overlayUp = false;
        this._showStupidDialog = true;
        this._feedback = "";

        // TODO: close the modal on clicking or Esc key
    }

    closeThings() {
        this._overlayUp = false;
        this._showStupidForm = false;
        this._menuOpen = false;
    }

}

