# Conditions & Operators in JavaScript

Conditions allow us to execute different code depending on whether a condition is `true` or `false`.



## `if` Statement

The `if` statement executes a block of code when its condition is `true`.

```js
const isUserLoggedIn = true
const temperature = 43

if (temperature < 50) {
    console.log("Temperature is less than 50")
}
```

Since `43 < 50` is `true`, the code inside the `if` block executes.

Output:

```text
Temperature is less than 50
```

---

## `if...else`

We can use `else` when we want another block of code to execute if the condition is `false`.

```js
if (temperature < 50) {
    console.log("Temperature is less than 50")
} else {
    console.log("Temperature is greater than 50")
}
```

Only one of these blocks will execute.

We can also write code after the condition:

```js
console.log("execute")
```

This code will execute regardless of whether the `if` condition was `true` or `false`.

---

##  Comparison Operators

Comparison operators are used to compare values.

```text
<     Less than
>     Greater than
<=    Less than or equal to
>=    Greater than or equal to
==    Equal to
!=    Not equal to
===   Strict equality
!==   Strict inequality
```

### `===`

`===` checks both:

- Value
- Data type

Example:

```js
5 === 5
```

Result:

```text
true
```

But:

```js
5 === "5"
```

Result:

```text
false
```

because one is a number and the other is a string.

---

## Block Scope with `if`

Variables declared using `let` or `const` inside an `if` block belong to that block.

```js
const score = 200

if (score > 100) {
    let power = "fly"
}
```

Here, `power` exists only inside the `if` block.

Trying to access it outside:

```js
console.log(`User power is ${power}`)
```

will cause an error because `power` is outside its scope.

This is related to the concept of **block scope**.

---

## Single-Line `if`

If the `if` block contains only one statement, we can write it without curly braces.

```js
const balance = 1000

if (balance > 500)
    console.log("test")
```

We can technically write multiple statements using the comma operator:

```js
if (balance > 500)
    console.log("test"), console.log("test2")
```

However, using curly braces is generally clearer when there is more than one statement.

---

## `else if`

When we have multiple conditions, we can use `else if`.

```js
const balance = 1000

if (balance < 500) {
    console.log("Less than 500")
} else if (balance < 750) {
    console.log("Less than 750")
} else if (balance < 900) {
    console.log("Less than 900")
} else {
    console.log("Less than 1200")
}
```

JavaScript checks the conditions from **top to bottom**.

For:

```text
balance = 1000
```

The first three conditions are false, so the `else` block executes.

Output:

```text
Less than 1200
```

---

## Logical AND `&&`

The `&&` operator means **AND**.

Both conditions must be `true` for the whole condition to be `true`.

```js
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}
```

Both values are `true`, so the message is printed.

Output:

```text
Allow to buy course
```

Think of it as:

```text
Condition 1 AND Condition 2
       ↓          ↓
      true       true
             ↓
           true
```

---

## Logical OR `||`

The `||` operator means **OR**.

Only one of the conditions needs to be `true`.

```js
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("USER logged In")
}
```

Here:

```text
Google → false
Email  → true
```

Since at least one condition is `true`, the `if` block executes.

Output:

```text
USER logged In
```

---

## Nullish Coalescing Operator `??`

The **nullish coalescing operator** is:

```js
??
```

It is used with `null` and `undefined`.

For example:

```js
let val1

val1 = null ?? 10

console.log(val1)
```

Output:

```text
10
```

If the value on the left is `null` or `undefined`, JavaScript uses the value on the right.

---

## `undefined` Example

```js
let val1

val1 = undefined ?? 15

console.log(val1)
```

Output:

```text
15
```

Because the left side is `undefined`.

---

## Multiple `??` Operators

We can also use multiple nullish coalescing operators:

```js
let val1

val1 = null ?? 10 ?? 20

console.log(val1)
```

Output:

```text
10
```

JavaScript uses the first value that is **not `null` or `undefined`**.

