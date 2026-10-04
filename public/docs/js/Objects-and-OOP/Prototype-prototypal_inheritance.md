# 🧬 JavaScript Prototypes & Prototypal Inheritance

JavaScript uses **prototypes** to allow objects to share properties and methods.

In this section, we will look at:
- What is Prototype
- Adding methods to `Object.prototype`
- Adding methods to `Array.prototype`
- Prototypal inheritance
- `__proto__`
- `Object.setPrototypeOf()`
- Adding custom methods to `String.prototype`

---

### 🧬 What is a Prototype?

A **prototype** is an object that another object can inherit properties and methods from.

When JavaScript cannot find a property or method directly on an object, it looks through the object's **prototype chain**.

```text
Object
  ↓
Prototype
  ↓
Inherited properties/methods
```

For example:

```js
Array.prototype
```

contains methods that arrays can use.

**Simple idea:**

> **Prototype = a place from which objects can inherit properties and methods.**

## Adding a Method to `Object.prototype`

JavaScript objects can access properties and methods through the **prototype chain**.

We can add a custom method directly to `Object.prototype`:

```js
Object.prototype.micky = function(){
    console.log("micky is present in all objects")
}
```

Now objects can access this method:

```js
heroPower.micky()
```

Because arrays are also objects, arrays can access it too:

```js
myHeros.micky()
```

### Example

```js
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.micky = function(){
    console.log("micky is present in all objects")
}

heroPower.micky()
myHeros.micky()
```

Both can access `micky()` through the prototype chain.

---

## Adding a Method to `Array.prototype`

We can also add a method specifically to arrays:

```js
Array.prototype.heymicky = function(){
    console.log("micky says hello")
}
```

Now arrays can use this method:

```js
myHeros.heymicky()
```

But a normal object cannot:

```js
heroPower.heymicky()
```

### Why?

The method was added to:

```text
Array.prototype
```

so it is available to arrays through their prototype chain.

```text
myHeros
   ↓
Array.prototype
   ↓
Object.prototype
```

But:

```text
heroPower
   ↓
Object.prototype
```

There is no `Array.prototype` in its chain.

---

## `Object.prototype` vs `Array.prototype`

```text
Object.prototype
        ↑
    Array.prototype
        ↑
      Array
```

An array can access methods from `Array.prototype` as well as methods inherited through `Object.prototype`.

For example:

```js
myHeros.micky()
myHeros.heymicky()
```

But `heroPower` can only access the method added to `Object.prototype`:

```js
heroPower.micky()
```

---

## Prototypal Inheritance

Objects can inherit properties and methods from other objects.

For example:

```js
const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
```

We can make `Teacher` inherit from `user`:

```js
Teacher.__proto__ = user
```

Now `Teacher` can access properties from `user`:

```js
console.log(Teacher.name)
console.log(Teacher.email)
```

The relationship becomes:

```text
Teacher
   ↓
 user
```

If JavaScript cannot find a property on `Teacher`, it can look through its prototype.

---

## `__proto__`

`__proto__` can be used to access or set an object's prototype.

For example:

```js
Teacher.__proto__ = user
```

This makes `user` the prototype of `Teacher`.

So:

```js
Teacher.name
```

can find `name` through the prototype chain.

> `__proto__` is an older style of working with prototypes. Modern code generally prefers standard APIs such as `Object.setPrototypeOf()` when explicitly setting a prototype.

---

## `Object.setPrototypeOf()`

A modern way to set an object's prototype is:

```js
Object.setPrototypeOf(TeachingSupport, Teacher)
```

Example:

```js
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

Object.setPrototypeOf(TeachingSupport, Teacher)
```

Now:

```text
TeachingSupport
       ↓
    Teacher
```

So `TeachingSupport` can access:

```js
TeachingSupport.isAvailable
TeachingSupport.makeVideo
```

The first property comes from itself, while `makeVideo` comes through the prototype chain.

---

## Prototype Chain

The prototype chain is used when JavaScript searches for a property or method.

For example:

```js
TeachingSupport.makeVideo
```

JavaScript first checks:

```text
TeachingSupport
```

If it doesn't find `makeVideo`, it checks its prototype:

```text
Teacher
```

If it finds it there, that value is returned.

Conceptually:

```text
TeachingSupport
      ↓
    Teacher
      ↓
   Object.prototype
      ↓
      null
```

---

## Creating a Custom String Method

We can also add a method to `String.prototype`.

Our goal is to create a method that gives the **true length of a string after removing extra whitespace**.

