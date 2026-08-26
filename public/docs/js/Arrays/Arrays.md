# Arrays in JavaScript

> **Array** is an object used to store multiple values in a single variable.

> Array indexing starts from `0`.

> This means the first element is at index `0`, the second element is at index `1`, and so on.

---

## Ways to Initialize an Array

### Using Array Literal

> The most common way to create an array is by using square brackets `[]`.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr)
```

**Output**

```text
[ 0, 1, 2, 3, 4, 5 ]
```

> In this array:

```text
index →  0  1  2  3  4  5
value →  0  1  2  3  4  5
```

> We can access an element using its index.

**Example**

```js
console.log(myArr[2])
```

**Output**

```text
2
```

---

### Using Array Constructor

> We can also create an array using the `Array` constructor.

**Example**

```js
const myArr2 = new Array(2, 3, 4, 8, 9)

console.log(myArr2)
```

**Output**

```text
[ 2, 3, 4, 8, 9 ]
```

> Both ways can be used, but array literals `[]` are generally preferred because they are simpler and more commonly used.

---

### Array with Strings

> An array can contain strings as well as other types of values.

**Example**

```js
const myGame = ["typinggames", "monkeytype"]

console.log(myGame)
```

**Output**

```text
[ 'typinggames', 'monkeytype' ]
```

---

# Commonly Used Array Methods

---

### push()

> `push()` is used to add one or more elements to the **end** of an array.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

myArr.push(6)

console.log(myArr)
```

**Output**

```text
[ 0, 1, 2, 3, 4, 5, 6 ]
```

> `push()` changes the original array.

---

### pop()

> `pop()` is used to remove the last element from an array.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

myArr.pop()

console.log(myArr)
```

**Output**

```text
[ 0, 1, 2, 3, 4 ]
```

> `pop()` changes the original array.

> It returns the element that was removed.

---

### unshift()

> `unshift()` is used to add one or more elements to the **beginning** of an array.

**Example**

```js
const myArr = [1, 2, 3]

myArr.unshift(0)

console.log(myArr)
```

**Output**

```text
[ 0, 1, 2, 3 ]
```

> `unshift()` changes the original array.

---

### shift()

> `shift()` is used to remove the first element from an array.

**Example**

```js
const myArr = [1, 2, 3, 4]

myArr.shift()

console.log(myArr)
```

**Output**

```text
[ 2, 3, 4 ]
```

> `shift()` changes the original array.

> It returns the element that was removed.

---

### includes()

> `includes()` checks whether a particular value exists in an array.

> It returns `true` if the value exists and `false` if it does not exist.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr.includes(3))

console.log(myArr.includes(9))
```

**Output**

```text
true

false
```

---

### indexOf()

> `indexOf()` returns the index of the first occurrence of a specified value.

> If the value does not exist in the array, it returns `-1`.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr.indexOf(3))

console.log(myArr.indexOf(9))
```

**Output**

```text
3

-1
```

---

### join()

> `join()` converts all the elements of an array into a string and joins them using the separator we provide.

> If no separator is provided, the default separator is a comma `,`.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

const newArr = myArr.join()

console.log(myArr)

console.log(newArr)

console.log(typeof myArr)

console.log(typeof newArr)
```

**Output**

```text
[ 0, 1, 2, 3, 4, 5 ]

0,1,2,3,4,5

object

string
```

> We can also provide our own separator.

**Example**

```js
const myArr = [1, 2, 3, 4]

console.log(myArr.join("-"))
```

**Output**

```text
1-2-3-4
```

---

# slice() and splice()

> `slice()` and `splice()` are commonly confused because their names are similar.

> The main difference is:

```text
slice()  → does not change the original array
splice() → changes the original array
```

---

### slice()

> `slice()` returns a copy of a portion of an array.

> The first value is the starting index.

> The second value is the ending index.

> The ending index is **not included**.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)

console.log("B", myArr)
```

**Output**

```text
A [ 0, 1, 2, 3, 4, 5 ]

[ 1, 2 ]

