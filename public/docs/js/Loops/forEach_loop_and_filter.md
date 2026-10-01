# forEach( ) loop and filter( )

## `forEach()` Loop

`forEach()` is an array method used to execute a function once for **each element** of an array.

### Basic Syntax

```js
array.forEach(function (item) {
    // code
});
```

---

### `forEach()` With a Callback Function
> callback function do not have name
```js
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (item) {
    console.log(item);
});
```
### Output
```txt
js
ruby
java
python
cpp
```

The function passed to `forEach()` is a **callback function**.

---

### `forEach()` With an Arrow Function

```js
coding.forEach((item) => {
    console.log(item);
});
```
### Output
```txt
js
ruby
java
python
cpp
```

This is a shorter way to write the callback function.

---

### Passing a Function to `forEach()`

The callback function can also be defined separately.

```js
function printme(item) {
    console.log(item);
}

coding.forEach(printme);
```
### Output
```txt
js
ruby
java
python
cpp
```

Here, `printme` is passed as a function reference.

Do **not** call it:

```js
coding.forEach(printme());
```

---

### `forEach()` Callback Parameters

The callback can receive:

1. `item` → current element
2. `index` → current index
3. `arr` → original array

```js
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});
```
### Output
```txt
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
```


---

## `forEach()` With an Array of Objects

`forEach()` is especially useful when working with arrays containing objects.

```js
const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "java",
        languagefilename: "java"
    }
];

mycoding.forEach((item) => {
    console.log(item.languagename);
});
```
### Output
```txt
javascript
python
java
```
Here:

```js
item.languagename
```

accesses the `languagename` property of each object.

---

## `forEach()` Does Not Return an Array

`forEach()` is used to perform an action for each element, but it does **not return a new array**.

```js
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    return item;
});

console.log(values);
```

The result is:

```text
undefined
```

So remember:

```text
forEach() → performs an action
           → does not return a new array
```

---

## `filter()`

`filter()` is used when you want to create a **new array containing only the elements that satisfy a condition**.

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);

console.log(newNums);
```

### Output

```text
[5, 6, 7, 8, 9, 10]
```

The condition:

```js
num > 4
```

determines which elements are included.

---

### `filter()` With a Block Body

When using `{ }`, you need to explicitly return the condition.

```js
const newNums = myNums.filter((num) => {
    return num > 4;
});
console.log(newNums)
```
### Output
```txt
[ 5, 6, 7, 8, 9, 10 ]
```

Compare:

```js
// Implicit return
const newNums = myNums.filter((num) => num > 4);
```

```js
// Explicit return
const newNums = myNums.filter((num) => {
    return num > 4;
});
```

Both produce the same result.

---

## Using `forEach()` Instead of `filter()`

You can achieve similar filtering manually with `forEach()`.

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);
```

Output:

```text
[5, 6, 7, 8, 9, 10]
```

Here, we manually create an array and use `.push()` to add matching values.

### Difference

```text
filter()
   ↓
creates and returns a new array


forEach()
   ↓
does not create/return the filtered array automatically
   ↓
you have to create an array and push values yourself
```

---

## `filter()` With an Array of Objects

`filter()` becomes especially useful when working with an array of objects.

```js
const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 }
];
```

### Filtering by One Condition

```js
let userBooks = books.filter((bk) => bk.genre === "History");

console.log(userBooks);
```
### Output
```txt
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
```
This returns only books whose genre is `"History"`.

---

### Filtering by Multiple Conditions

```js
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
```
### Output
```txt
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
```

Here both conditions must be true:

```js
bk.publish >= 1995
```

and

```js
bk.genre === "History"
```

So only books satisfying **both conditions** are returned.

---

## 🧠 Quick Revision

| Method | Purpose | Returns |
|---|---|---|
| `forEach()` | Perform an action for every element | `undefined` |
| `filter()` | Select elements that satisfy a condition | New array |
| `push()` | Add an element to an array | New array length |

### `forEach()` Callback

```js
array.forEach((item, index, arr) => {
    // code
});
```

### `filter()`

```js
const result = array.filter((item) => condition);
```

---

## Final Takeaways

