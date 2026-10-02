# 🌐 JavaScript DOM — Basics & Traversal

The **DOM (Document Object Model)** allows JavaScript to interact with and manipulate HTML elements of a webpage.

With the DOM, JavaScript can:

- Select HTML elements
- Read their content
- Change their styles
- Traverse between elements
- Work with parents, children, and siblings

---

## DOM Basics

### What is the DOM?

When a browser loads an HTML page, it creates a **DOM structure** from the HTML.

For example:

```html
<body>
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
</body>
```

The browser represents these HTML elements as objects in the DOM.

JavaScript can then access these objects through `document`.

---

### The `document` Object

The `document` represents the webpage loaded in the browser.

```js
console.log(document)
```

JavaScript uses `document` to access HTML elements.

---

### Selecting HTML Elements

Consider:

```html
<h1 id="title" class="heading">
    DOM Learning In JavaScript
</h1>
```

The element has:

- `id="title"`
- `class="heading"`

These can be used to identify the element.

### Using `querySelector()`

`querySelector()` selects the **first element** that matches a CSS selector.

#### Selecting by Class

```js
const title = document.querySelector(".heading")

console.log(title)
```

The `.` means we are selecting a class.

#### Selecting by ID

```js
const title = document.querySelector("#title")

console.log(title)
```

The `#` means we are selecting an ID.

#### Selecting by Element

```js
const heading = document.querySelector("h1")

console.log(heading)
```

Here `"h1"` selects the first `<h1>` element.

---

## Reading HTML Content

Consider:

```html
<h1 id="title">
    DOM Learning
    <span style="display: none;">Hidden Text</span>
</h1>
```

You can select the heading:

```js
const title = document.querySelector("#title")
```

Then access its HTML:

```js
console.log(title.innerHTML)
```

`innerHTML` gives the HTML content inside the selected element.

For example, the `<span>` is also part of the `innerHTML`.

### Hidden Elements

```html
<span style="display: none;">
    text text
</span>
```

`display: none` means the element is not displayed on the webpage.

However, it still exists in the DOM.

---

## Working With Multiple Elements

Suppose we have:

```html
<h2>Lorem ipsum dolor sit.</h2>
<h2>Lorem ipsum dolor sit.</h2>
<h2>Lorem ipsum dolor sit.</h2>
```

There are multiple `<h2>` elements.

The DOM contains all of these elements, and DOM methods can be used to work with collections of elements.

---

## DOM Traversal

DOM traversal means **moving between elements in the DOM structure**.

For example:

```text
        parent
       /  |  \
   child child child
```

JavaScript provides properties that allow us to move between:

- Parent
- Children
- Siblings

---

### Selecting a Parent Element

HTML:

```html
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>
```

Select the parent:

```js
const parent = document.querySelector(".parent")

console.log(parent)
```

Now `parent` refers to:

```html
<div class="parent">
    ...
</div>
```

---

### `children`

The `children` property gives the **element children** of an element.

```js
console.log(parent.children)
```

The result contains the four `.day` elements.

```text
parent
├── Monday
├── Tuesday
├── Wednesday
└── Thursday
```

### Accessing a Child Using Index

Children can be accessed using indexes:

```js
console.log(parent.children[1])
```

The index starts from `0`.

```text
0 → Monday
1 → Tuesday
2 → Wednesday
3 → Thursday
```

Therefore:

```js
console.log(parent.children[1].innerHTML)
```

Output:

```text
Tuesday
```

---

### Looping Through Children

You can loop through all the children:

```js
for(let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}
```

Output:

```text
Monday
Tuesday
Wednesday
Thursday
```

### How It Works

```js
parent.children.length
```

gives the number of element children.

Then:

```js
parent.children[i]
```

accesses each child using its index.
---

### Changing the Style of an Element

You can access a child and change its style:

```js
parent.children[1].style.color = "red"
```

This changes the text color of the second child.

The important pattern is:

```js
element.style.property = "value"
```

Example:

```js
element.style.color = "red"
```

---

### `firstElementChild`

To get the first element child:

```js
console.log(parent.firstElementChild)
```

For our example:

```html
<div class="day">Monday</div>
```

Therefore:

```js
console.log(parent.firstElementChild.innerHTML)
```

Output:

```text
Monday
```

---

### `lastElementChild`

To get the last element child:

```js
console.log(parent.lastElementChild)
```

For our example:

```html
<div class="day">Thursday</div>
```

Therefore:

```js
console.log(parent.lastElementChild.innerHTML)
```

Output:

```text
Thursday
```

---

### Finding the Parent

Suppose we select the first `.day`:

```js
const dayone = document.querySelector(".day")
```

Now:

```js
console.log(dayone.parentElement)
```

`parentElement` finds the parent HTML element.

```text
dayone
   ↓
parentElement
   ↓
<div class="parent">
```

---

### Finding the Next Element

You can find the next element using:

```js
console.log(dayone.nextElementSibling)
```

If `dayone` is:

```html
<div class="day">Monday</div>
```

then the next element is:

```html
<div class="day">Tuesday</div>
```

Therefore:

```js
console.log(dayone.nextElementSibling.innerHTML)
```

Output:

```text
Tuesday
```