```js
let mychannel = "CodeStarterYt     "
```

Instead of writing:

```js
mychannel.trim().length
```

we can create our own method:

```js
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
```

Now the method can be called directly on a string:

```js
mychannel.truelength()
```

It can also be called on other strings:

```js
"micky ".truelength()
"iceTea".truelength()
```

### How Does `this` Work Here?

When:

```js
mychannel.truelength()
```

is called, `this` refers to the string on which the method was called.

So:

```text
mychannel.truelength()
        ↓
      this
        ↓
"CodeStarterYt     "
```

And:

```js
"micky ".truelength()
```

means:

```text
this → "micky "
```

---

## Complete Example

```js
let mychannel = "CodeStarterYt     "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

mychannel.truelength()

"micky ".truelength()
"iceTea".truelength()
```

The same prototype method can therefore work with different strings.

---

## 🔟 Prototype Chain Example

Different types have different prototypes.

For example:

```text
"hello"
   ↓
String.prototype
   ↓
Object.prototype
   ↓
null
```

And:

```text
[]
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

This is why an array can access both:

```js
myHeros.heymicky()
myHeros.micky()
```

while a string can access:

```js
"micky".truelength()
```

after the method has been added to `String.prototype`.

---

## 🧠 Quick Revision

### `Object.prototype`

```js
Object.prototype.micky = function(){
    console.log("micky is present in all objects")
}
```

Adds a method that can be reached through objects' prototype chains.

### `Array.prototype`

```js
Array.prototype.heymicky = function(){
    console.log("micky says hello")
}
```

Adds a method specifically to arrays.

### `String.prototype`

```js
String.prototype.truelength = function(){
    console.log(this.trim().length)
}
```

Adds a custom method that strings can access.

### `__proto__`

Used to work with an object's prototype:

```js
Teacher.__proto__ = user
```

### `Object.setPrototypeOf()`

Used to set an object's prototype:

```js
Object.setPrototypeOf(TeachingSupport, Teacher)
```

---

## Final Key Takeaways

- JavaScript uses **prototypes** for inheritance and property lookup.
- `Object.prototype` is part of the prototype chain of ordinary objects and arrays.
- `Array.prototype` contains array-specific methods.
- `String.prototype` contains string-specific methods.
- You can add custom methods to prototypes.
- `__proto__` can be used to work with an object's prototype.
- `Object.setPrototypeOf()` can explicitly set an object's prototype.
- When a property isn't found on an object, JavaScript searches its prototype chain.
- `this` inside a method refers to the object on which the method is called.
- Prototype methods can be shared by multiple objects.

### Memory Trick

```text
Object.prototype → Object-level methods
Array.prototype  → Array methods
String.prototype → String methods

Prototype → Shared behavior
Prototype chain → Property/method lookup
this → Current calling object
```

---

## 📝 Practice

### 1 Add a Method to `Object.prototype`

Create a method called `sayHello()` on `Object.prototype`.

Test it with both an object and an array.

---

### 2 Add a Method to `Array.prototype`

Create a method called `showFirst()` that prints the first element of an array.

---

### 3 Test Prototype Access

Create an array and check whether it can access a method you added to `Object.prototype`.

---

### 4 Test Array-Specific Methods

Add a method to `Array.prototype` and try calling it on a normal object.

Observe what happens.

---

### 5 Create a Custom String Method

Add a method called `reverseText()` to `String.prototype`.

It should print the string in reverse order.

---

### 6 Use `this` With a String

Create a `String.prototype` method that prints:

```text
String: ...
Length: ...
```

Use `this` to access the current string.

---

### 7 Prototype Inheritance

Create:

```js
const person = {
    canWalk: true
}

const student = {
    canStudy: true
}
```

Make `student` inherit from `person`.

Test both properties.

---

### 8 Use `Object.setPrototypeOf()`

Create two objects and connect them using:

```js
Object.setPrototypeOf()
```

Then access a property from the prototype object.

---

### 9 Trace the Prototype Chain

Create an array and explain the relationship between:

```text
array
Array.prototype
Object.prototype
null
```

---

### 10 Mini Project — Custom String Utilities

Create three custom methods on `String.prototype`:

```text
reverseText()
firstCharacter()
lastCharacter()
```

Test them with at least three different strings.

---

## 🚀 Important Note

Adding methods directly to built-in prototypes like:

```js
Object.prototype
Array.prototype
String.prototype
```

is useful for **learning how prototypes work**, but it is generally avoided in real-world application code because it can unexpectedly affect other code.

