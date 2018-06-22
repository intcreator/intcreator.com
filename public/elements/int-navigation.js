import { PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';
import '../../../node_modules/@polymer/iron-icons/iron-icons.js';
import '../../../node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
// import '../../../node_modules/polymerfire/polymerfire.js';
import '/styles/int-styles.js';
import { GestureEventListeners } from '../../../node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';

class IntNavigation extends GestureEventListeners(PolymerElement) {

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
				this.apiKey = Credentials.apiKey;
				this.databaseUrl = Credentials.databaseUrl;
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
