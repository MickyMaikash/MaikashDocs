# JavaScript `bind()` — Preserving `this` Context

When a method is passed as a callback, the value of `this` can change depending on **how the function is called**.

`bind()` is used when we want to permanently bind a specific `this` value to a function.

---

## The Problem With `this`

Consider this class:

```js
class React {
    constructor() {
        this.library = "React";
        this.server = "https://localhost:300";

        document
            .querySelector('button')
            .addEventListener('click', this.handleClick);
    }

    handleClick() {
        console.log("button clicked");
        console.log(this.server);
    }
}
```

Here, `handleClick` is passed directly to the event listener:

```js
this.handleClick
```

When the button is clicked, the event listener calls `handleClick()`.

Because it is being called as an event listener, `this` inside `handleClick()` refers to the **button element**, not the `React` class instance.

So:

```js
this.server
```

looks for `server` on the button instead of the `React` object.

But `server` belongs to the `React` instance:

```js
this.server = "https://localhost:300";
```

So we need to preserve the **React instance's `this` context**.

---

## Using `bind()`

We can solve this by using:

```js
this.handleClick.bind(this)
```

Complete code:

```js
class React {
    constructor() {
        this.library = "React";
        this.server = "https://localhost:300";

        document
            .querySelector('button')
            .addEventListener(
                'click',
                this.handleClick.bind(this)
            );
    }

    handleClick() {
        console.log("button clicked");
        console.log(this.server);
    }
}

const app = new React();
```

Now when the button is clicked:

```text
button clicked
https://localhost:300
```

The `this` inside `handleClick()` refers to the **React instance**.

---

## What Does `bind()` Do?

`bind()` creates a **new function** with a specific `this` value attached to it.

```js
this.handleClick.bind(this)
```

Here:

```text
this.handleClick
       ↓
    function
       ↓
   .bind(this)
       ↓
new function with React instance as `this`
```

The `this` passed to `bind()` becomes the `this` value used when the new function is called.

---

## Understanding the Two `this` Values

Inside the constructor:

```js
constructor() {
    this.library = "React";
}
```

Here, `this` refers to the current **React instance**.

When we write:

```js
this.handleClick.bind(this)
```

there are two uses of `this`.

The first:

```js
this.handleClick
```

gets the `handleClick` method from the current React instance.

The second:

```js
.bind(this)
```

passes that same React instance as the `this` value for the new function.

So we are essentially saying:

> When `handleClick` runs later, keep `this` pointing to this React object.

---

## Why Is `bind()` Useful With Event Listeners?

Event listeners call the callback when the event occurs.

For example:

```js
button.addEventListener('click', callback);
```

When the button is clicked, the event listener calls the callback.

If the method needs access to properties stored on the class instance:

```js
this.library
this.server
```

we need to make sure `this` still refers to the correct object.

Without `bind()`:

```text
Button clicked
      ↓
handleClick()
      ↓
this → button ❌
      ↓
this.server → not the React instance's server
```

With `bind()`:

```text
Button clicked
      ↓
handleClick()
      ↓
this → React instance ✅
      ↓
this.server → React instance's server
```

That's why:

```js
this.handleClick.bind(this)
```

is useful here.

---

## Complete Example

```js
class React {
    constructor() {
        this.library = "React";
        this.server = "https://localhost:300";

        document
            .querySelector('button')
            .addEventListener(
                'click',
                this.handleClick.bind(this)
            );
    }

    handleClick() {
        console.log("button clicked");
        console.log(this.server);
    }
}

const app = new React();
```

The flow is:

```text
new React()
     ↓
constructor runs
     ↓
this = React instance
     ↓
handleClick.bind(this)
     ↓
new bound function
     ↓
button clicked
     ↓
handleClick()
     ↓
this = React instance
     ↓
this.server
```

---

## `bind()` Does Not Immediately Run the Function

This is important.

```js
this.handleClick.bind(this)
```

does **not** immediately execute `handleClick()`.

It creates and returns a new bound function.

That's why it can be passed to:

```js
addEventListener()
```

The function will run later when the button is clicked.

Compare:

```js
this.handleClick()
```

This **immediately calls** the function.

While:

```js
this.handleClick.bind(this)
```

creates a new function with the desired `this` context.

---

## 🧠 Quick Revision

- `this` can depend on how a function is called.
- When a normal event listener calls a method, `this` refers to the element the listener is attached to.
- This can cause the class instance's `this` context to be lost.
- `bind()` creates a new function with a specific `this` value.
- `this.handleClick.bind(this)` binds the current class instance to `handleClick`.
- The bound function can then be passed to `addEventListener()`.
- `bind()` does not immediately execute the function.

---

## Final Takeaways

```text
this.handleClick
       ↓
method/function
       ↓
.bind(this)
       ↓
new bound function
       ↓
this → React instance
```

**Memory trick:**

> `bind()` → **bind a function to a specific `this` context**

---

## 📝 Practice

### 1 Bind a Class Method to a Button

Create a class `Counter` with:

```text
count
```

Add a button click listener that calls a `showCount()` method.

Use `bind()` so that `this.count` refers to the class instance.

---

### 2 Understand the Context

Create a class `User` with:

```text
username
email
```

Create a `showUser()` method.

Pass it to a button's `click` event using `bind()` and print both properties.

---

### 3 Why Is `bind()` Needed?

Create a class `Profile` with:

```text
name
website
```

Pass its `showProfile()` method directly to `addEventListener()`.

Observe what happens.

Then use:

```js
showProfile.bind(this)
```

and compare the result.

---

### 4 Create a Button Controller

Create a class `ButtonController` with:

```text
buttonName
```

Attach a click event to a button.

When clicked, print:

```text
Button: <buttonName>
```

Use `bind()` to preserve the class instance.

---

### 5 Final Challenge

Create a class `App` with:

```text
appName
version
```

Add a button click listener.

When clicked, display:

```text
App: <appName>
Version: <version>
```

Use `bind()` to make sure the event handler can access both properties through `this`.