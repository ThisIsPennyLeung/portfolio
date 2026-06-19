  [tailwind css]

    It's so long and no one know [change edited text]

    Talidwind is good to make the developer have a common knowledge for design, but I think this copy and paste on css class is not a good idea
    it's hard to read and worry about will it identical in all the pages

    In my life, I saw:
    - User want to change dropdown to typeahead at a week before going production
    - Same ui pattern, color, padding difference on each page
    - You don't know where and when changed the text content, all people using difference selector
    - We have 10+ place modal on code, some riped close button, some riped cancel button, or both
    - etc etc ...

    you can delege make it perfect in the future, but you cannot drop the random code everywhere

    ------------------

    Day 1, high level design - modal

    Some people hesitant to touch the UI 
    - Added some new div into it, all css crash
    - Dead css code
    - Css is awesome (TM)

    Put it into component, scope it and reuse it, will make your life better
    it's not hard if you think it tought on high level first

    you need to make a modal, what do you so what modal will have?
      - header, content, footer
      [image]

    and what header will have?
      - title, close button (optional)

    and what content will have?
      - anything, and it as long as scroll
      [image]

    and what footer will have?
      - some buttons, and buttons should be append it from right to left
      - maybe some case you need a danger delete button on left
      [image]

    --------------

    Day 2, display: flex

    Before implement the modal in day 1, you need to know some css layout

    - flex https://css-tricks.com/snippets/css/a-guide-to-flexbox/
      - for list, header-content-footer layout

    [list]

    [table]

    [F12 3D layer]

    it's only care few thing
    - direction
    - wrap?
    - space at the end or evenly distributed between items?
    
    PS: old a day more horrible
      [old float:left way]
    
    --------------

    Day 3, all about list

    Come back to implement the model, you learn the flex on day 2,

    major business ui case is all about the horizontal list and vertical list

    for you modal can be simplify to few list

    - header - content - footer
    - footer --> list with 2 items (left, right) --> button list
    - header --> list with 2 items (title - hold up all space, close button)

    [header-content-footer]

    [title, close button]

    [footer left, right]

    [footer buttons]

    --------------

    Day 4, height, scroll

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

    --------------

    Day 5, show the modal, z-index, dom tree

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

    --------------

    Day 6, layout, adapter design 

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

    --------------

    Day 7 Summary, Further reading

    Even you're not using material design, you should read any one design guidelines
    You can learn a lot like you should not reduce horizontal padding
      or the button padding is make you can click the button using your finger

      [Material Design Guidelines](https://m3.material.io/foundations)

      [Flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
        - core element for list, header-content-footer layout or any you need align top right bottom left or fill empty trick

      [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
        - core element for dashboard layout, responsible design

      [Position](https://css-tricks.com/almanac/properties/p/position/)
        - for overlay like modal, background


      Component Library (Story book)

      This week you made a modal, now you can list this component to tell another developer how to use it and the show case like the open source framework :)
      [show case]

    --------------

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