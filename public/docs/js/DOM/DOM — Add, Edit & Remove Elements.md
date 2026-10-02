# 🌐 JavaScript DOM — Add, Edit & Remove Elements

JavaScript allows us to dynamically **add new elements**, **edit existing elements**, **replace elements**, and **remove elements** from the DOM.

---

## Adding Elements

### Creating a New Element

We can create a new HTML element using `document.createElement()`.

```js
const li = document.createElement('li')

console.log(li)
```

This creates:

```html
<li></li>
```

The element is created in JavaScript, but it is not yet visible on the webpage.

We need to attach it to an existing element using `appendChild()`.

---

## Adding Text Using `innerHTML`

We can add content to the newly created element using `innerHTML`.

```js
function addLanguage(languageName) {
    const li = document.createElement('li')

    li.innerHTML = languageName

    document.querySelector('.language').appendChild(li)
}
```

Now:

```js
addLanguage("Python")
addLanguage("TypeScript")
```

will add:

```html
<li>Python</li>
<li>TypeScript</li>
```

### `innerHTML`

`innerHTML` can be used to get or change the HTML content inside an element.

```js
element.innerHTML = "Hello"
```

---

## Adding Text Using `createTextNode()`

For adding plain text, we can create a text node separately.

```js
const li = document.createElement('li')

li.appendChild(document.createTextNode("Golang"))
```

Then attach the `<li>` to the list:

```js
document.querySelector('.language').appendChild(li)
```

### Complete Example

```js
function addLanguage(languageName) {
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(languageName))

    document.querySelector('.language').appendChild(li)
}
```

```js
addLanguage("Golang")
```

### How It Works

```text
createElement()
      ↓
Create <li>
      ↓
createTextNode()
      ↓
Create text
      ↓
appendChild()
      ↓
Put text inside <li>
      ↓
appendChild()
      ↓
Put <li> inside <ul>
```

---

## Selecting an Element by Position

We can select an element based on its position using `:nth-child()`.

```js
const secondLanguage = document.querySelector('li:nth-child(2)')
```

Here:

```css
li:nth-child(2)
```

selects the **second `<li>` element**.

For example:

```html
<ul>
    <li>JavaScript</li>
    <li>Python</li>
    <li>TypeScript</li>
</ul>
```

Then:

```js
document.querySelector('li:nth-child(2)')
```

selects:

```html
<li>Python</li>
```

---

## Editing an Element

### Using `innerHTML`

We can directly change the content of an existing element.

```js
secondLanguage.innerHTML = "Mojo"
```

For example:

```html
<li>Python</li>
```

becomes:

```html
<li>Mojo</li>
```

---

## Replacing an Element

Instead of changing the existing element, we can create a completely new element and replace the old one.

### `replaceWith()`

```js
const secondLanguage = document.querySelector('li:nth-child(2)')

const newLi = document.createElement('li')

newLi.textContent = "Mojo"

secondLanguage.replaceWith(newLi)
```

The old element:

```html
<li>Python</li>
```

is replaced with:

```html
<li>Mojo</li>
```

### `textContent`

`textContent` changes the text content of an element.

```js
newLi.textContent = "Mojo"
```

---

## Replacing an Element Using `outerHTML`

Another way to replace an element is using `outerHTML`.

```js
const firstLanguage = document.querySelector('li')

firstLanguage.outerHTML = "<li>TypeScript</li>"
```

The original:

```html
<li>JavaScript</li>
```

becomes:

```html
<li>TypeScript</li>
```

### `outerHTML` vs `innerHTML`

```js
element.innerHTML = "Hello"
```

changes the **content inside** the element.

```js
element.outerHTML = "<p>Hello</p>"
```

replaces the **entire element**.

---

## Two Ways to Replace an Element

### Method 1 — `outerHTML`

```js
firstLanguage.outerHTML = "<li>TypeScript</li>"
```

### Method 2 — `createElement()` + `replaceWith()`

```js
const newLi = document.createElement('li')

newLi.textContent = "TypeScript"

firstLanguage.replaceWith(newLi)
```

Both methods can replace the existing element.

---

## Removing an Element

### `remove()`

We can remove an element from the DOM using `remove()`.

```js
const lastLanguage = document.querySelector('li:last-child')

lastLanguage.remove()
```

This removes the last matching `<li>`.

### `:last-child`

```css
li:last-child
```

selects an `<li>` that is the last child of its parent.

For example:

```html
<ul>
    <li>JavaScript</li>
    <li>Python</li>
    <li>TypeScript</li>
</ul>
```

Then:

```js
document.querySelector('li:last-child')
```

selects:

```html
<li>TypeScript</li>
```

---

## Complete Example

```html
<ul class="language">
    <li>JavaScript</li>
</ul>
```

