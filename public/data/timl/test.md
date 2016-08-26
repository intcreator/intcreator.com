# The Markdown Blog Project

This post exists to test the viability of using Markdown to write blog posts.

## Motivation

I'm tired of using blogging platforms like [Blogger](https://www.blogger.com/) and [WordPress](https://wordpress.org/) which keep my content only online in a messy database which I can maybe back up but not easily edit.  If I want to change the look and feel of my site I have to use plugins or edit the PHP myself (ack).  I have to always make sure my WordPress installation is up to date, as well as my themes and plugins.

With a site written in [Markdown](https://guides.github.com/features/mastering-markdown/), I can easily edit the content and structure of the site.  I can do it at home while offline without messy databases.  I don't have to worry about using HTML tags and messy HTML stuff.  Just easy, readable syntax.

## Possible Solutions

I thought about using something like [Ghost](https://ghost.org/) but I didn't want to pay additional hosting fees or be subject to yet another platform.  It's bad enough that I have to use [Polymer](https://www.polymer-project.org/1.0/), but luckily if Polymer ever kicks the bucket I'll have a nice stock of organized Markdown files that I can use to get a new blog started.

We'll see how it goes.  I'll ramble on a bit about the process as I go on.  Writing every now and then is therapeutic, especially when I get hung up on bugs and stuff.  And being a [sysadmin](https://xkcd.com/705/).

## Insights/How To

So I got this page up and running.  Editing is a snap.  It's beautiful.  Anyway here's how I did it:

  1. I added [`<marked-element>`](https://elements.polymer-project.org/elements/marked-element) and [`<iron-ajax>`](https://elements.polymer-project.org/elements/iron-ajax) to my app
  2. I imported my `markdown.md` file (the one that I edit to change this text) with `<iron-ajax>`
  3. I set the `markdown` attribute of the `<marked-element>` to the `resp.response` argument in the `<iron-ajax>` success callback

Basically it's like importing a text file, except `<marked-element>` styles it all pretty like.  Plus it adds contextual IDs <3

And it's so easy!  And fast!  I'm typing super fast, with no lag, no weird browser saving, no worries if I lose my internet connection...it's great.  I'm happy already.

And this page loads like lightning.
