# JavaScript DOM — Events

DOM events allow JavaScript to respond when something happens on a webpage, such as a click, mouse movement, keyboard action, or form interaction.

For example:

```html
<button id="btn">Click Me</button>
```

JavaScript can listen for the click and perform an action.

---

## What Are Events?

An event is an action that happens on a webpage.

Examples:

- Clicking an element
- Moving the mouse
- Pressing a keyboard key
- Submitting a form
- Loading a page

JavaScript can listen for these events and execute code when they happen.

---

## Handling a Click Event

One simple way to handle a click is by using the `onclick` property.

### HTML

```html
<img id="owl" src="owl.jpg" alt="Owl">
```

### JavaScript

```js
document.getElementById("owl").onclick = function () {
    alert("Owl clicked")
}
```

When the image is clicked, the function runs.

---

## `addEventListener()`

A common and flexible way to handle events is `addEventListener()`.

```js
element.addEventListener(event, function, useCapture)
```

Example:

```js
document.getElementById("owl").addEventListener("click", function () {
    console.log("Owl clicked")
})
```

Here:

- `"click"` → event type
- `function () {}` → code that runs when the event occurs

---

## Event Object

When an event occurs, the event handler can receive an event object.

```js
document.getElementById("owl").addEventListener("click", function (e) {
    console.log(e)
})
```

The event object contains information about the event.

Some properties include:

```text
type
timestamp
defaultPrevented
target
currentTarget
clientX
clientY
screenX
screenY
altKey
ctrlKey
shiftKey
```

For example:

```js
document.getElementById("owl").addEventListener("click", function (e) {
    console.log(e.type)
})
```

Output:

```text
click
```

---

## `target`

The `target` property tells us which element originally triggered the event.

```js
document.getElementById("owl").addEventListener("click", function (e) {
    console.log(e.target)
})
```

We can also access properties of the target:

```js
console.log(e.target.id)
console.log(e.target.tagName)
```

For example:

```text
e.target
    ↓
<img id="owl">
```

---

## Event Propagation

When an event occurs, it travels through the DOM in different phases.

There are three phases:

```text
1. Capturing Phase
       ↓
    window
       ↓
    document
       ↓
    parent
       ↓
    target

2. Target Phase
       ↓
The actual element that triggered the event

3. Bubbling Phase
       ↓
    target
       ↓
    parent
       ↓
    document
       ↓
    window
```

For example:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

If the button is clicked, the event travels through the DOM toward the target and then back upward during bubbling.

---

## Event Capturing

During the **capturing phase**, the event travels from the outer elements toward the target.

```text
Parent
   ↓
Child
   ↓
Target
```

We can tell `addEventListener()` to use the capturing phase by passing `true` as the third argument.

```js
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent")
}, true)
```

Here:

```js
true
```

means the listener is registered for the capturing phase.

---

## Event Bubbling

During the **bubbling phase**, the event travels from the target toward its ancestors.

```text
Parent
   ↑
Child
   ↑
Target
```

By default, `addEventListener()` listens during the bubbling phase.

```js
element.addEventListener("click", function () {
    // code
})
```

This is equivalent to:

```js
element.addEventListener("click", function () {
    // code
}, false)
```

Here:

```js
false
```

means the listener is registered for the bubbling phase.

---

## Capturing vs Bubbling

Consider:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

The general event flow is:

```text
Capturing:
window → document → parent → button

Target:
button

Bubbling:
button → parent → document → window
```

A listener registered with `true` can run during capturing.

A listener registered with `false` runs during bubbling.

---

## `stopPropagation()`

Sometimes we don't want an event to continue propagating to other elements.(it means don't go up)

For this, we can use:

```js
e.stopPropagation()
```

Example:

```js
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked")
})

document.getElementById("child").addEventListener("click", function (e) {
    console.log("Child clicked")

    e.stopPropagation()
})
```

When the child is clicked, the event does not continue bubbling to the parent.

### Important

