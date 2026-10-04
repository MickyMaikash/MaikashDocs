# JavaScript Closures & Lexical Scoping

Closures are closely related to **lexical scoping**.

The main idea is that an inner function can access variables from its outer function, and when that inner function is returned, it can still remember those variables.

---

## Lexical Scoping

Lexical scoping means that a function can access variables based on **where the function is written in the code**.

Consider:

```js
function outer(){
    let username = "micky"

    function inner(){
        let secret = "my1234"

        console.log("inner", username)
    }

    inner()
}

outer()
```

Here, `inner()` is written inside `outer()`.

Because of this, `inner()` can access:

```js
username
```

from `outer()`.

### Scope Relationship

```text
outer()
│
├── username
│
└── inner()
     │
     └── can access username
```

The inner function can access variables from its outer scope.

---

## Inner Functions Can Access Outer Variables

Example:

```js
function outer(){
    let username = "micky"

    function inner(){
        console.log(username)
    }

    inner()
}

outer()
```

Output:

```text
micky
```

`inner()` does not have its own `username`, so JavaScript looks in the surrounding scope and finds it inside `outer()`.

---

## Outer Functions Cannot Access Inner Variables

The opposite does not work.

```js
function outer(){
    let username = "micky"

    function inner(){
        let secret = "my1234"
    }

    console.log(secret)
}

outer()
```

This causes an error because `secret` belongs to `inner()`.

```text
outer
│
├── username ✅
│
└── inner
     └── secret
```

`outer()` cannot access variables created inside `inner()`.

---

## Scope Chain

JavaScript searches for variables through the surrounding scopes.

```js
function outer(){
    let username = "micky"

    function inner(){
        console.log(username)
    }

    inner()
}

outer()
```

When JavaScript sees:

```js
console.log(username)
```

inside `inner()`, it searches:

```text
inner scope
      ↓
outer scope
      ↓
global scope
```

If the variable is found, its value is used.

---

## Multiple Inner Functions

Multiple functions inside the same outer function can access variables from that outer function.

```js
function outer(){
    let username = "micky"

    function inner(){
        console.log("inner", username)
    }

    function innerTwo(){
        console.log("innerTwo", username)
    }

    inner()
    innerTwo()
}

outer()
```

Output:

```text
inner micky
innerTwo micky
```

Both functions can access `username` because they are written inside `outer()`.

---

## Variables Are Not Shared Between Sibling Functions

Consider:

```js
function outer(){
    let username = "micky"

    function inner(){
        let secret = "my1234"
        console.log(username)
    }

    function innerTwo(){
        console.log(username)
        console.log(secret)
    }

    inner()
    innerTwo()
}

outer()
```

`innerTwo()` cannot access `secret`.

Why?

Because `secret` belongs specifically to `inner()`.

```text
outer
│
├── username
│
├── inner
│    └── secret
│
└── innerTwo
     └── cannot access secret
```

---

## What Is a Closure?

A **closure** happens when a function remembers and can access variables from its surrounding lexical scope even after the outer function has finished executing.

Example:

```js
function makeFunc(){
    const name = "Mozilla"

    function displayname(){
        console.log(name)
    }

    return displayname
}

const myfunc = makeFunc()

myfunc()
```

Output:

```text
Mozilla
```

At first, this can look confusing.

`makeFunc()` has already finished executing:

```js
const myfunc = makeFunc()
```

But `myfunc()` can still access:

```js
name
```

Why?

Because `displayname()` forms a **closure** over its surrounding lexical scope.

---

## Returning an Inner Function

The important part is:

```js
return displayname
```

We are returning the **function itself**, not executing it.

```js
return displayname
```

not:

```js
return displayname()
```

So:

```js
const myfunc = makeFunc()
```

means `myfunc` now refers to the returned `displayname` function.

Then:

```js
myfunc()
```

executes it.

---

## Closure Remembers the Lexical Scope

This is the important idea from the example:

```js
function makeFunc(){
    const name = "Mozilla"

    function displayname(){
        console.log(name)
    }

    return displayname
}
```

When `displayname` is returned, it does not lose access to `name`.

```text
makeFunc()
│
├── name = "Mozilla"
│
└── displayname()
       │
       └── remembers name
              ↓
         "Mozilla"
```

> A closure allows a function to remember variables from its lexical scope.

---

## Closure Example With Event Handlers

Closures become especially useful with event handlers.

Example:

```js
function clickhandler(color) {

    return function (){
        document.body.style.backgroundColor = `${color}`
    }

}

document.getElementById('orange').onclick = clickhandler('orange')

document.getElementById('green').onclick = clickhandler('green')
```

