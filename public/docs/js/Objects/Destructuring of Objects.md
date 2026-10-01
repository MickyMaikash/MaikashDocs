
# Destructuring of Object

Object destructuring is a way to **extract properties from an object** and store them in variables so we can use them more easily.

## Example

```js
const course = {
    coursename: "js in hindi",
    price: "999",
    courseytchannel: "codeaurchai"
}
```

Normally, to access `courseytchannel` we would write:

```js
console.log(course.courseytchannel)
```

But with destructuring, we can extract it:

```js
const { courseytchannel } = course //it is like we are extracting coursetytchannel from course object to use it effortlessly in our code

console.log(courseytchannel)
```

Here:

```js
const { courseytchannel } = course
```

means:

> Extract the `courseytchannel` property from the `course` object and create a variable named `courseytchannel`.

---

# Giving a Different Name While Destructuring

We can also extract a property and give it a **different variable name**.

```js
const { coursename: jsclass } = course

console.log(jsclass)
```

Here:

```js
coursename: jsclass
```

means:

```text
coursename → property/key in the object
jsclass    → new variable name
```

So instead of writing:

```js
course.coursename
```

we can simply write:

```js
jsclass
```

Output:

```text
js in hindi
```

### Remember

```js
const { propertyName: newVariableName } = object
```

Example:

```js
const { coursename: jsclass } = course
```

---

# Destructuring in Functions

Destructuring can also be used directly inside a function's parameters.

Example:

```js
const navbar = ({ company }) => {

}
```

Here, the function receives an object and extracts the `company` property from it.

For example:

```js
const companyInfo = {
    companyName: "TypenDraw"
}

const navbar = ({ companyName }) => {
    console.log(companyName)
}

navbar(companyInfo)
```

Output:

```text
TypenDraw
```

This is useful because instead of writing:

```js
object.companyName
```

inside the function, we can directly use:

```js
companyName
```

### React Connection

This type of object destructuring is commonly seen in **React**, especially when working with component props.

Example:

```js
const User = ({ name, age }) => {
    console.log(name)
    console.log(age)
}
```

Here, `name` and `age` are being extracted from the props object.

---

# API

API stands for **Application Programming Interface**.

When working with JavaScript, APIs commonly provide data in a format such as **JSON**.

Example of JSON data:

```json
{
    "name": "micky",
    "Channel": "codestarterYt",
    "company": "TypenDraw"
}
```

This looks similar to a JavaScript object.

It contains:

```text
key   → value
name  → micky
Channel → codestarterYt
company → TypenDraw
```

---

# API Returning Multiple Objects

An API can also return an **array containing multiple objects**.

Example:

```json
[
    {},
    {},
    {},
    {}
]
```

Conceptually:

```text
API
 ↓
Array
 ↓
Object
 ↓
Data
```

For example:

```json
[
    {
        "name": "Micky"
    },
    {
        "name": "Sam"
    },
    {
        "name": "John"
    }
]
```

Here, we have:

- An array
- Containing multiple objects
- Each object containing its own data

---

# Quick Revision

### Object Destructuring

```js
const { courseytchannel } = course
```

➡️ Extracts `courseytchannel` from `course`.

### Rename while destructuring

```js
const { coursename: jsclass } = course
```

➡️ Extracts `coursename` and stores it in a variable called `jsclass`.

### Function parameter destructuring

```js
const navbar = ({ company }) => {
    console.log(company)
}
```

➡️ Extracts `company` directly from the object received by the function.

### API JSON object

```json
{
    "name": "micky",
    "company": "TypenDraw"
}
```

➡️ Data in key-value form.

### API JSON array

```json
[
    {},
    {},
    {}
]
```

➡️ An array containing multiple objects.

# 🧠 Quick Practice — Object Destructuring & APIs

### Question 1 — Basic Object Destructuring

> Create an object named `movie` with:
> - `title`
> - `director`
> - `year`
>
> Use object destructuring to extract `title`.
>
> Print the extracted variable.

---

### Question 2 — Destructure Multiple Properties

> From the following object:
> ```js
> const laptop = {
>     brand: "Lenovo",
>     ram: "16GB",
>     storage: "512GB"
> }
> ```
> Use destructuring to extract `brand` and `ram`.
> Print both variables.

**Expected Output:**
```text
Lenovo
16GB
```

---

### Question 3 — Rename While Destructuring

> In the following object:
> ```js
> const studentInfo = {
>     name: "Rahul",
>     age: 20
> }
> ```
> Extract `name`, but store it in a variable called `studentName`.
> 
> Print `studentName`.

**Expected Output:**
```text
Rahul
```

---

### Question 4 — Rename Multiple Properties

> Create an object named `product`:
> ```js
> const product = {
>     productName: "Keyboard",
>     productPrice: 1500
> }
> ```
> Destructure:
> - `productName` -> `name`
> - `productPrice` -> `price`
>
> Print `name` and `price`.

**Expected Output:**
```text
Keyboard
1500
```

---

### Question 5 — Understand the Difference

> In the following object:
> ```js
> const person = {
>     name: "Aman"
> }
> ```
> Destructure `name` into a variable called `username`.
> Then print `username`.
>
> **Requirement:** Do not use `person.name` when printing.

