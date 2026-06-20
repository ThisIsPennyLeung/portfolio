---
publish: false
title: "Day 4, height, scroll"
tags:
  - Frontend
---


D


Width and height we will leave it to layout [detail explain it in future day],
on the component, we need to know will it expand? and will it scroll?

For modal content, the content maybe long, we need it expand it, if it's too long, make it scroll

How to scroll?

typical case is
- the children too long, longer than the height on ancestor 
- ancestor `overflow: auto`, or any kind of reason make `height` or `max-height` was set
it will appear the scroll bar on ancestor

and those can occur in same dom element, but for clear, I will split it into 2 div
```css
.ancestor {
    border: 1px solid red;
    height: 100px;
    overflow: auto;
}

.child {
    border: 1px solid blue;
}
```

[scroll demo]

but on actual case, I will leave the height to layout, we only set where did the scroll bar(`overflow: auto`) will occur on 
and leave the height to layout

for layout, modal is a popup so the layout is simple, just align center and cetner,
use two flex to do it (prevent grid nest grid, it will impact the performance consider flex first)

[layout]

but do you feel it's a little bit weird? look like something not right?

actually it modal is not center, it should be around 1/3 on top of screen,

so we [layout updated]
