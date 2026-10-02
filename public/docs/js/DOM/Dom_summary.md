## 🧠 DOM Summary

### 1️⃣ Selecting Elements

#### `getElementById()`

Selects an element using its `id`.

```js
document.getElementById("title")
```

#### `getElementsByClassName()`

Selects elements that have the specified class.

```js
document.getElementsByClassName("heading")
```

This can return an `HTMLCollection`.

#### `querySelector()`

Selects the **first element** that matches the given CSS selector.

```js
document.querySelector("h2")
```

If there are multiple `<h2>` elements, only the first matching one is returned.

You can use different CSS selectors:

```js
document.querySelector("#title")
```

`#` is used for an ID.

```js
document.querySelector(".heading")
```

`.` is used for a class.

```js
document.querySelector('input[type="password"]')
```

Selects an `<input>` whose `type` is `password`.

```js
document.querySelector("p:first-child")
```

Selects an element matching the `:first-child` CSS selector.

#### `querySelector()` on a Selected Element

We can also search inside an already selected element.

```js
const myList = document.querySelector("ul")

const target = myList.querySelector("li")

target.style.backgroundColor = "green"
```

Here, `querySelector()` searches for the `<li>` **inside `myList`**.

---

### 2️⃣ Selecting Multiple Elements

#### `querySelectorAll()`

Selects **all elements** matching the given CSS selector.

```js
const headings = document.querySelectorAll("h1")
```

The result is a **NodeList**.

```js
console.log(headings)
```

If multiple `<h1>` elements exist, all matching elements are included in the NodeList.

We can access an element using its index:

```js
headings[0]
headings[1]
headings[2]
```

For example:

```js
headings[1].style.color = "red"
```

This changes the second `<h1>`.

---

### 3️⃣ Reading Element Content

#### `innerText`

Returns the text that is **visible/displayed** to the user.

```js
element.innerText
```

Hidden text is generally not included.

#### `textContent`

Returns the text content of the element, including text that may not currently be visible because of CSS.

```js
element.textContent
```

### `innerText` vs `textContent`

```text
innerText    → visible/displayed text
textContent  → all text content
```

---

### 4️⃣ Reading HTML Content

#### `innerHTML`

Returns the HTML content inside an element, including HTML tags.

```js
element.innerHTML
```

For example:

```html
<h1>Hello <span>World</span></h1>
```

`innerHTML` can give:

```html
Hello <span>World</span>
```

Unlike `innerText` and `textContent`, `innerHTML` includes the HTML markup.

---

### 5️⃣ DOM Traversal

We can move through elements in the DOM.

#### `children`

Returns the element children of an element.

```js
parent.children
```

Only HTML elements are included.

#### `childNodes`

Returns all child nodes.

```js
parent.childNodes
```

This can include:

- Element nodes
- Text nodes
- Whitespace/newline text nodes
- Comment nodes

For example, indentation and new lines between HTML elements can appear as text nodes.

### Important Difference

```text
children    → only HTML elements
childNodes  → all child nodes
```

---

### 6️⃣ Finding Parent and Sibling Elements

#### `parentElement`

Finds the parent element.

```js
element.parentElement
```

#### `nextElementSibling`

Finds the next HTML element at the same level.

```js
element.nextElementSibling
```

#### `firstElementChild`

Finds the first element child.

```js
element.firstElementChild
```

#### `lastElementChild`

Finds the last element child.

```js
element.lastElementChild
```

---

### 7️⃣ Creating Elements

#### `createElement()`

Creates a new HTML element using JavaScript.

```js
const div = document.createElement("div")
```

#### `createTextNode()`

Creates a text node.

```js
const text = document.createTextNode("Hello")
```

#### `appendChild()`

Adds a node as a child.

```js
div.appendChild(text)
```

To add the element to the webpage:

```js
document.body.appendChild(div)
```

---

### 8️⃣ Editing Elements

#### `textContent`

Changes the text content.

```js
element.textContent = "Hello"
```

#### `innerHTML`

Changes the HTML inside an element.

```js
element.innerHTML = "<span>Hello</span>"
```

#### `replaceWith()`

Replaces an existing element with another element.

```js
oldElement.replaceWith(newElement)
```

#### `outerHTML`

Replaces the entire element with the provided HTML.

```js
element.outerHTML = "<p>Hello</p>"
```

### `innerHTML` vs `textContent`

```text
innerHTML   → works with HTML markup
textContent → treats the value as plain text
```

For untrusted/user-provided text, `textContent` is generally the safer choice.

---

### 9️⃣ Removing Elements

#### `remove()`

Removes an element from the DOM.

```js
element.remove()
```

Example:

```js
const lastItem = document.querySelector("li:last-child")

lastItem.remove()
```

---

### 🔟 NodeList

`querySelectorAll()` returns a **NodeList**.

```js
const items = document.querySelectorAll("li")
```

We can access items using their index:

```js
items[0]
items[1]
items[2]
```

A NodeList is not the same thing as a normal JavaScript Array.

---

### 1️⃣1️⃣ HTMLCollection

Some DOM methods return an `HTMLCollection`.

For example:

```js
const elements = document.getElementsByClassName("item")
```

The result is an `HTMLCollection`.

---

### 1️⃣2️⃣ Converting HTMLCollection to an Array

We can convert an `HTMLCollection` into an actual Array using:

```js
Array.from()
```

Example:

```js
const elements = document.getElementsByClassName("item")

const elementsArray = Array.from(elements)
```

Now `elementsArray` is a normal JavaScript Array.

---

## 🔑 Quick Memory

```text
getElementById()        → select by ID
getElementsByClassName() → select by class
querySelector()         → first matching element
querySelectorAll()      → all matching elements

innerText                → visible text
textContent              → text content
innerHTML                → HTML content

children                 → element children
childNodes               → all child nodes

parentElement            → parent
nextElementSibling       → next element
firstElementChild        → first element
lastElementChild         → last element

createElement()          → create element
createTextNode()         → create text
appendChild()            → add child
replaceWith()            → replace
remove()                 → remove

NodeList                 → result commonly returned by querySelectorAll()
HTMLCollection           → result commonly returned by getElementsByClassName()
Array.from()             → convert collection into an Array
```

### 🧩 DOM Flow

```text
SELECT
   ↓
READ
   ↓
TRAVERSE
   ↓
CREATE
   ↓
ADD
   ↓
EDIT
   ↓
REMOVE
```