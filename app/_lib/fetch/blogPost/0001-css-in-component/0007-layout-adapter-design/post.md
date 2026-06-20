---
publish: false
title: "Day 6, layout, adapter design"
tags:
  - Frontend
---





????

Then you need to about when the browser resize:
- which item can be grow/shrink
- which item i can wrap it to next line (I don't suggest hide any thing)
- can we break it the item to two page?


which item can be grow/shrink
    typical I will make the content grow and shrink
    [message box]
    but it can't infinite wide or infinite thin
    [infinite wide] [infinite thin]

    so this moment, you need to set `min-width` and `max-width` to tell it the limit
    [content page demo (like wiki?)]


which item i can wrap it to next line (I don't suggest hide any thing)
    feel free to scroll, but if your giving a horizontal scroll, user usually would unhappy, except table and tab
    so we need to prevent horizontal scroll, but also can't make infinite thin
    we can wrap something to get a space

    like the form
    [form wrap demo]

    [Z method vs \ method]  


can we break it the item to two page?
    [list / detail, link to material design guideline]


implemenation
    [show using display: grid to implement it]
    [grid-area]