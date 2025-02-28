import { LitElement, css, html } from "lit";
import {customElement, property} from 'lit/decorators.js';
import {Task} from '@lit/task';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import { marked } from "marked";

import { globalStyles } from "../styles/int-styles";

@customElement('int-markdown')
export class IntMarkdown extends LitElement {

    static styles = [globalStyles, css`
        #container {
            min-height: 50vh;
            padding: 10vw;
            padding-top: 50px;
            padding-bottom: 5vh;
        }

        img {
            max-width: 100%;
        }
    `];

    @property({type: String})
    path: string;

    private _markdownTask = new Task(this, {
        task: async ([path]) => {
            const response = await fetch(`${path}`);
            if (!response.ok) { throw new Error(`${response.status}`); }
            return response.text();
        },
        args: () => [this.path]
    });

    render() {
        return this._markdownTask.render({
            pending: () => html``,
            complete: (source) => html`
                <div id="container">
                    ${unsafeHTML(marked.parse(source) as string)}
                </div>
            `,
            error: (e) => html`<p>Error loading Markdown: ${e}</p>`
        })
    }
}