`stopPropagation()` stops the event from propagating to other elements along its propagation path.

It does not mean that only the current function can run.

---

## `preventDefault()`

Some HTML elements have a default browser action.

For example, clicking a link normally navigates to its URL.

HTML:

```html
<a href="https://google.com" id="google">Google</a>
```

JavaScript:

```js
document.getElementById("google").addEventListener("click", function (e) {
    e.preventDefault()

    console.log("Google clicked")
})
```

`preventDefault()` prevents the element's default browser behavior.

In this example, clicking the link will not navigate to Google.

---

## `preventDefault()` vs `stopPropagation()`

These methods do different things.

### `preventDefault()`

Stops the element's default browser action.

```js
e.preventDefault()
```

Example:

```text
Link
 ↓
Normally opens another page

preventDefault()
 ↓
Navigation is prevented
```

### `stopPropagation()`

Stops the event from continuing through its propagation path.

```js
e.stopPropagation()
```

Example:

```text
Child clicked
      ↓
Parent listener

stopPropagation()
      ↓
Event does not continue
```

---

## Event Delegation

Instead of adding an event listener to every child element, we can add one event listener to their parent.

HTML:

```html
<ul id="images">
    <li>
        <img id="photoshop" src="photo1.jpg" alt="Photoshop">
    </li>

    <li>
        <img id="japan" src="photo2.jpg" alt="Japan">
    </li>

    <li>
        <img id="river" src="photo3.jpg" alt="River">
    </li>
</ul>
```

Instead of:

```js
document.getElementById("photoshop").addEventListener(...)
document.getElementById("japan").addEventListener(...)
document.getElementById("river").addEventListener(...)
```

We can listen on the parent:

```js
document.querySelector("#images").addEventListener("click", function (e) {
    console.log(e.target)
})
```

Because of event bubbling, the event reaches the `ul`.

This technique is called **event delegation**.

---

## Checking the Clicked Element

We can use:

```js
e.target.tagName
```

Example:

```js
document.querySelector("#images").addEventListener("click", function (e) {
    console.log(e.target.tagName)
})
```

If an image is clicked:

```text
IMG
```

We can check it using:

```js
if (e.target.tagName === "IMG") {
    console.log("Image clicked")
}
```

---

## Getting the Clicked Image's ID

Since `e.target` refers to the element that triggered the event, we can access its ID.

```js
document.querySelector("#images").addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        console.log(e.target.id)
    }
})
```

For example, clicking:

```html
<img id="river">
```

gives:

```text
river
```

---

## Removing a Clicked Image

Suppose we want an image to disappear when it is clicked.

HTML:

```html
<ul id="images">
    <li>
        <img id="owl" src="owl.jpg" alt="Owl">
    </li>

    <li>
        <img id="river" src="river.jpg" alt="River">
    </li>
</ul>
```

JavaScript:

```js
document.querySelector("#images").addEventListener("click", function (e) {

    if (e.target.tagName === "IMG") {

        let removeit = e.target.parentNode

        removeit.remove()
    }

})
```

### How It Works

If the image is clicked:

```text
e.target
    ↓
   IMG
    ↓
parentNode
    ↓
   LI
    ↓
 remove()
    ↓
LI disappears
```

The image's parent is the `<li>`, so removing the `<li>` also removes the image inside it.

---

## `remove()`

An element can be removed from the DOM using:

```js
element.remove()
```

Example:

```js
const item = document.querySelector("li")

item.remove()
```

The selected `<li>` is removed from the page.

---

## `removeChild()`

Another approach is to remove a child through its parent.

```js
parent.removeChild(child)
```

Example:

```js
const li = document.querySelector("li")
const parent = li.parentNode

parent.removeChild(li)
```

Here:

```text
parent
   ↓
removeChild(li)
   ↓
li removed
```

For simple element removal, `remove()` is shorter.

---

## 🧠 Quick Revision

### Event

An action that happens on a webpage.

```text
click
keyboard action
mouse action
form action
```

