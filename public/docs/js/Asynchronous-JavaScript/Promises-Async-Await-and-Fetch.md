# JavaScript Promises, Async/Await & Fetch API

## Synchronous JavaScript

Synchronous code runs **one task at a time, in order**.

The next line waits until the previous line finishes.

```js
console.log("First")
console.log("Second")
console.log("Third")
```

Output:

```text
First
Second
Third
```

Think:

```text
Task 1
  ↓
Task 2
  ↓
Task 3
```

---

## Asynchronous JavaScript

Asynchronous operations allow JavaScript to **start a task and continue with other work without waiting for that task to finish**.

Common examples:

- `setTimeout()`
- `setInterval()`
- API/network requests
- `fetch()`
- Promises

Example:

```js
console.log("Start")

setTimeout(() => {
    console.log("Async task")
}, 2000)

console.log("End")
```

Output:

```text
Start
End
Async task
```

The timer takes 2 seconds, but JavaScript continues to the next line instead of waiting.

Think:

```text
Start
  ↓
Start async task ───────→ finishes later
  ↓
Continue other code
  ↓
End
```

---


## What is a Promise?
A **Promise is an object that represents the eventual result of an asynchronous operation**.

It basically says:

> "I don't have the result right now, but I will give you the result later — either success or failure."

A `Promise` represents the eventual completion or failure of an asynchronous operation.

A Promise has three states:

```text
Pending
   ↓
 ┌───────────┐
 ↓           ↓
Fulfilled   Rejected
(success)   (failure)
```

- **Pending** → operation is still running
- **Fulfilled** → operation completed successfully
- **Rejected** → operation failed

---

## Creating a Promise

One way to create a Promise is:

```js
const promiseOne = new Promise(function(resolve, reject) {

    // Do an async task
    // DB calls, cryptography, network calls

    setTimeout(function(){
        console.log('Async task is complete')

        resolve()
    }, 1000)

})
```

### `resolve`

`resolve()` is used when the asynchronous operation is successful.

It connects the Promise to the `.then()` part during consumption.

### `reject`

`reject()` is used when the asynchronous operation fails.

It connects the Promise to `.catch()`.

---

## Consuming a Promise

After creating a Promise, we can consume it using `.then()`.

```js
promiseOne.then(function(){
    console.log("Promise consumed")
})
```

When `resolve()` is called, the function inside `.then()` runs.

Output:

```text
Async task is complete
Promise consumed
```

---

## Passing Data Through `resolve()`

We can pass a value to `resolve()`.

```js
const promise = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve("Task completed")
    }, 1000)

})

promise.then(function(message){
    console.log(message)
})
```

Output:

```text
Task completed
```

The value passed to `resolve()` is received by the function inside `.then()`.

---

## Passing Data Through `reject()`

If an operation fails, we can call `reject()`.

```js
const promise = new Promise(function(resolve, reject){

    setTimeout(function(){

        const error = true

        if(!error){
            resolve("Task completed")
        }else{
            reject("Something went wrong")
        }

    }, 1000)

})
```

The rejected value can be handled using `.catch()`.

```js
promise.catch(function(error){
    console.log(error)
})
```

Output:

```text
Something went wrong
```

---

## `setTimeout()` With a Promise

Promises are often used with asynchronous operations such as timers, network requests, database operations, etc.

```js
new Promise(function(resolve, reject){

    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved")
})
```

Flow:

```text
Promise created
      ↓
setTimeout()
      ↓
Async task completes
      ↓
resolve()
      ↓
.then()
```

---

## Returning Data From a Promise

A Promise can resolve with an object.

```js
const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){

        resolve({
            username: "Chai",
            email: "chai@chaiaurcode.com"
        })

    }, 1000)

})
```

The object can be received inside `.then()`.

```js
promiseThree.then(function(user){
    console.log(user)
})
```

Output:

```text
{
    username: "Chai",
    email: "chai@chaiaurcode.com"
}
```

We can then access its properties:

```js
promiseThree.then(function(user){
    console.log(user.username)
    console.log(user.email)
})
```

---

## `.then()`

`.then()` handles the successful result of a Promise.

```js
promise.then(function(data){
    console.log(data)
})
```

If the Promise calls:

