# Functions in JavaScript

A **function** is a block of code that performs a specific task.  
We can define a function once and execute it whenever we need it.

---

## Creating a Function

A function can be created using the `function` keyword.

```js
function sayMyName(){
    console.log("h")
    console.log("i")
    console.log("c")
    console.log("k")
    console.log("y")
}
```

Here:

- `function` → keyword used to create a function
- `sayMyName` → function name
- `()` → parentheses for parameters
- `{}` → contains the code that the function will execute

---

## Function Reference vs Function Execution

```js
sayMyName
```

This is a **reference** to the function.

It tells JavaScript which function we are referring to, but it does not execute the function.

```js
sayMyName()
```

This **executes/calls** the function.

The `()` are important because they tell JavaScript to execute the function.

---

## Function Parameters

Functions can receive values through **parameters**.

```js
function addTwonum(num1, num2){
    return num1 + num2
}
```

Here:

```text
num1
num2
```

are parameters.

When we call the function:

```js
const result = addTwonum(3, 5)
```

`3` is passed to `num1` and `5` is passed to `num2`.

The function returns:

```text
8
```

So:

```js
const result = addTwonum(3, 5)
console.log(result)
```

Output:

```text
8
```

---

## `return` in Functions

The `return` keyword sends a value back from the function.

For example:

```js
function addTwonum(num1, num2){
    return num1 + num2
}
```

We can store the returned value:

```js
const result = addTwonum(3, 5)

console.log("Result:", result)
```

Output:

```text
Result: 8
```

Another way of writing the same logic is:

```js
function addTwonum(num1, num2){
    let result = num1 + num2
    return result
}
```

Both versions return the same value.

---

## Default Parameters

We can give a parameter a **default value**.

```js
function logiNuserMessage(username = "sam"){
    if (username === undefined){
        console.log("Please Enter a username")
        return
    }

    return `${username} just logged in`
}
```

Now if we call:

```js
console.log(logiNuserMessage())
```

the default value `"sam"` is used.

Output:

```text
sam just logged in
```

If we provide a value:

```js
console.log(logiNuserMessage("micky"))
```

Output:

```text
micky just logged in
```

The provided value replaces the default value.

---

## Function with Conditions

Functions can also contain conditions.

```js
function checkNumber(x){
    if (x > 3) {
        console.log("x is greater than 3")
    } else {
        console.log("x is not greater than 3")
    }
}
```

Calling:

```js
checkNumber(5)
```

Output:

```text
x is greater than 3
```

The function can contain normal JavaScript logic such as:

- `if`
- `else`
- loops
- variables
- calculations
- `return`

---

# Rest Operator in Functions

The `...` syntax can be used to collect multiple values into an array.

```js
function calculateCarPrice(val1, val2, ...num1){
    return num1
}
```

For example:

```js
console.log(calculateCarPrice(299, 400, 500, 2000))
```

Output:

```text
[500, 2000]
```

Here:

```text
val1 → 299
val2 → 400
num1 → [500, 2000]
```

The `...num1` parameter collects the remaining arguments into an array.

### ⚠️ Important

The `...` syntax can be used as a **rest parameter** when collecting remaining values.

The same `...` syntax can also be used as a **spread operator** in other situations.

---

# Passing Objects to Functions

We can pass an object as an argument to a function.

```js
const user = {
    name: "Chai",
    price: 299
}
```

We can create a function that receives an object:

```js
function handleobject(anyobject){
    console.log(
        `name is ${anyobject.name} and price is ${anyobject.price}`
    )
}
```

Now we can pass the object:

```js
handleobject(user)
```

Output:

```text
name is chai and price is 299
```

We can also directly pass an object while calling the function:

```js
handleobject({
    name: "Cold Coffee",
    price: 399
})
```

Output:

```text
name is Cold Coffee and price is 399
```

Here:

```js
anyobject.name
anyobject.price
```

are used to access the object's properties.

