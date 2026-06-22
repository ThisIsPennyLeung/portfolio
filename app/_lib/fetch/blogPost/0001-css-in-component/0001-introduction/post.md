---
publish: true
title: "CSS-in-JS - Don't write a class like ingredients label"
tags:
  - Frontend
---

Can you remember a thousand methods or algorithms in a uni exam?
or can you write a large project without any autocomplete? 
if not I don't think any one can remember something like `fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent`

Tailwind is good to giving developer a design guidelines,
but not many developer know why bootstrap is 12 columns or why the UI should not +- 1px on UI
or why should not put a thousand items to one columns
the most important thing is, don't repeat by yourself (DRY), even frontend.

I saw the most worst case is, all the page modal title colour and padding is difference. or a thousand problem like
- User want to change dropdown to typeahead at a week before going production
- Same ui pattern, color, padding difference on each page
- You don't know where and when changed the text content, all people using difference selector
- We have 10+ place modal on code, some ripped out close button, some riped cancel button, or both
- etc etc ...

so I would like to say using css class or anything else way to implement it is doesn't matter, but we need to put it to component
you can delege make it perfect in the future, but you cannot drop the random code everywhere

