# Scope in JavaScript

**Scope** determines where a variable can be accessed in our code.

There are mainly two important scopes in this section:

- **Global Scope**
- **Block / Local Scope**

---

# 1. 🌍 Global Scope

A variable declared outside a block or function is in the **global scope**.

```js
let a = 300

console.log(a)
```

Output:

```text
300
```

Because `a` is declared outside the `if` block, it can be accessed from places where the global scope is available.

---

# 2. 📦 Block Scope

Variables declared using `let` and `const` inside `{}` are limited to that block.

```js
let a = 300

if (true) {
    let a = 10
    const b = 20

    console.log(a)
}
```

Output:

```text
10
```

Here:

```text
Global scope:
a = 300

Block scope:
a = 10
b = 20
```

The `a` inside the block is a **different variable** from the `a` outside.

---

## ⚠️ Block Scope Example

```js
let a = 300

if (true) {
    let a = 10
    const b = 20
}

console.log(a)
```

Output:

```text
300
```

The `a` inside the block does not change the global `a`.

Also, `b` cannot be accessed outside the block because it was declared inside the block.

```js
console.log(b)
```

This results in an error because `b` is outside its scope.

---

# Nested Scope

A scope can exist inside another scope.

For example:

```js
function one(){
    const username = "micky"

    function two(){
        const website = "youtube"

        console.log(username)
    }

    two()
}
```

When we call:

```js
one()
```

Output:

```text
micky
```

Why can `two()` access `username`?

Because `username` belongs to the outer function, while `two()` is inside that function.

The inner scope can access variables from its outer scope.

---

## ❌ Outer Scope Cannot Access Inner Scope

```js
function one(){
    const username = "micky"

    function two(){
        const website = "youtube"
    }

    console.log(website)
}
```

This does not work.

`website` belongs to the scope of `two()`, so the outer function cannot directly access it.

Think of it like:

```text
one()
 └── username
 └── two()
      └── website
```

`two()` can access `username`, but `one()` cannot access `website`.

---

# Nested Block Scope

Nested scope can also happen with `if` blocks.

```js
if (true) {
    const username = "micky"

    if (username === "micky") {
        const website = "typenDraw"
        console.log(username + website)
    }
}
```

The inner `if` can access `username` because `username` belongs to its outer scope.

But `website` only exists inside the inner `if`.

---

# Interesting Question: Function Declaration vs Function Expression

Consider this:

```js
console.log(addone(5))

function addone(num){
    return num + 1
}
```

Output:

```text
6
```

The function can be called **before its declaration** in this case.

This works because a function declaration is available before its position in the code during the relevant initialization phase.

---

## Function Expression

Now look at this:

```js
addTwo(5)

const addTwo = function(num){
    return num + 2
}
```

This does **not** work.

Here, the function is assigned to a variable using `const`.

The variable cannot be accessed before its initialization.

So the safe way is:

```js
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))
```

Output:

```text
7
```

---

# `this` in JavaScript

`this` refers to the object associated with the current method call.

For example:

```js
const user = {
    username: "hitesh",
    total_Leetcode_problem_solved: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`)
    }
}
```

Calling:

```js
user.welcomeMessage()
```

Output:

```text
hitesh, welcome to our website
```

Here:

```js
this.username
```

refers to:

```js
user.username
```

because the method was called through the `user` object.

---

## 🔄 Changing the Object Value

```js
user.username = "micky"

user.welcomeMessage()
```

Now the output becomes:

```text
micky, welcome to our website
```

The same function uses the current value of `username` from the object.

---

# `this` Inside a Regular Function

For example:

```js
function chai(){
    let username = "micky"
    console.log(this.username)
}

chai()
```

Here, `this.username` does not refer to the local variable:

```js
let username = "micky"
```

A local variable called `username` and a property called `this.username` are not the same thing.

---

# ➡️ Arrow Functions

Arrow functions provide a shorter way to write functions.

Basic syntax:

```js
const functionName = () => {
    // code
}
```

Example:

```js
const chai = () => {
    let username = "micky"
    console.log(this)
}
```

Arrow functions do not have their own `this`.

Instead, they inherit `this` from their surrounding scope.

The exact value printed by `console.log(this)` can depend on the environment in which the code is running.

---

# 🔹 Explicit Return in Arrow Functions

An arrow function can use `{}` with an explicit `return`.

```js
const addTwo = (num1, num2) => {
    return num1 + num2
}
```

Calling:

```js
console.log(addTwo(3, 4))
```

Output:

```text
7
```

Because we use `{}`, we explicitly write:

```js
return
```

---

# 🔹 Implicit Return

For a simple expression, an arrow function can return the value without writing `return`.

```js
const addTwo = (num1, num2) => num1 + num2
```

Calling:

```js
console.log(addTwo(3, 4))
```

Output:

```text
7
```

This is called an **implicit return**.

We can also use parentheses:

```js
const addTwo = (num1, num2) => (num1 + num2)
```

This also returns:

```text
7
```

---

# 🔹 Returning an Object from an Arrow Function

There is an important syntax when returning an object implicitly.

This:

```js
const addTwo = (num1, num2) => ({ username: "micky" })
```

returns an object.

```js
console.log(addTwo(3, 4))
```

Output:

```text
{ username: "micky" }
```

The parentheses are important.

Without them:

```js
const addTwo = (num1, num2) => { username: "micky" }
```

JavaScript treats `{}` as the function body rather than an object being implicitly returned.

---

# 🔄 Arrow Functions in Loops and Arrays

Arrow functions are commonly used when working with arrays and loops, especially with methods such as:

```js
map()
filter()
forEach()
```

Example:

```js
const numbers = [1, 2, 3]