```js
resolve(data)
```

then `data` becomes available inside `.then()`.

---

## `.catch()`

`.catch()` handles a rejected Promise.

```js
promise
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })
```

If the Promise calls:

```js
reject(error)
```

the error can be received by `.catch()`.

---

## `.finally()`

`.finally()` runs whether the Promise is fulfilled or rejected.

```js
promise
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })
    .finally(function(){
        console.log("Promise is either rejected or resolved")
    })
```

`finally()` is useful when something should happen regardless of the result.

---

## Promise Chaining

Multiple `.then()` calls can be chained together.

```js
promiseFour
    .then((user) => {
        console.log(user)

        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Promise is either rejected or resolved")
    })
```

### How the Chain Works

Suppose the Promise resolves with:

```js
{
    username: "micky",
    password: "2343"
}
```

The first `.then()` receives the object:

```js
.then((user) => {
    console.log(user)

    return user.username
})
```

It returns:

```text
micky
```

That returned value goes to the next `.then()`:

```js
.then((username) => {
    console.log(username)
})
```

So the flow is:

```text
Promise
   ↓
.then()
   ↓
return user.username
   ↓
.then(username)
   ↓
.catch()
   ↓
.finally()
```

---

## Complete Promise Example

```js
const promiseFour = new Promise(function(resolve, reject){

    setTimeout(() => {

        let error = true

        if(!error){

            resolve({
                username: "micky",
                password: "2343"
            })

        }else{

            reject("Error: Something went wrong")

        }

    }, 1000)

})

promiseFour
    .then((user) => {
        console.log(user)

        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Promise is either rejected or resolved")
    })
```

---

## `async` and `await`

Another way to work with Promises is using `async` and `await`.
It doesn't handle error/catch directly

```js
async function consumepromiseFive(){

    try {

        const response = await promiseFive
        //it is like waiting to pormise five occur, promise is an object so it is not consumed as pormiserfive()

        console.log(response)

    } catch (error) {

        console.log(error)

    }

}
```

### `async`

An `async` function allows us to use `await` inside it.

### `await`

`await` waits for the Promise to settle before continuing with the next line inside the `async` function.

For example:

```js
const response = await promiseFive
```

The result of the Promise is assigned to `response` when the Promise fulfills.

---

## Handling Errors With `try...catch`

When using `async/await`, errors from a rejected Promise can be handled using `try...catch`.

```js
async function consumepromiseFive(){

    try {

        const response = await promiseFive

        console.log(response)

    } catch (error) {

        console.log(error)

    }

}
```

Flow:

```text
async function
      ↓
    await
      ↓
   Promise
   ↙   ↘
success  error
  ↓       ↓
try     catch
```

---

## `async/await` vs `.then().catch()`

A Promise can be consumed in two common ways.

### Using `.then().catch()`

```js
promise
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```

### Using `async/await`

```js
async function getData(){

    try {

        const data = await promise
        console.log(data)

    } catch (error) {

        console.log(error)

    }

}
```

Both approaches can be used to work with Promises.

---

# 🌐 Fetch API

## What is `fetch()`?

`fetch()` is used to make HTTP requests.

For example:

```js
fetch("https://api.github.com/users/hiteshchoudhary")
```

It returns a Promise.

---

## Fetch Using `async/await`

Example API:

```text
https://jsonplaceholder.typicode.com/users
```

We can request the data using `async/await`.

```js
async function getAllusers(){

    try {

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )

        const data = await response.json()

        console.log(data)

    } catch (error) {

        console.log("E: ", error)

    }

}

getAllusers()
```

---

## `response.json()`

After receiving the response:

```js
const response = await fetch(url)
```

we can convert the response body into a JavaScript value using:

```js
const data = await response.json()
```

The conversion is asynchronous, so `await` is used.

Flow:

```text
fetch()
   ↓
Response
   ↓
response.json()
   ↓
JavaScript data
```

---

## Fetch Using `.then().catch()`

The same type of request can be handled using Promise chaining.

```js
fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```

Flow:

```text
fetch()
   ↓
Promise
   ↓
.then(response)
   ↓
response.json()
   ↓
.then(data)
   ↓
.catch(error)
```

---

## Fetch Complete Flow

