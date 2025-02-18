import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';

import '../../../@polymer/app-route/app-route.js';
import '../../../@polymer/iron-ajax/iron-ajax.js';
import '../styles/int-styles.js';

class IntBlog extends PolymerElement {

    static get is() { return 'int-blog' }

    static get properties() {
        return {
            requestUrl: {
                type: String,
                    computed: 'computeRequestUrl(blog, data.slug)'
                },
                content: {
                    type: String
                },
                blog: {
                    type: String
                }
            }
    }

    computeRequestUrl(blog, slug) {
        return `/blogs/${ blog ? blog : 'timl' }/${ !slug || slug === "" ? 'der-blätter' : slug }.md`;
    }

    setMarkdown(e, resp) {
        if(resp.response.includes('<html>')) return;
        this.set('content', resp.response);
    }

    reportNotFound(e, resp) {
        this.set('content', "Post not found.")
    }

}

customElements.define(IntBlog.is, IntBlog);
