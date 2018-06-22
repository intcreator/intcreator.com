import '/node_modules/@polymer/polymer/polymer-legacy.js';
import '/node_modules/polymerfire/polymerfire.js';
import '/node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js';
import '/node_modules/@polymer/iron-input/iron-input.js';
import '/node_modules/@polymer/iron-icons/iron-icons.js';
import '/styles/int-styles.js';
import '../../../../moment/moment.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="twit-bot">
	<template>
		<style include="int-styles">
			header {
				position: fixed;
				top: 0;
				width: 100vw;
				background-color: #333;
				z-index: 1;
			}

			header > * {
				padding: 10px;
				max-width: 600px;
				margin: auto;
				display: flex;
			}

			#header-content > * + * {
				margin: 0;
				margin-left: 20px;
			}

			#container {
				max-width: 600px;
				margin: 80px auto;
			}

			#new-twit {
				padding: 20px;
				border: solid grey 1px;
				margin-bottom: 20px;
				border-radius: 5px;
			}

			#new-twit > * + * {
				margin-top: 10px;
			}

			#new-twit__input {
				width: 100%;
			}

			#new-twit__details {
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			#new-twit__details > * + * {
				margin-left: 10px;
			}

			.new-twit-container--open {
				height: 50px;
			}

			.twit {
				padding: 10px;
				background-color: rgba(255, 255, 255, 0.1);
				display: flex;
			}

			.twit > * + * {
				margin-left: 10px;
			}

			.twit + .twit {
				border-top: solid grey 1px;
			}

			.twit__profile-pic {
				height: 50px;
				width: 50px;
				border-radius: 5px;
				background-color: grey;
				flex-shrink: 0;
			}

			.twit__sender {
				font-weight: bold;
			}

			.twit__time-since {
				color: #bbb;
			}

			.twit__message {
				font-weight: 300;
				word-break: break-word;
			}

			.twit__options {
				margin-top: 20px;
			}

			.twit__options iron-icon {
				color: #bbb;
			}

			.twit__options iron-icon:hover {
				color: currentColor;
				cursor: pointer;
			}

			.show-more {
				border-top: solid grey 1px;
				padding: 10px;
				background-color: rgba(255, 255, 255, 0.1);
			}

			.show-more:hover {
				background-color: rgba(255, 255, 255, 0.2);
				cursor: pointer;
			}

		</style>

		<firebase-app name="int-navigation" auth-domain="intcreator-1551e.firebaseio.com" database-url="https://intcreator-1551e.firebaseio.com/" api-key="AIzaSyBGZf2qoFSW7hGvFAxtoRkijgxPLAUliAQ">
		</firebase-app>
		<firebase-query id="fire-query" app-name="twitter" path="[[database]]" data="{{data}}" limit-to-last="[[numTwits]]" order-by-key="" log="">
		</firebase-query>
		<firebase-document id="fire-save-doc" app-name="twitter">
		</firebase-document>

		<header>
			<div id="header-content">
				<h2>Twit Bot</h2>
				<button hidden\$="[[showHandleInput]]" class="int-button" on-tap="toggleHandleInput">Set Username</button>
				<iron-input hidden\$="[[!showHandleInput]]">
					<input allowed-pattern="[^\\s/\\\\<>]" value="{{handle::input}}">
				</iron-input>
				<button hidden\$="[[!showHandleInput]]" class="int-button" on-tap="toggleHandleInput">Done</button>
			</div>
		</header>

		<article id="container" hidden\$="[[!showTwits]]">
			<div id="new-twit">
				<iron-autogrow-textarea id="new-twit__input" placeholder="Type something..." focused="{{newTwitFocused}}" value="{{newTwit}}">
					<textarea></textarea>
				</iron-autogrow-textarea>
				<div id="new-twit__details" hidden\$="[[!hideNewTwitDetails(newTwitFocused, newTwit)]]">
					<span style\$="color:[[newTwitCharsLeftColor(newTwit.length)]];">{{newTwitCharsLeft(newTwit.length)}}</span>
					<button class="int-button" disabled\$="[[!canTwit(newTwit)]]" on-tap="sendTwit">Twit</button>
				</div>
				<!-- <button class="int-button" on-tap="massageData">Clean up data</button> -->
			</div>

			<template is="dom-repeat" items="{{data}}" as="twit" sort="sortByDate">
				<div class="twit">
					<div class="twit__profile-pic"></div>
					<div class="twit__body">
						<div><span class="twit__sender">[[twit.sender]]</span> <span class="twit__time-since">[[timeSince(twit.timeStamp)]]</span></div>
						<div><span class="twit__message">[[limitTo(twit.message, 140)]]</span></div>
						<div class="twit__options">
							<iron-icon icon="favorite" on-tap="favorite" twit="[[twit]]"></iron-icon>[[twit.favorites.length]]
							<iron-icon icon="delete" on-tap="delete" twit="[[twit]]"></iron-icon>
						</div>
					</div>
				</div>
			</template>
			<div on-tap="showMore" class="show-more">Show more...</div>
		</article>

	</template>

	

	
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/* <link rel="import" href="/bower_components/no-ie/no-ie.html"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