- `forEach()` runs a callback once for every array element.
- The callback can receive `item`, `index`, and `arr`.
- A callback function can be written inline or passed as a separate function.
- `forEach()` does **not** return a new array.
- `filter()` creates and returns a **new array**.
- `filter()` keeps elements for which the condition is `true`.
- When using `{ }` with `filter()`, use `return` if you want to return the condition.
- `forEach()` can be used with arrays of objects.
- `filter()` is useful for selecting specific objects from an array.
- Multiple conditions can be combined using operators such as `&&`.

### 🧠 Easy Memory Trick

```text
forEach() → Do something with every element

filter()  → Keep the elements that match
```

---

## 📝 Practice

> Try these without looking at the examples above.

### 1. Basic `forEach()`

Given:

```js
const numbers = [4, 7, 12, 19, 25];
```

Use `forEach()` to print every number.

---

### 2. Double the Values

Given:

```js
const numbers = [3, 6, 9, 12];
```

Use `forEach()` to print each number multiplied by `2`.

---

### 3. Index and Value

Given:

```js
const animals = ["dog", "cat", "horse", "rabbit"];
```

Use `forEach()` to print both the index and value.

---

### 4. Separate Callback

Create a function called `showName` and pass it to `forEach()` to print every name from:

```js
const names = ["Amit", "Riya", "Karan", "Neha"];
```

---

### 5. Array of Objects

Given:

```js
const users = [
    { name: "A", age: 21 },
    { name: "B", age: 25 },
    { name: "C", age: 19 }
];
```

Use `forEach()` to print only the names.

---

### 6. `filter()` Basic

Given:

```js
const numbers = [7, 14, 21, 28, 35, 42];
```

Use `filter()` to create a new array containing numbers greater than `20`.

---

### 7. Even Numbers

Given:

```js
const numbers = [11, 18, 23, 30, 41, 52];
```

Use `filter()` to create an array containing only even numbers.

---

### 8. Short Words

Given:

```js
const words = ["cat", "elephant", "dog", "tiger", "ant"];
```

Use `filter()` to keep words whose length is less than `5`.

---

### 9. Array of Objects

Given:

```js
const products = [
    { name: "Phone", price: 15000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 12000 }
];
```

Use `filter()` to find products with a price greater than `5000`.

---

### 10. Multiple Conditions

Using the same `products` array, find products whose:

- price is greater than `1000`
- price is less than `15000`

---

### 11. Filter by Property

Given:

```js
const students = [
    { name: "Raj", course: "BCA" },
    { name: "Maya", course: "BSc" },
    { name: "Dev", course: "BCA" },
    { name: "Sara", course: "BCom" }
];
```

Use `filter()` to get only BCA students.

---

### 12. Filter by Age

Using the same `students` array after adding an `age` property, filter students who are `18` or older.

---

### 13. Manual Filtering

Given:

```js
const numbers = [5, 10, 15, 20, 25, 30];
```

Use `forEach()` and `push()` to create a new array containing only numbers greater than `15`.

---

### 14. Compare `forEach()` and `filter()`

Take an array of numbers and perform the same filtering task twice:

1. Using `filter()`
2. Using `forEach()` + `push()`

Compare the two approaches.

---

### 15. Book Challenge

Create an array of objects containing at least five books.

Each book should have:

```text
title
genre
price
```

Use `filter()` to find books belonging to one particular genre.

---

### 16. Book Price Challenge

Using your books array, find books whose price is greater than `500`.

---

### 17. Combined Conditions

Using your books array, find books that:

- belong to `"Science"`
- cost less than `1000`

---

### 18. Count Matching Values

Given:

```js
const numbers = [4, 9, 12, 15, 18, 21, 24, 27];
```

Use `filter()` to create an array containing numbers divisible by `3`.

Then find the number of matching elements.

---

### 19. Object Data Challenge

Given:

```js
const employees = [
    { name: "John", department: "IT", salary: 50000 },
    { name: "Sara", department: "HR", salary: 42000 },
    { name: "Mike", department: "IT", salary: 65000 },
    { name: "Anna", department: "Sales", salary: 48000 }
];
```

Use `filter()` to find employees from the `"IT"` department.

---

### 20. Final Challenge

Using the same `employees` array, find employees who:

- work in `"IT"`
- have a salary greater than `55000`

Then use `forEach()` to print only their names.