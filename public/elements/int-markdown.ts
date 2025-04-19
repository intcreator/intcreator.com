import { LitElement, css, html } from "lit";
import { customElement, state } from 'lit/decorators.js';
import { Task } from '@lit/task';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
    PreventAndRedirectCommands,
    Router,
    RouterLocation,
} from '@vaadin/router';

import { marked } from "marked";

import { globalStyles } from "../styles/int-styles";
import "./int-404.js";

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

    @state()
    markdownPath: string;

    private _markdownTask = new Task(this, {
        task: async ([markdownPath]) => {
            const response = await fetch(`/data/pages/${markdownPath}.md`);
            if (!response.ok) { throw new Error(`${response.status}`); }
            const markdownSource = await response.text();
            return markdownSource;
        },
        args: () => [this.markdownPath]
    });

    public onAfterEnter(
        location: RouterLocation,
        commands: PreventAndRedirectCommands,
        router: Router
    ): void {
        const markdownPath = location.params.markdownPath; // path: '/:markdownPath'
        if (markdownPath !== undefined) {
            this.markdownPath = markdownPath as string;
        }
    }

    render() {
        return this._markdownTask.render({
            // pending: () => html``,
            complete: (source) => html`
                <div id="container">
                    ${unsafeHTML(marked.parse(source) as string)}
                </div>
            `,
            error: (e) => {
                return html`<int-404></int-404>`
            }
        })
    }
}
