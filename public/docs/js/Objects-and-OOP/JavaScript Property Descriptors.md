# JavaScript Property Descriptors — `Object.getOwnPropertyDescriptor()` & `Object.defineProperty()`

JavaScript objects have **property descriptors** that control how their properties behave.

We can inspect these descriptors using:

```js
Object.getOwnPropertyDescriptor()
```

and modify them using:

```js
Object.defineProperty()
```

---

## Getting a Property Descriptor

JavaScript provides:

```js
Object.getOwnPropertyDescriptor(object, property)
```

It returns information about a specific property.

Example:

```js
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Descriptor);
```

For example, the descriptor for `Math.PI` contains information such as:

```text
value
writable
enumerable
configurable
```

---

## Understanding Property Descriptors

A property descriptor describes how a property behaves.

### `value`

The actual value stored in the property.

```js
const chai = {
    name: "ginger chai"
};
```

The value of `name` is:

```text
"ginger chai"
```

---

### `writable`

Determines whether the property's value can be changed.

For example:

```js
{
    writable: false
}
```

means the value cannot normally be changed through assignment.

---

### `enumerable`

Determines whether the property appears during enumeration methods such as:

```js
Object.entries()
Object.keys()
```

For example:

```js
{
    enumerable: false
}
```

means the property is hidden from normal enumeration.

---

### `configurable`

Determines whether the property's descriptor can be changed or the property can be deleted.

```js
{
    configurable: false
}
```

prevents further configuration of the property.

---

## 3️⃣ Checking `Math.PI`

We can inspect the descriptor of `Math.PI`:

```js
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Descriptor);
```
### Output
```txt
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
```

We can also see the value directly:

```js
console.log(Math.PI);
```
### Output
```txt
3.141592653589793
```

Trying to change it:

```js
Math.PI = 4;

console.log(Math.PI);
```
### Output
```txt
3.141592653589793
```

does not change the value because `Math.PI` is not writable.

---

## Creating Our Own Object

Consider this object:

```js
const chai = {
    name: "ginger chai",
    price: 250,
    isAvaialbe: true,

    orderchai: function() {
        console.log("chai nhi bani");
    }
};
```

We can inspect the descriptor of the `name` property:

```js
console.log(
    Object.getOwnPropertyDescriptor(chai, "name")
);
```
### Output
```txt
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
```
This shows information about how `name` behaves.

---

## Changing a Property Descriptor

We can use:

```js
Object.defineProperty()
```

to change the descriptor of an existing property.

Syntax:

```js
Object.defineProperty(object, property, descriptor)
```

Example:

```js
Object.defineProperty(chai, "name", {
    enumerable: true
});
```

Now we can check the descriptor again:

```js
console.log(
    Object.getOwnPropertyDescriptor(chai, "name")
);
```

Only the properties we specify are changed; the other descriptor settings remain as they were.

---

## `writable` Example

We can make a property non-writable:

```js
Object.defineProperty(chai, "name", {
    writable: false
});
```

Now:

```js
chai.name = "masala chai";
```

will not normally change the value.

The property remains:

```text
ginger chai
```

---

## `enumerable` and `Object.entries()`

`enumerable` becomes especially useful when working with:

```js
Object.entries()
```

For example:

```js
Object.defineProperty(chai, "name", {
    enumerable: false
});
```

Now `name` will not appear in:

```js
Object.entries(chai)
```

But the property still exists:

```js
console.log(chai.name);
```

It simply isn't included during enumeration.

---

## Using `Object.entries()` With Descriptors

Our object contains a function:

```js
orderchai: function() {
    console.log("chai nhi bani");
}
```

If we loop through all entries:

```js
for (let [key, value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
}
```

the function itself would also be included.

We can check the type and skip functions:

```js
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}:${value}`);
    }
}
```

Output:

```text
name:ginger chai
price:250
isAvaialbe:true
```

The function is skipped because:

```js
typeof value === "function"
```

---

## Complete Example

```js
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(Descriptor);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvaialbe: true,

    orderchai: function() {
        console.log("chai nhi bani");
    }
};

console.log(
    Object.getOwnPropertyDescriptor(chai, "name")
);

Object.defineProperty(chai, "name", {
    enumerable: true
});

console.log(
    Object.getOwnPropertyDescriptor(chai, "name")
);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}:${value}`);
    }
}
```

---

## 🧠 Quick Revision

- `Object.getOwnPropertyDescriptor()` → checks how a property behaves.
- `Object.defineProperty()` → defines or changes property descriptor settings.
- `value` → actual value of the property.
- `writable` → whether the value can be changed.
- `enumerable` → whether the property appears during enumeration.
- `configurable` → whether the property's configuration can be changed.
- `Object.entries()` → returns enumerable own key-value pairs.
- Functions can be skipped using:

```js
typeof value !== "function"
```

---

## Final Takeaways

```text
Object.getOwnPropertyDescriptor()
            ↓
      inspect property
            ↓
 value / writable / enumerable / configurable
```

```text
Object.defineProperty()
            ↓
 modify property behavior
            ↓
 writable / enumerable / configurable
```

**Memory trick:**

> `getOwnPropertyDescriptor()` → **Check the property rules**

> `defineProperty()` → **Change the property rules**

---

## 📝 Practice

### 1 Check a Property Descriptor

Create an object with:

```text
title
price
available
```

Use `Object.getOwnPropertyDescriptor()` to inspect the `title` property.

---

### 2 Make a Property Read-Only

Create an object containing:

```text
username
```

Use `Object.defineProperty()` to make `username` non-writable.

Try changing it and check the result.

---

### 3 Hide a Property From Enumeration

Create an object with:

```text
name
email
password
```

Make `password` non-enumerable.

Then use:

```js
Object.keys()
```

and verify that `password` is not included.

---

### 4 Inspect `Math.PI`

Use:

```js
Object.getOwnPropertyDescriptor(Math, "PI")
```

Check the values of:

```text
writable
enumerable
configurable
```

Then try changing `Math.PI`.

---

### 5 Skip Functions During Enumeration

Create an object containing:

```text
name
age
greet()
```

Use `Object.entries()` to print only the non-function properties.

---

### 6 Property Rules Challenge

Create an object with a `score` property.

Use `Object.defineProperty()` so that:

- `score` cannot be changed
- `score` still appears in `Object.entries()`

Then verify both behaviors.