```text
fetch(url)
    ↓
Promise returned
    ↓
HTTP request
    ↓
Response received
    ↓
response.json()
    ↓
JavaScript data
    ↓
Use the data
```

---

## `async/await` Fetch Flow

```text
async function
      ↓
   fetch()
      ↓
    await
      ↓
  response
      ↓
response.json()
      ↓
    await
      ↓
     data
      ↓
   use data
```

---

## `.then()` Fetch Flow

```text
fetch()
   ↓
.then(response)
   ↓
response.json()
   ↓
.then(data)
   ↓
use data
   ↓
.catch(error)
```

---

## 🧠 Quick Revision

- `Promise` → represents an asynchronous operation
- `resolve()` → successful completion
- `reject()` → failure
- `.then()` → handles successful Promise result
- `.catch()` → handles rejection/error
- `.finally()` → runs after the Promise settles
- Promise chaining → multiple `.then()` calls connected together
- `async` → allows `await` inside the function
- `await` → waits for a Promise result before continuing
- `try...catch` → handles errors when using `async/await`
- `fetch()` → makes HTTP requests and returns a Promise
- `response.json()` → reads the response body as JSON data
- `fetch()` can be consumed using either `.then().catch()` or `async/await`

---

## Final Takeaways

### Promise

```text
Create Promise
      ↓
resolve / reject
      ↓
Consume Promise
```

### Promise Methods

```text
.then()    → success
.catch()   → error/rejection
.finally() → runs either way
```

### Async/Await

```text
async
  ↓
await Promise
  ↓
result
```

### Fetch

```text
fetch()
   ↓
Response
   ↓
response.json()
   ↓
Data
```

---

## 📝 Practice

### 1 Create a Promise

> Create a Promise that resolves after 2 seconds and prints a success message using `.then()`.

---

### 2 Resolve With a Value

> Create a Promise that resolves with a number and print that number using `.then()`.

---

### 3 Reject a Promise

> Create a Promise that rejects with an error message and handle it using `.catch()`.

---

### 4 Use `finally()`

> Create a Promise that either resolves or rejects and use `.finally()` to print a message in both cases.

---

### 5 Resolve an Object

> Create a Promise that resolves with an object containing a product name and price. Access both properties using `.then()`.

---

### 6 Promise Chaining

> Create a Promise that resolves with a number. Pass the number through two `.then()` calls and modify it between them.

---

### 7 Return a Value From `.then()`

> Create a Promise that resolves with a username. Return the username from the first `.then()` and print it in the second `.then()`.

---

### 8 Handle Rejection

> Create a Promise with a condition. Resolve when the condition is true and reject when it is false.

---

### 9 Use `async/await`

> Create a Promise that resolves after 1 second and consume it using an `async` function with `await`.

---

### 10 Use `try...catch`

> Create a rejected Promise and handle its error inside an `async` function using `try...catch`.

---

### 11 Promise With an Array

> Create a Promise that resolves with an array of three programming languages. Print the array using `.then()`.

---

### 12 Promise With an Object

> Create a Promise that resolves with a product object. Use `.then()` to print only the product price.

---

### 13 Fetch API Data

> Use `fetch()` to request data from a public API and print the response.

---

### 14 Convert the Response

> Use `response.json()` to convert the response into usable JavaScript data.

---

### 15 Fetch With `.then()`

> Make a `fetch()` request and use `.then().catch()` to handle the response and errors.

---

### 16 Fetch With `async/await`

> Make the same API request using `async/await` and `try...catch`.

---

### 17 Display API Data

> Fetch an API that returns an array of objects and print the value of one property from every object.

---

### 18 Promise + DOM

> Fetch data from a public API and display one value from the response inside an HTML element.

---

### 19 API User Card

> Fetch user information from an API and create a small user card containing a name, email, and other available information.

---

### 20 Mini Project — API User Viewer 🚀

> Create a simple webpage with a button called **"Load User"**.
>
> When the button is clicked:
>
> - Make an API request using `fetch()`.
> - Handle the request using `async/await`.
> - Use `try...catch` for errors.
> - Convert the response using `response.json()`.
> - Display the user's information on the page using DOM methods.
>
> **Bonus:** Add a loading message while the request is being processed and an error message if the request fails.