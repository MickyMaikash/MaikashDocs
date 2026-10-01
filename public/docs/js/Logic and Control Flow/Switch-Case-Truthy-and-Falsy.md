# Switch Case, Truthy & Falsy Values in JavaScript

# Switch Case

The `switch` statement is used when we want to compare one value against multiple possible values.

Basic syntax:

```js
switch (key) {
    case value:

        break;

    default:
        break;
}
```

The `switch` checks the value of the expression against each `case`.

## Basic Switch Example

```js
const month = "april"

switch (month) {
    case "jan":
        console.log("January")
        break;

    case "feb":
        console.log("February")
        break;

    case "march":
        console.log("March")
        break;

    case "april":
        console.log("April")
        break;

    default:
        console.log("Default case match")
        break;
}
```

Output:

```text
April
```

Because:

```js
month === "april"
```

matches this case:

```js
case "april":
```


## `break` in Switch Case

The `break` statement stops the `switch` after a matching case has been executed.

For example:

```js
const month = "april"

switch (month) {
    case "jan":
        console.log("January")
        break;

    case "april":
        console.log("April")
        break;

    case "may":
        console.log("May")
        break;
}
```

When `"april"` matches, JavaScript executes:

```js
console.log("April")
```

and then:

```js
break
```

stops the switch.

### Why is `break` important?

If you don't use `break`, JavaScript can continue executing the cases that come after the matching case.



## Default Case

The `default` case runs when none of the cases match.

```js
const month = "december"

switch (month) {
    case "jan":
        console.log("January")
        break;

    case "feb":
        console.log("February")
        break;

    default:
        console.log("Default case match")
        break;
}
```

Output:

```text
Default case match
```

So:

```text
Matching case → execute that case
No matching case → execute default
```

---

# Truthy & Falsy Values

JavaScript values can behave like `true` or `false` when they are used in a condition.

For example:

```js
if (value) {
    // truthy
} else {
    // falsy
}
```


## ❌ Falsy Values

These values are treated as **false** when used in a condition.

The falsy values from this section are:

```text
false, 0, -0, 0n, "", null, undefined, NaN
```

For example:

```js
const userEmail = ""

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}
```

Output:

```text
Don't have user email
```

Because an empty string `""` is falsy.

## Truthy Values

Values that are treated as `true` in a condition are called **truthy values**.

Examples from this section:

```text
"0", "false", " ", [], {}, function(){}
```

Notice something important:

An **empty array** is truthy:

```js
[]
```

And an **empty object** is also truthy:

```js
{}
```

---

# Empty Array is Truthy

Consider:

```js
const userEmail = []

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}
```

Output:

```text
Got user email
```

Even though the array is empty, `[]` is a **truthy value**.

So this:

```js
if (userEmail)
```

does **not** check whether the array contains elements.

---

# Checking if an Array is Empty

If we actually want to check whether an array contains zero elements, use its `length`.

```js
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty")
}
```

Output:

```text
Array is empty
```

Why?

```js
userEmail.length
```

is:

```text
0
```

So:

```js
userEmail.length === 0
```

is `true`.

---

# Empty Object is Truthy

An empty object is also truthy:

```js
const emptyObj = {}

if (emptyObj) {
    console.log("Object exists")
}
```

This condition is `true`.

So simply doing:

```js
if (emptyObj)
```

does not tell us whether the object has any properties.

---

# Checking if an Object is Empty

We can use:

```js
Object.keys()
```

to get an array containing the object's keys.

Example:

```js
const emptyObj = {}

console.log(Object.keys(emptyObj))
```

Output:

```text
[]
```

Now we can check its length:

```js
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}
```

Output:

```text
Object is empty
```

The process is:

```text
Object
   ↓
Object.keys()
   ↓
Array of keys
   ↓
.length
   ↓
Check whether length === 0
```

---

# 🧠 Important Difference

### Empty Array

```js
[]
```

is **truthy**.

To check if it is empty:

```js
array.length === 0
```

### Empty Object

```js
{}
```

is **truthy**.

To check if it is empty:

```js
Object.keys(object).length === 0
```

---

# 📚 Equality Facts

These are useful JavaScript facts to remember:

```js
false == 0
```

Result:

```text
true
```

---

```js
false == ""
```

Result:

```text
true
```

---

```js
0 == ""
```

Result:

```text
true
```

These examples use `==`, which performs **type coercion**.

This is different from `===`.

For example:

```js
5 == "5"
```

is:

```text
true
```

but:

```js
5 === "5"
```

is:

```text
false
```

because `===` checks both the value and the data type.

---

# 📝 Quick Revision

### Switch

```js
switch (value) {
    case something:
        // code
        break;

    default:
        // code
        break;
}
```

Used when comparing one value against multiple possible cases.

### `break`

Stops the switch after the matching case.

### `default`

Runs when no case matches.

### Falsy Values

```text
false
0
-0
0n
""
null
undefined
NaN
```

### Truthy Values

Examples:

```text
"0"
"false"
" "
[]
{}
function(){}
```

### Check Empty Array

```js
array.length === 0
```

### Check Empty Object

```js
Object.keys(object).length === 0
```

### `==`

Allows type coercion.

### `===`

Checks both value and type.

---

# 🧪 Practice Questions

> Try these with your own examples instead of copying the examples from the documentation.

### 1. 🔀 Switch Case

Create a variable containing a day:

```text
monday
tuesday
wednesday
```

Use `switch` to print the corresponding day message.

Add a `default` case.

---

### 2. 🛑 Switch + Break

Create a switch for different programming languages:

```text
javascript
python
java
```

Print a message for each one.

Make sure each case uses `break`.

---

### 3. ❌ Falsy Check

Create variables containing:

```text
0
""
null
```

Use `if` statements to observe how JavaScript treats them.

---

### 4. ✅ Truthy Check

Test these values individually inside an `if`:

```js
"hello"
[]
{}
"0"
" "
```

Observe which branch executes.

---

### 5. 📦 Empty Array

Create an empty array.

Check whether it is empty using:

```js
array.length === 0
```

---

### 6. 🗃️ Empty Object

Create an empty object.

Use:

```js
Object.keys()
```

and `.length` to check whether it contains any properties.

---

### 7. 🧠 Equality

Predict the result before running these:

```js
console.log(false == 0)
console.log(false == "")
console.log(0 == "")
console.log(false === 0)
console.log(0 === "")
```

Then run the code and compare your answers.

---

### 8. 🚀 Final Challenge

Create a variable called `role` with one of these values:

```text
admin
editor
user
guest
```

Use a `switch` statement to print a different message for each role.

Then create an array of roles and check whether it is empty before processing it.

---

# 🎯 Final Takeaway

The main concepts from this section are:

```text
Switch Case
    ↓
case
    ↓
break
    ↓
default
    ↓
Truthy & Falsy Values
    ↓
Empty Arrays
    ↓
Empty Objects
    ↓
Object.keys()
    ↓
== vs ===
```

These concepts help you understand how JavaScript makes decisions and how different values behave when used inside conditions.