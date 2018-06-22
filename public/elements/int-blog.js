/* <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';

import '../../../@polymer/app-route/app-route.js';
import '../../../@polymer/iron-ajax/iron-ajax.js';
import '../../../@polymer/marked-element/marked-element.js';
import '/styles/int-styles.js';

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
