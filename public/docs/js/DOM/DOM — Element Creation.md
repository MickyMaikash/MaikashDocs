# 🌐 JavaScript DOM — Element Creation

In this section, we learn how to **create an HTML element using JavaScript**, add properties and styles to it, add text, and finally attach it to the webpage.

---

## Creating an Element

### `document.createElement()`

JavaScript can create a new HTML element using `document.createElement()`.

```js
const div = document.createElement('div')

console.log(div)
```

Here:

- `document` represents the HTML document.
- `createElement()` creates a new HTML element.
- `'div'` tells JavaScript which element to create.

The created `<div>` exists in JavaScript, but it is **not yet visible on the webpage**.

---

## Adding a Class

### `className`

We can give the newly created element a CSS class using `className`.

```js
div.className = "main"
```

This creates:

```html
<div class="main"></div>
```

---

## Adding an ID

### `id`

We can also assign an ID to the element.

```js
div.id = Math.round(Math.random() * 10 + 1)
```

Here:

- `Math.random()` generates a random number.
- `Math.round()` rounds the number.
- The generated value is assigned as the element's ID.

For example, the result could be:

```html
<div id="7"></div>
```

The exact number can change each time the code runs.

---

## Adding Attributes

### `setAttribute()`

The `setAttribute()` method can add an HTML attribute to an element.

```js
div.setAttribute("title", "generate title")
```

This creates:

```html
<div title="generate title"></div>
```

The general syntax is:

```js
element.setAttribute("attribute", "value")
```

For example:

```js
div.setAttribute("title", "My Div")
```

---

## Adding CSS Styles

### Using `.style`

JavaScript can directly change the style of an element.

```js
div.style.backgroundColor = "green"
div.style.padding = "15px"
```

This is similar to:

```html
<div style="background-color: green; padding: 15px;"></div>
```

JavaScript uses:

```js
backgroundColor
```

instead of CSS:

```css
background-color
```

### More Examples

```js
div.style.color = "white"
div.style.margin = "20px"
div.style.fontSize = "20px"
```

---
## Adding Text

There are different ways to put text inside an element.

### Using `innerText`

You can directly add text using `innerText`.

```js
div.innerText = "TypenDraw and Code"
```


---

## Creating a Text Node

### `document.createTextNode()`

Another way to create text is by using `document.createTextNode()`.

```js
const textry = document.createTextNode("TypenDraw and Code")
```

This creates a text node containing:

```text
TypenDraw and Code
```

However, creating the text node alone does not put it inside the `<div>`.

---

## Adding the Text Node to the Element

### `appendChild()`

We can add the text node to the `<div>` using `appendChild()`.

```js
div.appendChild(textry)
```

Now the structure becomes:

```html
<div>
    TypenDraw and Code
</div>
```

### How It Works

```js
const textry = document.createTextNode("TypenDraw and Code")

div.appendChild(textry)
```

First:

```js
document.createTextNode()
```

creates the text.

Then:

```js
appendChild()
```

puts that text inside the `<div>`.

---

## Attaching the Element to the HTML

Until now, the `<div>` exists only in JavaScript.

To actually add it to the webpage, we use:

```js
document.body.appendChild(div)
```

This attaches the created `<div>` inside the `<body>`.

The final HTML structure will look roughly like:

```html
<body>
    <div class="main" id="7" title="generate title">
        TypenDraw and Code
    </div>
</body>
```

The exact ID can be different because it is generated randomly.

---
## Complete Example

```js
const div = document.createElement('div')

console.log(div)

div.className = "main"

div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("title", "generate title")

div.style.backgroundColor = "green"

div.style.padding = "15px"

const textry = document.createTextNode("TypenDraw and Code")

div.appendChild(textry)

document.body.appendChild(div)
```

### What Happens Step-by-Step?

```text
createElement()
      ↓
Create <div>
      ↓
Add class
      ↓
Add id
      ↓
Add attribute
      ↓
Add styles
      ↓
Create text node
      ↓
Append text to div
      ↓
Append div to body
      ↓
Element appears on webpage
```

---

## 🧠 Quick Revision

### `document.createElement()`

Creates a new HTML element.

```js
const div = document.createElement("div")
```

