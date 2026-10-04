# ☎️ JavaScript `call()` & Sharing `this` Between Functions

Sometimes one function needs to use another function's logic while keeping the values in the **current object's context**.

This is where `call()` is useful.

---

## 1️⃣ The Problem

Consider this function:

```js
function setUsername(username){
    this.username = username
    console.log("called")
}
```

Now we want to use it inside another constructor:

```js
function createUser(username, email, password){
    setUsername(username)

    this.email = email
    this.password = password
}
```

Then:

```js
const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai)
```

The problem is that `setUsername()` is called as a **normal function**.

Its `this` does not refer to the new `chai` object.

So:

```js
this.username = username
```

doesn't store `username` on the `chai` object.

---

## 2️⃣ Using `call()`

We can use `call()` to explicitly provide the `this` value:

```js
setUsername.call(this, username)
```

Here:

```text
setUsername
     ↓
   call()
     ↓
this → current createUser object
```

So the complete constructor becomes:

```js
function setUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai)
```

Now the object contains:

```text
username → "chai"
email    → "chai@fb.com"
password → "123"
```

---

## 3️⃣ How `call()` Works

The basic syntax is:

```js
functionName.call(thisValue, argument1, argument2, ...)
```

For example:

```js
setUsername.call(this, username)
```

means:

> Call `setUsername()` and make its `this` refer to the current `this`.

So inside:

```js
function setUsername(username){
    this.username = username
}
```

`this` now refers to the object being created by `createUser`.

---

## 4️⃣ Why Just Calling the Function Doesn't Work

This:

```js
setUsername(username)
```

only calls the function.

It does **not** tell the function to use the `createUser` object's `this`.

But this:

```js
setUsername.call(this, username)
```

does two things:

```text
Call setUsername
       +
Give it the current this
```

That's why the value is stored on the correct object.

---

## 5️⃣ Complete Flow

```js
function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
```

The flow is:

```text
new createUser(...)
        ↓
createUser's this → new object
        ↓
setUsername.call(this, username)
        ↓
setUsername's this → same new object
        ↓
this.username = username
        ↓
username stored in the new object
```

---

## 🧠 Quick Revision

```js
setUsername.call(this, username)
```

- `call()` immediately invokes the function.
- The first argument specifies what `this` should refer to.
- The remaining arguments are passed to the function.
- Passing `this` allows the called function to work with the same object context.

### Memory Trick

> **`call()` → Call the function + give it the `this` context.**

### 📝 Practice

### 1 Create a User Constructor
Create a `setDetails()` function that sets `name` using `this`.

Then create a `User` constructor with `name` and `age`. Use:

```js
setDetails.call(this, name)
```

Create two users and print them.

---

### 2 Share a Function Using `call()`
Create:

```js
function setBrand(brand){
    this.brand = brand
}
```

Create a `Laptop` constructor with `brand` and `price`.

Use `call()` to set the brand, then print the complete object.

---

### 3 Understand the `this` Context
Create a function:

```js
function setScore(score){
    this.score = score
}
```

Create a `Player` constructor with `name` and `score`.

Use `setScore.call(this, score)` and verify that the score is stored inside the new `Player` object.