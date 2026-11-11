---
publish: true
title: "Spec Driven Development"
tags:
  - AICoding
---


This year I was trying difference way to use the AI help the development,

From copy and paste to chat, agent.md, skill or just told it to change this file this file...

but no one can give me some confidence, it's look like either can't follow the coding standard or doesn't unstandard why

when you asking model why you do that, it's only tell you how, only descript the fact, can't told me why to do that and base on what decision to doing this

but last month I find somthing call spec driven development the concept is document why and how to do it, before the implementation

sound good, and I tried github speckit and openspec, the people compare those it is only one used on greenfield another one using on brownfield

but I a little bit difference, I don't want to compare but I choose openspec finally, I feel it faster and when the model asking me some question, it is make sense, doesn't like speckit asking something no one know and let you sign question

here is my config:

1. let it make the C4 component diagram level 1, 2, 3 to make we know what model oding
2. output class diagram, sequence diagram, ERD to make sure the design is make sense
3. some small coding config like: golang style fast fail, assign into variable make a human read name before use it, write a human readable code not just only for machine read

Then the code look like readable, happyend

![Code](@/app/_lib/fetch/blogPost/0002-spec-driven-development/0001-spec-driven-development/code.png)