B [ 0, 1, 2, 3, 4, 5 ]
```

> `slice(1, 3)` starts from index `1` and stops before index `3`.

```text
index →  0  1  2  3  4  5
value →  0  1  2  3  4  5
            ↑  ↑
            1  2
```

> Therefore, the result is `[1, 2]`.

> The original array remains unchanged.

---

### splice()

> `splice()` is used to add, remove, or replace elements in an array.

> Unlike `slice()`, `splice()` **changes the original array**.

> When used as `splice(start, deleteCount)`, it removes elements starting from the given index.

**Example**

```js
const myArr = [0, 1, 2, 3, 4, 5]

console.log("A", myArr)

const myn2 = myArr.splice(1, 3)

console.log("B", myArr)

console.log(myn2)
```

**Output**

```text
A [ 0, 1, 2, 3, 4, 5 ]

B [ 0, 4, 5 ]

[ 1, 2, 3 ]
```

> `splice(1, 3)` means:

```text
1 → starting index
3 → number of elements to remove
```

> Therefore, elements `1`, `2`, and `3` are removed from the original array.

> The removed elements are returned as a new array.

---

# Combining Arrays

### push() with an Array

> `push()` can also be used to add an entire array as an element of another array.

> In this case, the second array becomes a nested array inside the first array.

**Example**

```js
const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["flash", "superman"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes)
```

**Output**

```text
[ 'thor', 'Ironman', 'spiderman', [ 'flash', 'superman' ] ]
```

> Here, `dc_heroes` is added as a **single element** inside `marvel_heroes`.

> Therefore, the resulting array contains another array inside it.

> We can access the elements of the nested array using two indexes.

**Example**

```js
console.log(marvel_heroes[3][1])
```

**Output**

```text
superman
```

> `marvel_heroes[3]` gives the nested `dc_heroes` array.

> `[1]` then accesses the second element of that nested array.

---

# Methods of Merging Arrays

### concat()

> `concat()` is used to merge two or more arrays.

> `concat()` does not change the original arrays. It returns a **new array** containing the merged elements.

**Example**

```js
const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["flash", "superman"]

const mergedArray = marvel_heroes.concat(dc_heroes)

console.log(mergedArray)
```

**Output**

```text
[ 'thor', 'Ironman', 'spiderman', 'flash', 'superman' ]
```

> Unlike `push()`, `concat()` does not add the second array as a nested array.

---

### Spread Operator

> The spread operator `...` can also be used to merge arrays.

> It expands the elements of an array and puts them into another array.

**Example**

```js
const marvel_heroes = ["thor", "Ironman", "spiderman"]

const dc_heroes = ["flash", "superman"]

const newMergedArray = [...marvel_heroes, ...dc_heroes]

console.log(newMergedArray)
```

**Output**

```text
[ 'thor', 'Ironman', 'spiderman', 'flash', 'superman' ]
```

> The spread operator also creates a new array and does not modify the original arrays.

---

# flat()

### Array.flat()

> `flat()` is used to flatten nested arrays.

> It removes the specified level of nested arrays and returns a new array.

**Example**

```js
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnArray = anotherArray.flat(3)