numbers.forEach((num) => {
    console.log(num)
})
```

Output:

```text
1
2
3
```

---

# ⚡ Immediately Invoked Function Expression (IIFE)

**IIFE** stands for:

> **Immediately Invoked Function Expression**

An IIFE is a function that is executed immediately after it is created.

Example:

```js
(function chai(){
    console.log("DB connected")
})();
```

Output:

```text
DB connected
```

---

# 🔹 IIFE Syntax

The basic structure is:

```js
(function(){
    // code
})();
```

There are two important parts:

```text
(function(){
    // function
})
```

This creates the function expression.

And:

```text
()
```

immediately invokes it.

So:

```text
(function(){ ... })()
           ↑        ↑
       function   execute
```

---

# 🎯 Why Use IIFE?

IIFEs can be used when we want some code to execute immediately and keep variables/functions inside their own scope.

For example:

```js
(function chai(){
    console.log("DB connected")
})();
```

The function executes immediately without needing a separate call such as:

```js
chai()
```

IIFEs were also commonly used to avoid unnecessary variables leaking into the surrounding/global scope.

---

# 🔹 Named IIFE

An IIFE can have a function name.

```js
(function chai(){
    console.log("DB connected")
})();
```

Here:

```text
chai
```

is the function name.

So this is called a **named IIFE**.

---

# 🔹 IIFE with Arrow Function

An IIFE can also be written using an arrow function.

```js
((name) => {
    console.log(`my name is ${name} and this is IIFE applied on arrow function`)
})("micky")
```

Output:

```text
my name is micky and this is IIFE applied on arrow function
```

Here:

```js
("micky")
```

passes `"micky"` as the argument to:

```js
name
```

---

# 🔹 Multiple IIFEs

When writing multiple IIFEs, the previous IIFE needs to be properly terminated.

For example:

```js
(function chai(){
    console.log("DB connected")
})();

((name) => {
    console.log(`Hello ${name}`)
})("micky");
```

Output:

```text
DB connected
Hello micky
```

Using the semicolon helps clearly separate the two expressions.

---

# 📝 Quick Revision

### Global Scope

Variables declared outside blocks/functions can belong to the global scope.

```js
let a = 300
```

### Block Scope

`let` and `const` declared inside `{}` are limited to that block.

```js
if (true) {
    let a = 10
}
```

### Nested Scope

An inner scope can access variables from its outer scope.

```text
Outer Scope
    ↓
Inner Scope
```

### Function Declaration

```js
function addOne(num){
    return num + 1
}
```

### Function Expression

```js
const addTwo = function(num){
    return num + 2
}
```

### `this`

Inside an object method, `this` can refer to the object on which the method was called.

### Arrow Function

```js
const add = (a, b) => a + b
```

### Explicit Return

```js
const add = (a, b) => {
    return a + b
}
```

### Implicit Return

```js
const add = (a, b) => a + b
```

### Returning an Object

```js
const user = () => ({ name: "micky" })
```

### IIFE

```js
(function(){
    console.log("Hello")
})();
```

An IIFE executes immediately after it is created.

---

# 🧪 Practice Questions

> Try these without copying the examples from the documentation.

### 1. 🌍 Scope

Create a global variable called `score` with a value of `100`.

Inside an `if` block, create another `score` with a different value.

Print both values from their appropriate scopes.

---

### 2. 📦 Block Scope

Create a variable using `const` inside an `if` block.

Try accessing it outside the block and observe what happens.

---

### 3. Nested Scope

Create an outer function called `parent()`.

Inside it, create an inner function called `child()`.

Create a variable inside `parent()` and access it from `child()`.

---

### 4. 🔥 Function Declaration

Create a function declaration called `subtract`.

Try calling it before the function declaration.

---

### 5. Function Expression

Create a function expression called `divide` using `const`.

Try calling it before and after its declaration.

Observe the difference.

---

### 6. `this`

Create an object containing:

```text
name
age
introduce()
```

Inside `introduce()`, use `this.name` and `this.age`.

---

### 7. Arrow Function

Convert this normal function into an arrow function:

```js
function multiply(a, b){
    return a * b
}
```

---

### 8. Implicit Return

Create an arrow function called `cube` that accepts a number and returns its cube using an implicit return.

---

### 9. Return an Object

Create an arrow function called `getUser` that implicitly returns an object containing:

```text
name
age
city
```

---

### 10. 🚀 IIFE

Create an IIFE that immediately prints:

```text
JavaScript started
```

---

### 11. IIFE with Parameter

Create an IIFE using an arrow function that accepts a `name` and prints:

```text
Welcome <name>
```

Pass your own name as the argument.

---

### 12. 🧠 Final Challenge

Create an object representing a `product`.

It should contain:

- `name`
- `price`
- `discount`
- a method called `finalPrice()`

Inside `finalPrice()`, use `this` to calculate and return the final price.

Then call the method and print the result.

---

# 🎯 Final Takeaway

The main concepts from this section are:

```text
Scope
   ↓
Block Scope
   ↓
Nested Scope
   ↓
Function Declaration vs Expression
   ↓
this
   ↓
Arrow Functions
   ↓
Explicit & Implicit Return
   ↓
Returning Objects
   ↓
IIFE
```

These concepts are especially important because they appear frequently when working with **modern JavaScript, arrays, callbacks, React, and larger applications**.