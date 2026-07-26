---
publish: true
title: "CSS-in-JS - Day 1, high level design - modal"
tags:
  - Frontend
---

Some people hesitate to touch the UI because:
- Adding new divs can break the CSS
- Dead CSS code
- CSS is awesome™

By putting CSS and DOM into components, you can:
- Scope the CSS to prevent global access
- Reuse components, which can save your day

Modern UI development makes this easy, and you don't need React/Vue/Angular to use this concept—it works with jQuery + TypeScript too.

Let's start with a modal. Don't think in divs first; think in human language.

### What elements does a modal have?
- Header
- Content
- Footer

![Header, Content, Footer](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-1.png)

### What does the header contain?
- Title
- Close button on the right

![Title, Close Button](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-2.png)

### What does the content contain?
- A little content
- Long, long, long content with a scrollbar

![Long Content with Scrollbar](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-3.png)

### What does the footer contain?
- Buttons on the left
- Buttons on the right

![Buttons on Left and/or Right](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-4.png)

### Before we are going to implement

You need to know some basic CSS layout:

- [display: flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<br /><br />

#### Now we are try to make something like list
<Playground
css={`
  .myList {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .header { border: 1px solid black; background: darkorchid; }
  .content { border: 1px solid black; background: darkgoldenrod; }
  .footer { border: 1px solid black; background: darkcyan; }
`}
html={`
  <div className="myList">
    <div className="header">[Header]</div>
    <div className="content">[Content]</div>
    <div className="footer">[Footer]</div>
  </div>
`} />

<br /><br />

#### Make the content used up all height
<Playground
css={`
  .myList {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .content {
    /* Make the content used up all height */
    flex-grow: 1;
  }

  .header { border: 1px solid black; background: darkorchid; }
  .content { border: 1px solid black; background: darkgoldenrod; }
  .footer { border: 1px solid black; background: darkcyan; }
`}
html={`
  <div className="myList">
    <div className="header">[Header]</div>
    <div className="content">[Content]</div>
    <div className="footer">[Footer]</div>
  </div>
`} />

<br /><br />

#### Consider below thing when your using `display: flex`
- Direction: horizontal or vertical
- Will it wrap?
- How to fill up the empty space: one item fills the space, all space at the end, or evenly distributed between items?