```js
function addLanguage(languageName) {
    const li = document.createElement('li')

    li.appendChild(document.createTextNode(languageName))

    document.querySelector('.language').appendChild(li)
}

addLanguage("Python")
addLanguage("TypeScript")

const secondLanguage = document.querySelector('li:nth-child(2)')

const newLi = document.createElement('li')
newLi.textContent = "Mojo"

secondLanguage.replaceWith(newLi)

const firstLanguage = document.querySelector('li')

firstLanguage.outerHTML = "<li>TypeScript</li>"

const lastLanguage = document.querySelector('li:last-child')

lastLanguage.remove()
```

---

## 🧠 Quick Revision

### `createElement()`

Creates a new HTML element.

```js
const li = document.createElement('li')
```

### `innerHTML`

Changes the HTML content inside an element.

```js
li.innerHTML = "Python"
```

### `createTextNode()`

Creates a text node.

```js
const text = document.createTextNode("Python")
```

### `appendChild()`

Adds a child to an element.

```js
li.appendChild(text)
```

### `textContent`

Changes the text content of an element.

```js
li.textContent = "Python"
```

### `replaceWith()`

Replaces an existing element.

```js
oldElement.replaceWith(newElement)
```

### `outerHTML`

Replaces the entire element with HTML.

```js
element.outerHTML = "<li>Python</li>"
```

### `remove()`

Removes an element.

```js
element.remove()
```

### `:nth-child()`

Selects an element based on its position.

```js
document.querySelector('li:nth-child(2)')
```

### `:last-child`

Selects the last child.

```js
document.querySelector('li:last-child')
```

---

## 🔑 Final Takeaways

### 🧩 Memory Trick

```text
createElement()  → CREATE
innerHTML        → CHANGE HTML
createTextNode() → CREATE TEXT
appendChild()    → ADD
textContent      → CHANGE TEXT
replaceWith()    → REPLACE
outerHTML        → REPLACE WITH HTML
remove()         → DELETE
```

### Main Flow

```text
CREATE
   ↓
ADD
   ↓
EDIT
   ↓
REPLACE
   ↓
REMOVE
```

These methods allow us to dynamically modify the HTML structure of a webpage using JavaScript.

---

## 📝 Practice

> Try these yourself without looking at the answers. Use examples different from the examples above.

### 1 Create a List Item

Create a new `<li>` using `document.createElement()`.

---

### 2 Add Text

Create a `<li>` and add the text `"Ruby"` using `textContent`.

---

### 3 Add Using Text Node

Create a `<li>` and add the text `"Kotlin"` using `createTextNode()` and `appendChild()`.

---

### 4 Add to an Existing List

Create a new `<li>` containing `"Swift"` and attach it to an existing `<ul>`.

---

### 5 Add Multiple Items

Create three new `<li>` elements containing different programming languages and add them to the same `<ul>`.

---

### 6 Select the Second Item

Use `querySelector()` to select the second `<li>` from a list.

---

### 7 Edit Text

Change the text of the second `<li>` to `"Rust"` using `textContent`.

---

### 8 Edit Using `innerHTML`

Select an existing `<li>` and change its content using `innerHTML`.

---

### 9 Replace an Element

Create a new `<li>` containing `"Dart"` and replace an existing `<li>` using `replaceWith()`.

---

### 10 Replace Using `outerHTML`

Select an existing `<li>` and replace it with:

```html
<li>Swift</li>
```

using `outerHTML`.

---

### 11 Remove the Last Item

Select the last `<li>` using `:last-child` and remove it.

---

### 12 Remove the First Item

Select the first `<li>` and remove it using `remove()`.

---

### 13 Replace the Third Item

Select the third `<li>` using `:nth-child()` and replace it with a newly created `<li>`.

---

### 14 Create and Replace

Create a new `<li>` using `createElement()`.

Add text using `textContent`.

Then replace the second `<li>` with the new element.

---

### 15 Build a Dynamic List

Create an empty `<ul>` using JavaScript.

Then create and add five `<li>` elements containing different programming languages.

---

### 16 Add Using a Function

Create a function:

```js
addLanguage(languageName)
```

The function should create a new `<li>`, add the language name, and attach it to an existing `<ul>`.

---

### 17 Edit Using a Function

Create a function that receives an element and changes its text to `"Updated"`.

---

### 18 Remove Using a Function

Create a function that receives an element and removes it from the DOM.

---

### 19 Replace Multiple Items

Create a list containing at least four items.

Replace the second and fourth items with completely new `<li>` elements.

---

### 20 Mini Challenge 🚀

> Build a dynamic programming-language list using JavaScript.

Your page should start with:

```text
Python
Java
C++
```

Then using JavaScript:

- Add `Kotlin`
- Add `Swift`
- Change `Java` to `JavaScript`
- Replace `C++` with `C#`
- Remove the last language

Use the DOM methods from this section:

- `createElement()`
- `textContent`
- `createTextNode()`
- `appendChild()`
- `replaceWith()`
- `outerHTML`
- `remove()`