---
publish: true
title: "CSS-in-JS - Don't write a class like ingredients label"
tags:
  - Frontend
---

Can you remember a thousand methods or algorithms in a uni exam?
Or can you write a large project without any autocomplete?
If not, I don't think anyone can remember something like `fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent`.

Tailwind is good at giving developers design guidelines,
but not many developers know why Bootstrap is 12 columns or why the UI should not vary by 1px on UI,
or why you should not put a thousand items in one column.
The most important thing is, don't repeat yourself (DRY), even in frontend.

I saw the worst case where all page modal title colors and padding are different. Or a thousand problems like:
- User wants to change dropdown to typeahead a week before going to production
- Same UI pattern, color, padding difference on each page
- You don't know where and when the text content changed, all people using different selectors
- We have 10+ places where modal is used in the code, some with the close button ripped out, some with the cancel button ripped out, or both
- etc. etc. ...

So I would like to say that using CSS class or any other way to implement it doesn't matter, but we need to put it into components.
You can delegate making it perfect in the future, but you cannot drop random code everywhere.