Here:

```js
clickhandler('orange')
```

returns a function.

That returned function remembers:

```js
color = "orange"
```

Similarly:

```js
clickhandler('green')
```

returns another function that remembers:

```js
color = "green"
```

---

## How the Button Example Works

For the orange button:

```js
document.getElementById('orange').onclick = clickhandler('orange')
```

First:

```js
clickhandler('orange')
```

runs.

Inside it:

```js
color = "orange"
```

Then it returns:

```js
function (){
    document.body.style.backgroundColor = `${color}`
}
```

That returned function remembers `color`.

So when the button is clicked:

```text
Orange button
      ↓
returned function runs
      ↓
color = "orange"
      ↓
backgroundColor = "orange"
```

For the green button:

```text
Green button
      ↓
returned function runs
      ↓
color = "green"
      ↓
backgroundColor = "green"
```

---

## Why Closure Is Useful Here

Without a closure, the returned function would not have access to the `color` value created inside `clickhandler()`.

The closure allows each returned function to remember its own value.

```js
clickhandler('orange')
```

remembers:

```text
orange
```

while:

```js
clickhandler('green')
```

remembers:

```text
green
```

So we can create different functions using the same `clickhandler()`.

---

## 🧠 Quick Revision

### Lexical Scoping

> A function can access variables based on where it is written in the code.

```js
function outer(){
    let name = "Micky"

    function inner(){
        console.log(name)
    }

    inner()
}
```

`inner()` can access `name` because it is inside `outer()`.

### Closure

> A closure is created when a function remembers variables from its surrounding lexical scope.

```js
function outer(){
    let name = "Micky"

    return function(){
        console.log(name)
    }
}

const fn = outer()
fn()
```

Even after `outer()` finishes, the returned function can still access `name`.

---

## Final Takeaways

- **Lexical scoping** depends on where functions and variables are written.
- Inner functions can access variables from outer scopes.
- Outer functions cannot access variables inside inner functions.
- Sibling functions cannot directly access each other's local variables.
- JavaScript searches through the **scope chain** when looking for a variable.
- A **closure** allows a function to remember variables from its surrounding lexical scope.
- Returning an inner function is a common way to create a closure.
- `clickhandler('orange')` and `clickhandler('green')` create separate closures.
- Each returned function remembers its own `color`.
- Closures are commonly useful with **event handlers, callbacks, and private state**.

> 🧠 **Memory Trick:**  
> **Lexical Scope → Where the function is written**  
> **Closure → Function remembers its surrounding scope**

---

## 📝 Practice

### 1 Create a Closure

Create a function `outer()` with a variable `message`.

Return an inner function that prints the message.

Call the returned function.

---

### 2 Access an Outer Variable

Create:

```js
function school(){
    let name = "..."

    function student(){
        console.log(name)
    }

    student()
}
```

Use your own values and verify the output.

---

### 3 Test Scope

Create an inner function with a variable called `password`.

Try accessing `password` from the outer function.

Observe what happens.

---

### 4 Create Multiple Closures

Create a function:

```js
createMessage(message)
```

It should return a function that prints the provided message.

Create three different returned functions with different messages.

---

### 5 Closure With a Button

Create a function:

```js
changeColor(color)
```

Return a function that changes the page background to that color.

Connect three buttons to three different colors using the same function.

---

### 6 Closure With a Counter

Create a function:

```js
createCounter()
```

Inside it, create a variable:

```js
let count = 0
```

Return a function that increases and prints `count`.

Call the returned function multiple times and observe whether the value is remembered.

---

### 7 Separate Closures

Create two counters:

```js
const counterOne = createCounter()
const counterTwo = createCounter()
```

Call them multiple times.

Check whether both counters share the same `count` or maintain separate values.

---

### 8 Understand the Scope Chain

Create three nested functions:

```text
outer
  ↓
middle
  ↓
inner
```

Create one variable in each function.

Check which variables `inner()` can access.

---

### 9 Closure With a Greeting

Create:

```js
createGreeting(name)
```

Return a function that prints:

```text
Hello <name>
```

Create greetings for three different names.

---

### 🔥 Challenge — Private State

Create a function:

```js
createBankAccount()
```

Inside it, create:

```js
let balance = 1000
```

Return an object containing functions to:

- deposit money
- withdraw money
- check balance

Keep `balance` inside the outer function so it cannot be accessed directly from outside.

This will help you understand how closures can be used to create **private state**.