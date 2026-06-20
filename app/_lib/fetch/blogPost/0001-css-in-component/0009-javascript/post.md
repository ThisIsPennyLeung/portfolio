---
publish: false
title: "Bonus, abount javacsript"
tags:
  - Frontend
---


Bonus, javacsript

On all other language, if A == B and B == C, then will A == C
But on javascript is doesn't

To understand this, you need to know difference language the user cluture is difference
Java is so solid OOP language,
C# is from solid OOP language and copied all other language feature and keep up to date
Typescript is a second language for other developer, so you can keep using other language syntax to make a it totally difference (OOP vs funcction base)

javascript is a browser language, it's design for validate some user input,
so your thinking how to valid a textbox, it will make it sense

```
const textbox = document.getElementById("textbox")
if (!textbox) {
  console.log("textbox is empty");
  return;
}
```
you don't want to care it's `null`, `undefined` `string.length == 0`
just say, if it's nothing, do this
so why it will make why `null !== undefined``

if your unsure, you can print
```
// both of them is true
console.log(!null)
console.log(!undefined)
console.log(!"")
console.log(!0)
console.log(!NaN)
```


to be fair, it have some exception case, array and object
```
// both of them is false
console.log(!{})
console.log(![])
```
but you doesn't get those on textbox, so doesn't need worry about that