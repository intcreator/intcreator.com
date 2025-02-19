import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-icons/image-icons.js";
import "../styles/int-styles.js";
const $_documentContainer = document.createElement("template");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `<dom-module id="int-slider">
  <template>
    <style include="int-styles">
      #container {
        color: #DDD;
        position: relative;
        width: 100%;
      }

      .show {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeIn;
      }

      .hide {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: fadeOut;
      }

      .slide {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        opacity: 0;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      button:focus {
        outline: none;
      }

      .nav-button {
        position: absolute;
        background: none;
        border: none;
        height: 100vh;
        width: 150px;
        cursor: pointer;
      }

      .nav-button::before {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
        transition: all ease-in-out .2s;
        color: white;
        content: "";
        opacity: 0;
      }

      .nav-button:hover::before {
        opacity: .6;
      }

      iron-icon {
        color: rgba(255, 255, 255, 0.4);
        transition: all ease-in-out .2s;
      }

      .nav-button:hover iron-icon {
        color: rgba(255, 255, 255, 0.9);
      }

      #previous-button {
        left: 0;
      }

      #previous-button::before {
        background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
      }

      #next-button {
        right: 0;
      }

      #next-button::before {
        background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
      }

      @media(max-width: 768px) {
        iron-icon {
          color: rgba(255, 255, 255, 0.9);
        }
      }

    </style>

    <div id="container" on-mouseover="pause" on-mouseout="unpause">
      <template is="dom-repeat" items="[[images]]">
        <div class\$="slide [[init(index)]]" style\$="background-image: url('[[item.url]]')"></div>
      </template>
      <button id="previous-button" class="nav-button" on-tap="showPreviousSlide">
        <iron-icon icon="image:navigate-before"></iron-icon>
      </button>
      <button id="next-button" class="nav-button" on-tap="changeSlide">
        <iron-icon icon="image:navigate-next"></iron-icon>
      </button>
    </div>

  </template>

  
</dom-module>`;

document.head.appendChild($_documentContainer.content);

class IntSlider extends PolymerElement {
    static get is() {
        return "int-slider";
    }

    static get properties() {
        return {
            images: {
                type: Array,
                value: [
                    {
                        url: "../images/home/lego.jpeg",
                    },
                    {
                        url: "../images/home/peak.jpg",
                    },
                    {
                        url: "../images/home/snow.jpg",
                    },
                    {
                        url: "../images/home/irrigation.jpg",
                    },
                    {
                        url: "../images/home/sunset.jpg",
                    },
                ],
            },
            slides: {
                type: Array,
            },
            paused: {
                type: Boolean,
                value: false,
            },
        };
    }

    connectedCallback() {
        super.connectedCallback();
        window.setInterval(function () {
            if (!this.paused) this.changeSlide();
        }, 7000);
    }

    init(index) {
        if (index) return "";
        else return "show";
    }

    changeSlide(direction) {
        this.slides = this.slides
            ? this.slides
            : document.querySelectorAll(".slide");
        var slides = this.slides;
        // find the active slide
        for (var i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("show")) {
                // hide it
                slides[i].classList.remove("show");
                slides[i].classList.add("hide");
                if (direction === "previous") {
                    // show the previous slide in sequence
                    var toShow =
                        i !== 0 ? slides[i - 1] : slides[slides.length - 1];
                } else {
                    // show the next slide in sequence
                    var toShow =
                        i !== slides.length - 1 ? slides[i + 1] : slides[0];
                }

                toShow.classList.remove("hide");
                toShow.classList.add("show");
                return;
            }
        }
    }

    showPreviousSlide() {
        this.changeSlide("previous");
    }

    pause() {
        this.set("paused", true);
    }

    unpause() {
        this.set("paused", false);
    }
}