### `className`

Adds or changes the element's class.

```js
div.className = "box"
```

### `id`

Adds or changes the element's ID.

```js
div.id = "mainBox"
```

### `setAttribute()`

Adds or changes an HTML attribute.

```js
div.setAttribute("title", "Hello")
```

### `.style`

Changes inline CSS styles.

```js
div.style.color = "red"
```

### `createTextNode()`

Creates a text node.

```js
const text = document.createTextNode("Hello")
```

### `appendChild()`

Adds a node as a child of another element.

```js
div.appendChild(text)
```

### `document.body.appendChild()`

Adds the created element to the webpage body.

```js
document.body.appendChild(div)
```

---


### 🧩 Memory Trick

```text
createElement → CREATE
className → CLASS
id → ID
setAttribute → ATTRIBUTE
style → STYLE
createTextNode → TEXT
appendChild → ATTACH
```

### Complete Flow

```js
const element = document.createElement("div")
```

Create the element.

```js
element.className = "box"
element.id = "myBox"
```

Add class and ID.

```js
element.setAttribute("title", "My Box")
```

Add an attribute.

```js
element.style.backgroundColor = "green"
```

Add styling.

```js
const text = document.createTextNode("Hello")
element.appendChild(text)
```

Add text.

```js
document.body.appendChild(element)
```

Finally attach it to the webpage.

---

## 📝 Practice

> Try these yourself without looking at the answers. Use examples different from the lecture.

### 1 Create a Paragraph

Create a `<p>` element using JavaScript and print it using `console.log()`.

---

### 2 Add a Class

Create a `<section>` element and give it the class:

```text
container
```

---

### 3 Add an ID

Create a `<div>` and give it the ID:

```text
profileBox
```

---

### 4 Add an Attribute

Create an `<input>` and use `setAttribute()` to add:

```text
type="text"
```

---

### 5 Add a Title

Create a button and add this attribute:

```text
title="Click Me"
```

---

### 6 Change Background

Create a `<div>` and give it a yellow background using JavaScript.

---

### 7 Add Padding

Create a `<div>` and give it:

```text
padding: 20px
```

---

### 8 Create Text

Use `document.createTextNode()` to create:

```text
Welcome to JavaScript
```

---

### 9 Attach Text

Create a `<h2>` and attach the text node from the previous question to it.

---

### 10 Attach to Body

Create a `<p>` with some text and attach it to `document.body`.

---

### 11 Complete Element

Create a `<div>` that has:

- class: `card`
- id: `userCard`
- title: `User Information`
- background color: blue
- padding: `10px`
- text: `User Profile`

Then attach it to the body.

---

### 12 Create a Button

Create a `<button>` using JavaScript and add the text:

```text
Save
```

Then attach it to the webpage.

---

### 13 Create a Heading

Create an `<h1>` and add the text:

```text
My Dashboard
```

Then add it to the body.

---

### 14 Create an Input

Create an `<input>` and use `setAttribute()` to add:

```text
placeholder="Enter your name"
```

Then attach it to the body.

---

### 15 Multiple Elements

Create three `<p>` elements using JavaScript.

Give each paragraph different text and attach all three to the body.

---

### 16 Style Multiple Properties

Create a `<div>` and set:

```text
backgroundColor
color
padding
margin
```

using JavaScript.

---

### 17 Text Node Challenge

Create a `<h3>` using `createElement()`.

Create its text separately using `createTextNode()`.

Attach the text to the heading and then attach the heading to the body.

---

### 18 Attribute Challenge

Create an `<a>` element.

Use `setAttribute()` to add an `href` attribute and a `title` attribute.

Then attach the link to the body.

---

### 19 Build a Card

Create a card using JavaScript containing:

```text
Product Name
Price: ₹999
Buy Now
```

Use multiple elements instead of putting everything into one text node.

---

### 20 Mini Challenge 🚀

> Build a complete profile card **only using JavaScript DOM methods**.

Your card should contain:

```text
Name
Age
A short description
```

Use:

- `createElement()`
- `className`
- `id`
- `setAttribute()`
- `.style`
- `createTextNode()`
- `appendChild()`

Finally attach the card to `document.body`.