---

# 🔹 Passing Arrays to Functions

Arrays can also be passed to functions.

```js
const myarr = [200000, 400, 100, 600]
```

Function:

```js
function return2ndvalue(getArray){
    return getArray[1]
}
```

Calling:

```js
console.log(return2ndvalue(myarr))
```

Output:

```text
400
```

We can also directly pass an array:

```js
console.log(return2ndvalue([299, 40, 399, 500]))
```

Output:

```text
40
```

Remember that array indexing starts from `0`:

```text
index:   0    1    2    3
value:  299   40  399  500
```

Therefore:

```js
getArray[1]
```

returns the second value.

---

# 📝 Quick Revision

### Function

```js
function functionName(){
    // code
}
```

### Function execution

```js
functionName()
```

### Parameters

```js
function add(a, b){
    return a + b
}
```

### Arguments

```js
add(5, 10)
```

### Return

```js
return value
```

Returns a value from the function.

### Default parameter

```js
function greet(name = "Sam"){
    return name
}
```

### Rest parameter

```js
function example(a, b, ...others){
    return others
}
```

### Object as argument

```js
function handleObject(obj){
    console.log(obj.name)
}
```

### Array as argument

```js
function getValue(arr){
    return arr[1]
}
```

---

# 🧪 Practice Questions

> Try to solve these yourself without looking at the examples above.

### 1. Basic Function

Create a function called `printMessage` that prints:

```text
JavaScript is fun!
```

---

### 2. Function with Parameters

Create a function `multiplyNumbers` that accepts two numbers and returns their multiplication.

Expected:

```js
multiplyNumbers(6, 7)
```

Output:

```text
42
```

---

### 3. Return Value

Create a function `calculateSquare` that accepts a number and returns its square.

---

### 4. Default Parameter

Create a function `welcomeUser` that accepts a username.

If no username is provided, use:

```text
Guest
```

Expected:

```js
welcomeUser()
```

Output:

```text
Welcome Guest
```

---

### 5. Condition Inside Function

Create a function `checkAge` that accepts an age.

If the age is 18 or greater, print:

```text
You can vote
```

Otherwise print:

```text
You cannot vote
```

---

### 6. Rest Parameter

Create a function `sumNumbers` that accepts two normal parameters and then collects all remaining numbers using a rest parameter and return their sum.

Try:

```js
sumNumbers(10, 20, 30, 40, 50)
```

---

### 7. Object as Argument

Create an object containing:

- `name`
- `age`
- `city`

Create a function that accepts this object and prints the person's name and city.

---

### 8. Direct Object Argument

Create a function that accepts an object and prints its `title` and `author`.

Call the function by passing the object directly instead of storing it in a variable first.

---

### 9. Array as Argument

Create an array containing five numbers.

Write a function that returns the **third value** from the array.

---

### 10. Function + Array

Create a function `getLastValue` that accepts an array and returns its last value.

Try it with different arrays.

---

### 11. Function + Condition + Return

Create a function `checkNumber` that accepts a number.

Return:

```text
Positive
```

if the number is greater than `0`.

Otherwise return:

```text
Negative or Zero
```

---

### 12. Final Challenge 🚀

Create a function called `calculateTotal`.

It should:

- Accept a product object.
- The object should contain `name` and `price`.
- Accept additional prices using a rest parameter.
- Calculate the total.
- Return the total amount.

Try creating your own example rather than copying one from the notes.

---

# 🎯 Final Takeaway

Functions help us **reuse code** instead of writing the same logic repeatedly.

The important concepts from this section are:

```text
Function declaration
       ↓
Function reference
       ↓
Function execution
       ↓
Parameters & arguments
       ↓
return
       ↓
Default parameters
       ↓
Rest parameters
       ↓
Objects as arguments
       ↓
Arrays as arguments
```

Once these concepts are comfortable, functions become one of the most useful building blocks for writing JavaScript programs.