Think of it as:

```text
null → skip
10   → found
20   → not needed
```

So:

```text
val1 = 10
```

---

## Ternary Operator

The **ternary operator** is a short way of writing an `if...else` condition.

Basic syntax:

```js
condition ? true : false
```

Example:

```js
const iceTeaPrice = 100

iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80")
```

Since:

```text
100 <= 80
```

is `false`, the second expression executes.

Output:

```text
More than 80
```

---

## Ternary vs `if...else`

Normal `if...else`:

```js
if (iceTeaPrice <= 80) {
    console.log("Less than 80")
} else {
    console.log("More than 80")
}
```

Ternary:

```js
iceTeaPrice <= 80
    ? console.log("Less than 80")
    : console.log("More than 80")
```

The basic idea is:

```text
condition
    ?
code when TRUE
    :
code when FALSE
```

So the ternary operator can be useful when the condition is simple and we want a shorter expression.

---

## 📝 Quick Revision

### `if`

```js
if (condition) {
    // code
}
```

Executes code when the condition is `true`.

### `if...else`

```js
if (condition) {
    // true
} else {
    // false
}
```

### `else if`

Used when there are multiple conditions.

```js
if (condition1) {
    
} else if (condition2) {
    
} else {
    
}
```

### Comparison Operators

```text
<   >   <=   >=
==  !=  ===  !==
```

### AND `&&`

```js
condition1 && condition2
```

Both conditions need to be true.

### OR `||`

```js
condition1 || condition2
```

At least one condition needs to be true.

### Nullish Coalescing `??`

```js
value ?? fallback
```

Uses the fallback when `value` is `null` or `undefined`.

### Ternary

```js
condition ? trueValue : falseValue
```

Short form of a simple `if...else`.

---

# 🧪 Practice Questions

> Try these using different examples instead of copying the examples from the notes.

### 1. 🌡️ Temperature

Create a variable `temperature`.

If it is greater than `30`, print:

```text
It is hot
```

Otherwise print:

```text
It is not hot
```

---

### 2. 🔢 Number Comparison

Create a variable containing a number.

Check whether the number is:

- greater than `100`
- equal to `100`
- less than `100`

Use `if`, `else if`, and `else`.

---

### 3. 🔐 Login Check

Create two variables:

```text
isLoggedIn
hasPassword
```

Use `&&` to print `"Access granted"` only when both are `true`.

---

### 4. 📧 Login Method

Create two variables representing whether a user logged in using:

- phone
- email

Use `||` to print `"User logged in"` when either one is `true`.

---

### 5. ❓ Nullish Coalescing

Create a variable whose value is `null`.

Use `??` to provide a default value.

Try changing the variable to:

```text
undefined
```

and then to a normal value.

Observe the difference.

---

### 6. 🎯 Ternary

Create a variable called `age`.

Use a ternary operator to print:

```text
Adult
```

when the age is 18 or above, otherwise:

```text
Minor
```

---

### 7. 🔥 Combined Challenge

Create these variables:

```text
isLoggedIn
hasSubscription
isAdmin
```

Create conditions that:

- Allow access if the user is logged in **and** subscribed.
- Give admin access if the user is logged in **and** is an admin.
- Otherwise print `"Access denied"`.

---

### 8. 🚀 Final Challenge

Create a variable called `score`.

Use `if...else if...else` to print:

```text
Excellent
```

for a high score,

```text
Good
```

for a medium score,

and:

```text
Needs improvement
```

for a lower score.

Choose your own score ranges.

---

# 🎯 Final Takeaway

The main concepts from this section are:

```text
if
 ↓
if...else
 ↓
else if
 ↓
Comparison Operators
 ↓
Logical AND (&&)
 ↓
Logical OR (||)
 ↓
Nullish Coalescing (??)
 ↓
Ternary Operator
```

These conditions and operators are used to make decisions in JavaScript programs.