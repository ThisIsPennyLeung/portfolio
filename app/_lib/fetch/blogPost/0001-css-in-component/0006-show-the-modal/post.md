---
publish: false
title: "Day 5, show the modal, z-index, dom tree"
tags:
  - Frontend
---





On dom, you need top on another, typically we use relative-absolute:
```
.parent {
    position: absolute;
}

.child {
    position: relative;
}

.modal {
    position: relative;
}
```
I don't need to set z-index, because on same level, the later one will on top
if you unsure you can set the z-index, bigger is on top

it's easy, and have a happy day


In some day, developer will find the modal can't top at all.
This is a bit fun happen if your not develop your UI like a system.

```
<div class="layout">
    <div class="header">header</div>

    <div class="wrapper">
    <div class="main">main</div>
    <div class="overlay">overlay</div>
    </div>
    
    <div class="footer">footer</div>
</div>
```

```
.wrapper {
    background-color: darkgray;
    position: relative;
}

.overlay {
    background: darkgreen;
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

/* --------------- */
.layout {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
}

.header {
    height: 50px;
    border: 1px solid black;
}

.footer {
    height: 25px;
    border: 1px solid black;
}

.wrapper {
    flex-grow: 1;
    border: 1px solid black;
}
```

the `top: 0; left: 0; right: 0; bottom: 0;` it's only related to `position: relative`, not entire document,
so the correct way it put the overlay on top of entire layout
```
<div class="wrapper">
    <div class="layout">
    <div class="header">header</div>
    <div class="main">main</div>
    <div class="footer">footer</div>
    </div>
    <div class="overlay">Leave your modal here</div>
</div>
```

and the close button will work all of the page, I don't need to worry about on each page