---

### `childNodes`

Another property available on an element is:

```js
console.log(parent.childNodes)
```

`childNodes` gives the **child nodes** of the element.

Unlike `children`, `childNodes` can include more than just HTML elements.

For example, whitespace and line breaks in the HTML can appear as **text nodes**.

So these two are different:

```js
parent.children
```

and:

```js
parent.childNodes
```

### Important Difference

```text
children
   ↓
Element children

childNodes
   ↓
All child nodes
```

For now, remember:

**`children` → element children**

**`childNodes` → all child nodes, including text nodes**

---

## 🧠 Quick Revision

### DOM

The **Document Object Model** represents the HTML document so JavaScript can interact with it.

### `document`

Used to access the webpage's DOM.

### `querySelector()`

Selects the first element matching a CSS selector.

```js
document.querySelector(".parent")
```

### `children`

Gets the element children.

```js
parent.children
```

### Child by Index

```js
parent.children[1]
```

### `firstElementChild`

Gets the first element child.

```js
parent.firstElementChild
```

### `lastElementChild`

Gets the last element child.

```js
parent.lastElementChild
```

### `parentElement`

Gets the parent element.

```js
dayone.parentElement
```

### `nextElementSibling`

Gets the next element.

```js
dayone.nextElementSibling
```

### `childNodes`

Gets all child nodes, which can include text nodes.

```js
parent.childNodes
```

---

## Final Takeaways

- **DOM** allows JavaScript to interact with HTML.
- `document` represents the webpage.
- `querySelector()` can select an element using CSS selectors.
- `#` is used for an ID selector.
- `.` is used for a class selector.
- `innerHTML` accesses HTML inside an element.
- `children` gives element children.
- Children use zero-based indexing.
- `firstElementChild` gives the first child element.
- `lastElementChild` gives the last child element.
- `parentElement` moves from child → parent.
- `nextElementSibling` moves from one element → next element.
- `childNodes` includes all child nodes, not just element children.

### 🧩 Memory Trick

```text
children             → element children
childNodes           → all child nodes

firstElementChild    → first child
lastElementChild     → last child

parentElement        → go UP
nextElementSibling   → go NEXT
```

---
## 📝 Practice

> Try these yourself first. Don't look at your old examples while solving them.

### 1 Basic Selection

> Create an HTML page containing a `<h1>` with the ID `mainHeading`. Select it using `querySelector()` and print it.

---

### 2 Class Selection

> Create three `<p>` elements with the class `description`. Use `querySelector()` to select the first one and print its `innerHTML`.

---

### 3 Children

> Create a `<div class="container">` containing four `<p>` elements. Print the `children` of the container.

---
### 4 Child Index

> Using the same container, print the text of the third child.

---

### 5 Loop Through Children

> Create five `<li>` elements inside a `<ul>`. Use a loop to print the text of every child.

---

### 6 Change Style

> Create a `<div>` containing three `<p>` elements. Change the text color of the second paragraph to blue using `children`.

---

### 7 First Child

> Create a parent `<div>` with four child `<div>` elements. Print the text of the first child using `firstElementChild`.

---

### 8 Last Child

> Using the same structure, print the text of the last child using `lastElementChild`.

---

### 9 Parent Element

> Select a button inside a `<div class="box">`. Use `parentElement` to print the button's parent.

---

### 10 Next Sibling

> Create three `<div>` elements with the class `item`. Select the first one and print the text of its next sibling.

---
### 11 Child Nodes

> Create a parent `<div>` with multiple child elements and line breaks between them. Print `childNodes` and inspect the result.

---

### 12 Compare

> Create a parent containing three `<span>` elements. Print both:
>
> ```js
> parent.children
> ```
>
> and:
>
> ```js
> parent.childNodes
> ```
>
> Observe the difference.

---

### 13 Combine Traversal

> Create a structure containing:

```text
section
├── div
├── div
└── div
```

> Select the first `div`, find its parent, and then find its next sibling.

---

### 14 Style Using Traversal

> Create four elements inside a parent. Select the parent and make the last child have a green text color.

---

### 15 Use a Loop

> Create six `<div>` elements inside a parent. Use a loop to print all their `innerHTML` values.

**---**

### 16 First + Last

> Create five list items. Print both the first and last item using:
>
> ```js
> firstElementChild
> ```
>
> and:
>
> ```js
> lastElementChild
> ```

---

### 17 Parent + Sibling

> Create three sibling elements. Select the middle element, find its parent, and then find its next sibling.

---

### 18 Index Practice

> Create seven `<li>` elements. Print the elements at indexes `0`, `3`, and `6`.

---

### 19 DOM Inspection

> Create a nested HTML structure and use:
>
> ```js
> console.log()
> ```
>
> to inspect the parent, children, first child, last child, and child nodes.

---

### 20 Mini Challenge

> Create a webpage containing:
>
> - One parent `<div>`
> - Five child elements
> - Different text inside every child
>
> Using only DOM traversal:
>
> 1. Print all children.
> 2. Print the first child.
> 3. Print the last child.
> 4. Print the parent of the first child.
> 5. Print the next sibling of the first child.
> 6. Change the color of the third child.
> 7. Print `children` and `childNodes`.