---

### Question 6 — Destructuring in Function Parameters

> In this object:
> ```js
> let userInfo = {
>     username: "alex",
>     age: 25
> }
> ```
> Create a function called `showUser`.
> Destructure `username` and `age` directly inside the function parameter.
> Print both values.

**Expected Output:**
```text
alex
25
```

---

### Question 7 — Function Parameter With One Property

> Create an object named `book` with:
> ```js
> {
>     title: "The Alchemist",
>     author: "Paulo Coelho"
> }
> ```
>
> Create a function `showTitle`.
>
> Extract only `title` using parameter destructuring and print it.

---

### Question 8 — Function Parameter With Renaming

> Create:
> ```js
> const employee = {
>     name: "Rohan",
>     department: "IT"
> }
> ```
>
> Create a function that receives the object.
>
> While destructuring:
> - `name` should become `employeeName`
> - `department` should become `employeeDepartment`
>
> Print both variables.


---

### Question 9 — Function Receives an Object

> Create an object called `phone`:
> ```js
> {
>     brand: "Apple",
>     model: "iPhone 16"
> }
> ```
>
> Create a function called `displayPhone`.
>
> Pass the entire object to the function.
>
> Use destructuring in the function parameter to directly access `brand` and `model`.

**Expected Output:**
```text
Apple iPhone 16
```

---

### Question 10 — React-Style Props Practice

> Create an object:
> ```js
> const userProps = {
>     name: "Micky",
>     age: 21
> }
> ```
>
> Create a function named `User`.
>
> Use:
> ```js
> ({ name, age })
> ```
> in the function parameter.
>
> Print:
> ```text
> Name: Micky
> Age: 21
> ```



---

### Question 11 — API-Style Object

> Imagine an API gives you this data:
>
> Create an object containing:
> - `username`
> - `email`
> - `country`
>
> Use destructuring to extract `username` and `email`.
>
> Print them.



---

### Question 12 — API Object + Renaming

> Create an API-style object:
> ```js
> {
>     id: 101,
>     name: "Alex",
>     city: "Mumbai"
> }
> ```
>
> Destructure:
> - `name` -> `userName`
> - `city` -> `userCity`
>
> Print both.

**Expected Output:**
```text
Alex
Mumbai
```

---

### Question 13 — Understand API JSON Structure

> Create a JSON-style object representing a game.
>
> It should contain:
> - `gameName`
> - `genre`
> - `players`
>
> Write the data in key-value form.


---

### Question 14 — Extract Data From API Object

> Imagine you received this API response:
>
> ```js
> const response = {
>     status: "success",
>     username: "coder123",
>     followers: 450
> }
> ```
>
> Use destructuring to extract `username` and `followers`.
>
> Print both.

---

### Question 15 — API Returning Multiple Objects

> Create an array named `users`.
>
> Add three objects.
>
> Each object should contain:
> - `id`
> - `name`
>
> Example:
> ```text
> User 1
> User 2
> User 3
> ```
>
> Print the entire array.



---

### Question 16 — Access an Object Inside an API Array

> Using your `users` array:
>
> Print the `name` of the **second user**.



---

### Question 17 — API Array With Different Data

> Create an array named `products`.
>
> Add three product objects.
>
> Each object must contain:
> - `id`
> - `name`
> - `price`
>
> Print the price of the third product.


---

### Question 18 — Destructure an Object From an Array

> Create an array:
> ```js
> const books = [
>     { title: "Book A", pages: 200 },
>     { title: "Book B", pages: 350 },
>     { title: "Book C", pages: 150 }
> ]
> ```
>
> Get the second object from the array.
>
> Use destructuring to extract its `title`.
>
> Print the title.


**Expected Output:**
```text
Book B
```

---

### Question 19 — API Array + Function Destructuring

> Create an array containing three user objects.
>
> Create a function named `showUser`.
>
> The function should receive one user object and destructure its `name` property directly in the parameter.
>
> Call the function using the first user.

---

### Question 20 — 🔥 Final Challenge

> Imagine you received this API response:
>
> ```js
> const apiResponse = {
>     username: "dev123",
>     email: "dev@example.com",
>     company: "TechWorld",
>     location: "Ahmedabad"
> }
> ```
>
> Complete the following:
>
> 1. Destructure `username`.
> 2. Destructure `email` and rename it to `userEmail`.
> 3. Create a function called `showProfile`.
> 4. The function should receive the object using parameter destructuring.
> 5. Inside the function, print the `username` and `company`.
>
> **Do not use `apiResponse.username` inside the function.**

**Expected Output:**
```text
dev123
TechWorld
```

---

### 🚀 Bonus Challenge — API Data

> Imagine an API returns this type of data:
>
> ```js
> const response = {
>     users: [
>         {
>             name: "Alex",
>             age: 22
>         },
>         {
>             name: "Sam",
>             age: 25
>         },
>         {
>             name: "John",
>             age: 28
>         }
>     ]
> }
> ```
>
> Your task:
>
> 1. Extract `users` from `response` using destructuring.
> 2. Access the second user.
> 3. Extract that user's `name` using destructuring.
> 4. Print the name.

**Expected Output:**
```text
Sam
```