### `addEventListener()`

Used to listen for events.

```js
element.addEventListener("click", function () {
    // code
})
```

### Event Object

Contains information about the event.

```js
function (e) {
    console.log(e)
}
```

### `e.target`

The element that originally triggered the event.

```js
console.log(e.target)
```

### `e.target.tagName`

Gets the target's tag name.

```js
console.log(e.target.tagName)
```

### `e.target.id`

Gets the target's ID.

```js
console.log(e.target.id)
```

### Event Capturing

```text
Parent → Target
```

### Event Bubbling

```text
Target → Parent
```

### `stopPropagation()`

Stops event propagation.

```js
e.stopPropagation()
```

### `preventDefault()`

Prevents the default browser action.

```js
e.preventDefault()
```

### Event Delegation

Attach one event listener to a parent and handle events from its children.

### `remove()`

Removes an element.

```js
element.remove()
```

### `removeChild()`

Removes a child through its parent.

```js
parent.removeChild(child)
```

---

## Final Takeaways

- Events allow JavaScript to react to user actions.
- `addEventListener()` is used to attach event handlers.
- The event object provides information about the event.
- `e.target` identifies the element that originally triggered the event.
- Event propagation has capturing, target, and bubbling phases.
- Capturing moves toward the target.
- Bubbling moves from the target toward its ancestors.
- `true` registers an event listener for capturing.
- `false` registers an event listener for bubbling.
- `stopPropagation()` stops event propagation.
- `preventDefault()` prevents the default browser behavior.
- Event delegation allows one parent listener to handle events from multiple children.
- `remove()` removes an element from the DOM.
- `removeChild()` removes a child through its parent.

---

## 📝 Practice

> Try these yourself without looking at the answers. Use examples different from the examples above.

### 1 Basic Click Event

Create a button and print `"Button clicked"` when it is clicked.

---

### 2 Alert on Click

Create a heading and show an alert when the heading is clicked.

---

### 3 Event Object

Create a button and print the event object when it is clicked.

---

### 4 Event Type

Print the event type when a paragraph is clicked.

---

### 5 Target Element

Create three buttons inside a `<div>`. Add a click listener to the `<div>` and print `e.target`.

---

### 6 Target ID

Create multiple elements with different IDs. Print the ID of whichever element is clicked.

---

### 7 Tag Name

Create a list containing different types of elements and print the clicked element's `tagName`.

---

### 8 Stop Propagation

Create a parent `<div>` and a button inside it. Add click events to both and use `stopPropagation()` on the button.

---

### 9 Prevent Default

Create a link to a website and prevent it from opening when clicked.

---

### 10 Event Bubbling

Create a nested structure with three elements. Add click listeners to all three and observe the order in which they run.

---

### 11 Event Capturing

Repeat the previous exercise but use `true` as the third argument of `addEventListener()`.

---

### 12 Image Click

Create a list of three images. Print the ID of the image when it is clicked.

---

### 13 Remove an Image

Create a list of images and remove the clicked image from the page.

---

### 14 Remove the Parent

When an image is clicked, remove its parent `<li>` instead of only removing the image.

---

### 15 Event Delegation

Create five buttons inside one `<div>`. Use only one event listener on the `<div>` to detect which button was clicked.

---

### 16 Check Tag Name

Create a container containing buttons, paragraphs, and images. Use `e.target.tagName` to perform an action only when an image is clicked.

---

### 17 Display Clicked ID

Create several cards with different IDs. When a card is clicked, display its ID inside another element.

---

### 18 Prevent Link Navigation

Create three links and use event delegation on their parent. Prevent navigation when any link is clicked.

---

### 19 Remove List Items

Create a list of five items. When an item is clicked, remove that item from the DOM.

---

### 20 Mini Challenge

Create an image gallery where:

- Multiple images are displayed.
- One event listener is attached to the gallery.
- Clicking an image removes its `<li>`.
- The clicked image's ID is printed before removing it.
- Clicking other elements should not remove anything.

---