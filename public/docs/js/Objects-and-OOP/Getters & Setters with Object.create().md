# 🧬 JavaScript Getters & Setters with `Object.create()`

Getters and setters can also be used with **prototype-based objects**.

In this example, we create an object containing the getter and setter, and then use:

```js
Object.create()
```

to create another object that inherits from it.

---

## Creating the Base Object

```js
const user = {
    _email: "h@hc.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};
```

The `user` object contains:

```text
_email
_password
email getter
email setter
```

The getter:

```js
get email() {
    return this._email.toUpperCase();
}
```

runs when we access:

```js
user.email
```

---

## Using `Object.create()`

Now we create another object:

```js
const tea = Object.create(user);
```

`Object.create(user)` creates a new object whose **prototype is `user`**.

So:

```text
tea
 ↓
user
```

If JavaScript cannot find a property directly on `tea`, it looks at its prototype.

---

## Accessing the Getter

Now:

```js
console.log(tea.email);
```

There is no `email` property directly on `tea`.

JavaScript therefore looks at its prototype:

```text
tea
 ↓
user
 ↓
email getter found
```

The getter runs:

```js
get email() {
    return this._email.toUpperCase();
}
```

The important part is that `this` refers to **`tea`**, because `tea` is the object through which the property was accessed.

However, since `tea` does not have its own `_email`, the lookup continues through its prototype and finds:

```js
user._email
```

So the output is:

```text
H@HC.COM
```

---

## Understanding the Prototype Chain

The structure is:

```text
tea
 ↓
user
 ↓
Object.prototype
 ↓
null
```

When we write:

```js
tea.email
```

JavaScript searches:

```text
tea
 ↓
email not found
 ↓
user
 ↓
email getter found
 ↓
getter runs
```

This is the **prototype chain** in action.

---

## What Happens to `this`?

This is an important part.

The getter belongs to `user`:

```js
get email() {
    return this._email.toUpperCase();
}
```

But when we access:

```js
tea.email
```

the getter runs with:

```js
this → tea
```

So:

```js
this._email
```

first looks for `_email` on `tea`.

If it isn't there, JavaScript searches the prototype:

```text
tea._email
   ↓
not found
   ↓
user._email
   ↓
"h@hc.com"
```

Then:

```js
.toUpperCase()
```

produces:

```text
H@HC.COM
```

---

## Setter With `Object.create()`

We can also use the setter:

```js
tea.email = "tea@chai.com";
```

This finds the setter through the prototype:

```text
tea
 ↓
user
 ↓
email setter
```

The setter runs with:

```js
this → tea
```

So:

```js
set email(value) {
    this._email = value;
}
```

creates/updates `_email` on **`tea`**.

It does not change `user._email`.

So after:

```js
tea.email = "tea@chai.com";
```

we have:

```text
user._email → "h@hc.com"

tea._email  → "tea@chai.com"
```

This is an important example of how `this` works with prototype inheritance.

---

## Complete Example

```js
const user = {
    _email: "h@hc.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
};

const tea = Object.create(user);

console.log(tea.email);

tea.email = "tea@chai.com";

console.log(tea.email);
console.log(user.email);
```

Output:

```text
H@HC.COM
TEA@CHAI.COM
H@HC.COM
```

The original `user` value remains unchanged because the setter stores the new value on `tea`.

---

## 🧠 Quick Revision

- `Object.create(user)` creates a new object whose prototype is `user`.
- `tea` inherits properties and methods from `user`.
- If a property isn't found on `tea`, JavaScript searches `user`.
- Getters and setters can also be inherited through the prototype chain.
- When `tea.email` is accessed, the getter runs with `this` referring to `tea`.
- A setter accessed through `tea` stores the value on `tea` when it uses `this._email`.

---

## 🔑 Key Takeaways

```text
const tea = Object.create(user)
            ↓
       tea's prototype
            ↓
           user
```

When:

```js
tea.email
```

is used:

```text
tea
 ↓
email not found
 ↓
user
 ↓
getter found
 ↓
getter runs with this = tea
```

### Memory Trick

> `Object.create(user)` → **Create an object that inherits from `user`.**

> Prototype getter → **The getter can be inherited, but `this` refers to the object that accessed it.**

---

## 📝 Practice

### 1 Create a Product Prototype

Create an object `product` containing:

```text
_name
_price
```

Add a getter for `name` that returns the name in uppercase.

Use `Object.create(product)` to create another object and access its name.

---

### 2 Create a Setter

Create a `user` object with `_username`.

Add a getter and setter for `username`.

Create another object using:

```js
Object.create(user)
```

Change the username through the setter and check whether the original `user` changed.

---

### 3 Understand `this`

Create a base object with:

```text
_name: "Laptop"
```

Create another object using `Object.create()`.

Add a getter for `name`.

Check what `this` refers to when you access:

```js
child.name
```

---

### 4 Final Challenge

Create a `person` object containing:

```text
_name
_age
```

Create getters and setters for both properties.

Create two separate objects using:

```js
Object.create(person)
```

Give each object different values and verify that changing one does not change the other.