---
publish: true
title: "CSS-in-JS - Day 1, high level design - modal"
tags:
  - Frontend
---

Some people hesitant to touch the UI, it's because:
- Added some new div into it, all css crash
- Dead css code
- Css is awesome <sup>TM</sup>

Put the css and DOM to component,
scoped the css scope, don't let the selector can access everything,
and reuse the component, this can save your day

We're going to modern UI doing this is not hard,
and this is not limited using react/vue/angular to make it component, you know the concept you can using this way ever it's jquery + typescript

<br /><br />

### Let start from a modal, don't going to div first, think it in human language

<br /><br />

### What do you think what element do modal have?
- header
- content
- footer

![header, content, footer](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-1.png)

<br /><br />

### What header will have?
- title
- close button on the right

![title, close button](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-2.png)

<br /><br />

### What content will have?
- little content
- long long long content, and scrollbar

![long long long content, and scrollbar](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-3.png)

<br /><br />

### What footer will have?
- some buttons on left
- some buttons on right

![button on left and/or right](@/app/_lib/fetch/blogPost/0001-css-in-component/0002-modal/modal-high-level-4.png)

<br /><br />

### Before we are going to implement

You need to know some basic css layout

- [display: flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<br /><br />

#### Now we are try to make something like list
```
const Example = () => {
  return <>
    <style>{`
      .myList {
        height: 100%;

        display: flex;
        flex-direction: column;
      }

      .header { border: 1px solid black; background: darkorchid; }
      .content { border: 1px solid black; background: darkgoldenrod; }
      .footer { border: 1px solid black; background: darkcyan; }
    `}</style>

    <div className="myList">
      <div className="header">[Header]</div>
      <div className="content">[Content]</div>
      <div className="footer">[Footer]</div>
    </div>
  </>
}
render(<Example />)
```

<br /><br />

#### Make the content used up all height
```
const Example = () => {
  return <>
    <style>{`
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
    `}</style>

    <div className="myList">
      <div className="header">[Header]</div>
      <div className="content">[Content]</div>
      <div className="footer">[Footer]</div>
    </div>
  </>
}
render(<Example />)
```

#### Consider below thing when your using `display: flex`
- Direction: horizontal or vertical
- Will it wrap?
- How to fill up the empty space, one of item fill up empty space? put all space end of the list? or evenly distributed between items?