console.log(realAnArray)
```

**Output**

```text
[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
```

> `flat(3)` means flatten up to **3 levels** of nested arrays.

> `flat()` returns a **new array** and does not modify the original array.

---

### flat() with Different Depths

> We can specify how many levels of nesting should be flattened.

**Example**

```js
const arr = [1, [2, [3, [4]]]]

console.log(arr.flat(1))

console.log(arr.flat(2))

console.log(arr.flat(3))
```

**Output**

```text
[ 1, 2, [ 3, [ 4 ] ] ]

[ 1, 2, 3, [ 4 ] ]

[ 1, 2, 3, 4 ]
```

> We can also use `Infinity` when we want to flatten all levels of nesting.

**Example**

```js
const arr = [1, [2, [3, [4, [5]]]]]

console.log(arr.flat(Infinity))
```

**Output**

```text
[ 1, 2, 3, 4, 5 ]
```

---

# Creating Arrays from Values

### Array.isArray()

> `Array.isArray()` is used to check whether a given value is an array or not.

> It returns a Boolean value: `true` or `false`.

**Example**

```js
console.log(Array.isArray("codestarter"))

console.log(Array.isArray([1, 2, 3]))
```

**Output**

```text
false

true
```

> `"codestarter"` is a string, so the result is `false`.

> `[1, 2, 3]` is an array, so the result is `true`.

---

### Array.from()

> `Array.from()` creates a new array from an iterable or array-like value.

> It is commonly used to convert strings into arrays.

**Example**

```js
console.log(Array.from("micky"))
```

**Output**

```text
[ 'm', 'i', 'c', 'k', 'y' ]
```

> Each character of the string becomes an individual element of the array.

---

### Array.from() with an Object

> `Array.from()` does not automatically convert a normal object into an array of its keys or values.

**Example**

```js
console.log(Array.from({ name: "micky" }))
```

**Output**

```text
[]
```

> A normal object is not directly iterable, so `Array.from()` returns an empty array in this case.

> If we want the keys or values of an object as an array, we can use `Object.keys()` or `Object.values()`.

**Example**

```js
const user = {
    name: "micky",
    age: 20
}

console.log(Object.keys(user))

console.log(Object.values(user))
```

**Output**

```text
[ 'name', 'age' ]

[ 'micky', 20 ]
```

---

### Array.of()

> `Array.of()` creates a new array from a set of values provided as arguments.

**Example**

```js
let score1 = 200

let score2 = 300

let score3 = 400

console.log(Array.of(score1, score2, score3))
```

**Output**

```text
[ 200, 300, 400 ]
```

> The values passed to `Array.of()` become the elements of the new array.

---

# Quick Reference

| Method / Operator | Purpose |
|---|---|
| `push()` | Adds elements to the end |
| `pop()` | Removes the last element |
| `unshift()` | Adds elements to the beginning |
| `shift()` | Removes the first element |
| `includes()` | Checks whether a value exists |
| `indexOf()` | Finds the index of a value |
| `join()` | Converts array elements into a string |
| `slice()` | Copies a portion of an array |
| `splice()` | Adds, removes, or replaces elements |
| `concat()` | Merges arrays and returns a new array |
| `...` | Expands array elements and can be used to merge arrays |
| `flat()` | Flattens nested arrays |
| `Array.isArray()` | Checks whether a value is an array |
| `Array.from()` | Creates an array from an iterable or array-like value |
| `Array.of()` | Creates an array from a set of values |

---

# Array Practice Questions

> These questions are designed to make you **write code**, not simply predict the output.

---

### Question 1 — Create and Access an Array

> Create an array containing the numbers:

```text
10, 20, 30, 40, 50
```

> Write code to print the first, third, and last elements of the array using their indexes.

---

### Question 2 — Add and Remove Elements

> Create an array containing:

```text
"HTML", "CSS", "JavaScript"
```

> Perform the following operations:

- Add `"React"` to the end.
- Add `"Git"` to the beginning.
- Remove the last element.
- Remove the first element.
- Print the final array.

---

### Question 3 — Check a Value

> Create an array containing five programming languages.

> Ask the array whether `"JavaScript"` exists in it.

> Print the Boolean result using `includes()`.

---

### Question 4 — Find an Element's Index

> Create an array of numbers from `10` to `50`.

> Find the index of the number `30` using `indexOf()`.

> Also check the index of a number that does not exist in the array.

---

### Question 5 — Convert Array to String

> Create an array containing:

```text
"Apple", "Banana", "Mango", "Orange"
```

> Convert the array into a string using `join()`.

> Use `-` as the separator.

> Expected format:

```text
Apple-Banana-Mango-Orange
```

---

### Question 6 — Copy Part of an Array

> Create an array containing numbers from `1` to `10`.

> Use `slice()` to create a new array containing only the numbers from index `2` to index `5`.

> Remember that the ending index is not included.

---

### Question 7 — Remove Elements Using splice()

> Create this array:

```js
const numbers = [10, 20, 30, 40, 50, 60]
```

> Use `splice()` to remove `30` and `40`.

> Print both:

- The original array after removal.
- The array containing the removed elements.

---

### Question 8 — Insert Elements Using splice()

> Create this array:

```js
const numbers = [10, 20, 50, 60]
```

> Use `splice()` to insert `30` and `40` between `20` and `50`.

> The final array should be:

```text
[10, 20, 30, 40, 50, 60]
```

---

### Question 9 — Merge Two Arrays

> Create two arrays:

```text
Frontend → HTML, CSS, JavaScript
Backend → Node.js, Express
```

> Merge both arrays into a new array.

> Do this using `concat()`.

> Then do the same thing using the spread operator `...`.

---

### Question 10 — Nested Array

> Create two arrays containing different superhero names.

> Add the second array into the first array using `push()`.

> Then use two indexes to access one particular superhero from the nested array.

---

### Question 11 — Flatten an Array

> Create the following nested array:

```js
const numbers = [1, [2, 3], [4, [5, 6]], 7]
```

> Use `flat()` to convert it into a single-level array.

> Expected result:

```text
[1, 2, 3, 4, 5, 6, 7]
```

---

### Question 12 — Check Different Values

> Create an array containing different values.

> Use `Array.isArray()` to check:

- Whether the array itself is an array.
- Whether a string is an array.
- Whether an object is an array.

> Print all three results.

---

### Question 13 — Convert String to Array

> Create a string containing your name.

> Use `Array.from()` to convert every character of the string into an individual array element.

> For example:

```text
"hello"
```

> should become:

```text
["h", "e", "l", "l", "o"]
```

---

### Question 14 — Create Array from Variables

> Create three variables containing marks for three subjects.

```js
const math = 85
const science = 78
const english = 92
```

> Use `Array.of()` to create an array containing all three marks.

---

### Question 15 — Movie Collection

> Create an array containing the names of five movies.

> Perform the following operations:

- Add one movie to the end.
- Add one movie to the beginning.
- Remove the last movie.
- Check whether a particular movie exists.
- Find the index of a particular movie.
- Convert the final array into a string separated by `, `.

---

### Question 16 — Shopping Cart

> Create an array representing a shopping cart:

```text
"Mouse", "Keyboard", "Monitor"
```

> Perform the following operations:

- Add `"Headphones"` to the end.
- Add `"USB Cable"` to the beginning.
- Remove `"Monitor"` using `splice()`.
- Check whether `"Keyboard"` exists.
- Print the final shopping cart.

---

### Question 17 — Merge and Flatten

> Create the following arrays:

```js
const frontend = ["HTML", "CSS"]

const backend = ["Node.js", "Express"]

const database = ["MongoDB", ["MySQL", "PostgreSQL"]]
```

> Merge all three arrays into one array using the spread operator.

> Then flatten the resulting array so that `"MySQL"` and `"PostgreSQL"` are no longer inside a nested array.

---

### Question 18 — Remove Duplicates

> Create an array containing duplicate numbers:

```js
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6]
```

> Try to create a new array containing only unique values.

> You can research a suitable JavaScript feature if you have not learned one yet.

---

### Question 19 — Find a User

> Create an array containing usernames:

```text
"micky", "rahul", "jay", "aman", "rohit"
```

> Ask the array whether a username entered by the user exists.

> If it exists, print its index.

> If it does not exist, print:

```text
User not found
```

---

### Question 20 — Mini Array Manager

> Create an array containing some numbers.

> Write a program that performs all of the following operations:

- Add a number at the end.
- Add a number at the beginning.
- Remove the last number.
- Remove the first number.
- Check whether a particular number exists.
- Find the index of a particular number.
- Create a copy of part of the array using `slice()`.
- Remove some elements using `splice()`.
- Convert the final array into a string using `join()`.

> Print the array after each important operation so that you can see how the original array changes.

---
