import { css } from 'lit-element/lit-element.js';

export const globalStyles: any = css`

	html {
		font-family: "Helvetica Neue", "Helvetica", "Source Sans Pro", sans-serif;
		margin: 0;
		background-color: #222;
		color: #ddd;
	}

	[hidden] {
		display: none !important;
	}

	a {
		color: #5cbef1;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: #aa80ff;
	}

	code {
		display: inline-block;
		padding: 0.2em;
		background-color: #444;
		border: 1px solid #bbb;
		border-radius: 3px;
		font-family: Consolas, "Liberation Mono", Courier, monospace;
		line-height: 1;
	}

	paper-tabs {
		--paper-tabs-selection-bar-color: white;
	}

	.int-vertical-container > * + * {
		margin-top: .7em;
	}

	.int-page {
		max-width: 800px;
		margin: 1em auto;
	}

	.int-button {
		font-size: 1em;
		text-align: center;
		display: inline-block;
		padding: 10px 20px;
		color: #eee;
		background-color: #000;
		border-radius: .2em;
		border: solid #eee 1px;
		cursor: pointer;
		text-decoration: none;
	}

	.int-button:hover {
		background-color: #444;
		text-decoration: none;
	}

	.int-button:active {
		background-color: #eee;
		color: #000;
	}

	.int-button:visited {
		color: inherit;
	}

	.int-button[disabled] {
		color: #777;
		border-color: #777;
		cursor: default;
	}

	.int-button[disabled]:hover {
		background-color: #000;
	}

	.int-button--block {
		display: block;
	}

	/* add some space to IDs to offset header */

	:target:before {
		display: block;
		content: " ";
		padding-top: 50px;
	}

	:target {
		margin-top: -20px;
	}

	h1 {
		font-size: 4.4em;
		font-weight: 100;
	}

	h2 {
		font-weight: 200;
		font-size: 2.1em;
	}

	h3 {
		font-weight: 500;
		font-size: 1.3em;
		letter-spacing: .04em;
		color: #999;
		text-transform: uppercase;
	}

	h4 {
		font-weight: 300;
		font-size: 1.5em;
	}

	p,
	li,
	input,
	textarea {
		font-size: 1.3em;
		font-weight: 400;
		letter-spacing: .02em;
	}

	input,
	textarea {
		resize: none;
		box-sizing: border-box;
		padding: .4em;
		border-radius: .2em;
		background-color: inherit;
		color: white;
		border: solid grey .05em;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: white;
	}

	pre {
		background-color: rgba(255, 255, 255, 0.15);
		padding: 1px 3px;
		font-family: 'Inconsolata';
		white-space: pre;
		overflow: auto;
	}

	h1,
	h2,
	h3,
	h4,
	p {
		margin: 0;
	}


	/* TODO: replace this obnoxious thing with :matches or equivalent once implemented */
	/* See http://caniuse.com/#search=%3Amatches */

	p + p,
	p + h1,
	p + h2,
	p + h3,
	p + h4 {
		margin-top: 1.3em;
	}

	h1 + p,
	h1 + h1,
	h1 + h2,
	h1 + h3,
	h1 + h4,
	h2 + p,
	h2 + h1,
	h2 + h2,
	h2 + h3,
	h2 + h4,
	h3 + p,
	h3 + h1,
	h3 + h2,
	h3 + h3,
	h3 + h4,
	h4 + p,
	h4 + h1,
	h4 + h2,
	h4 + h3,
	h4 + h4 {
		margin-top: .7em;
	}


	.animated {
		animation-fill-mode: both;
	}

	.transparent {
		opacity: 0;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 10%, 0);
		}

		to {
			opacity: 1;
			transform: none;
		}
	}

	.fadeInUp {
		animation-duration: 1s;
		animation-name: fadeInUp;
	}

	@keyframes fadeOutDown {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
			transform: translate3d(0, 10%, 0);
		}
	}

	.fadeOutDown {
		animation-duration: .3s;
		animation-name: fadeOutDown;
	}
`;