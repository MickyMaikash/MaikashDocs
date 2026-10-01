# For of and For in Loops

JavaScript provides different loop types for working with **arrays, strings, objects, and other iterable data**.

In this section:

- `for...of`
- `Map`
- `for...in`
- `for...of` vs `for...in`

---

## `for...of` Loop

The `for...of` loop is used to get the **actual values** from an iterable.

It can be used with things such as:

- Arrays
- Strings
- Maps
- Other iterable objects

### Basic Syntax

```js
for (const value of iterable) {
    // code
}
```

### Example With an Array

```js
const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
    console.log(value);
}
```
### Output
```txt
1
2
3
4
5
```

Here, `value` directly contains each element:

```text
1
2
3
4
5
```

---

### `for...of` With a String

Strings can also be iterated character by character.

```js
const greetings = "Hello World";

for (const greet of greetings) {
    console.log(`Each character of greetings is ${greet}`);
}
```

### Output

```text
Each character of greetings is H
Each character of greetings is e
Each character of greetings is l
Each character of greetings is l
Each character of greetings is o
Each character of greetings is  
Each character of greetings is W
Each character of greetings is o
Each character of greetings is r
Each character of greetings is l
Each character of greetings is d
```

So:

```text
for...of → gives values
```

---

## `Map`

A `Map` is a collection of **key-value pairs**.
it is similar to object but no duplicates values

### Creating a Map

```js
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);
```
### Output
```txt
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
```

### Important

A `Map` keeps **unique keys**.

If you use the same key again, its value is replaced:

```js
map.set("IN", "India");
map.set("IN", "Bharat");
```

Now `"IN"` has the value `"Bharat"`.

---

### Looping Through a Map

A `Map` can be used with `for...of`.

```js
for (const [key, value] of map) {
    console.log(key, ":-", value);
}
```

### Output

```text
IN :- India
USA :- United States of America
Fr :- France
```

The destructuring:

```js
[key, value]
```

allows us to directly get both the key and value.

---

## `for...of` With Objects

A normal JavaScript object is **not iterable** by default.

For example:

```js
const myObj = {
    game1: "NFS",
    game2: "Spiderman"
};
```

This does **not** work:

```js
for (const [key, value] of myObj) {
    console.log(key, ":-", value);
}
```
### Output
```txt
for(const [key,value] of  myObj){
                          ^

TypeError: myObj is not iterable
```

A normal object cannot be directly used with `for...of`.

For objects, `for...in` is commonly used.

---

## `for...in` Loop

The `for...in` loop is used to iterate over the **keys** of an object.

### Example With an Object

```js
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "Swift by Apple"
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
```

### Output

```text
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for Swift by Apple
```

Here:

```js
key
```

contains the property name.

To get the value:

```js
myObject[key]
```

---

## `for...in` With an Array

`for...in` can also be used with arrays, but it gives the **indexes**, not the actual values.

```js
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}
```
### Output
```txt
js
rb
py
java
cpp
```
Here:

```text
key = 0
key = 1
key = 2
key = 3
key = 4
```

And:

```js
programming[key]
```

gets the actual value.

---

## 6️⃣ `for...in` With a Map

A `Map` should not be iterated using `for...in`.

```js
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

for (const key in map) {
    console.log(key);
}
```

`for...in` is not the appropriate loop for iterating through the entries of a `Map`.

Use `for...of` instead:

```js
for (const [key, value] of map) {
    console.log(key, ":-", value);
}
```
### Output
```txt
IN :- India
USA :- United States of America
Fr :- France
```
---

## 🧠 `for...of` vs `for...in`

| Loop | Common Use | Gives |
|---|---|---|
| `for...of` | Arrays, strings, Maps | Values |
| `for...in` | Objects | Keys |
| `for...in` with array | Possible, but usually not preferred | Indexes |
| `for...of` with Map | Maps | Key-value entries |

### Easy Way to Remember

```text
for...of  → values
for...in  → keys / indexes
```

---

## ⚡ Quick Revision

```js
// Array → for...of
for (const value of arr) {
    console.log(value);
}
```

```js
// Object → for...in
for (const key in myObject) {
    console.log(myObject[key]);
}
```

```js
// Map → for...of
for (const [key, value] of map) {
    console.log(key, value);
}
```

---

## 📝 Practice

> Try these without looking at the examples above.

### 1. `for...of` With an Array

Given:

```js
const numbers = [4, 8, 12, 16, 20];
```

Use `for...of` to print every value.

---

### 2. `for...of` With a String

Given:

```js
const word = "JavaScript";
```

Print every character using `for...of`.

---

### 3. Count Characters

Given:

```js
const word = "developer";
```

Use `for...of` to count how many characters the string contains.

---

### 4. Find a Value

Given:

```js
const numbers = [11, 23, 7, 19, 42, 8];
```

Use `for...of` to find whether `42` exists.

---

### 5. Print Even Numbers

Given:

```js
const numbers = [3, 8, 11, 14, 21, 26, 30];
```

Use `for...of` to print only the even numbers.

---

### 6. `for...in` With an Object

Given:

```js
const student = {
    name: "Rahul",
    age: 21,
    course: "BCA"
};
```

Use `for...in` to print every key.

---

### 7. Keys and Values

Using the same `student` object, print:

```text
name -> Rahul
age -> 21
course -> BCA
```

---

### 8. Object Value Search

Given:

```js
const products = {
    phone: "Samsung",
    laptop: "Lenovo",
    tablet: "Apple"
};
```

Use `for...in` to check whether any value is `"Apple"`.

---

### 9. Array With `for...in`

Given:

```js
const languages = ["Python", "Java", "C++", "Kotlin"];
```

Use `for...in` to print the indexes.

---

### 10. Array Index + Value

Using the same array, print:

```text
0 -> Python
1 -> Java
2 -> C++
3 -> Kotlin
```

---

### 11. Create a `Map`

Create a `Map` containing three countries and their capitals.

Then print the Map.

---

### 12. Loop Through a `Map`

Use `for...of` to print every key and value from your Map.

---

### 13. Update a Map Value

Create a Map with a key `"IN"`.

Give it one value and then use `.set()` again with the same key and a different value.

Observe what happens.

---

### 14. Map Search

Create a Map containing several products and prices.

Use `for...of` to find a product whose price is greater than `1000`.

---

### 15. String Vowels

Given:

```js
const word = "programming";
```

Use `for...of` to print only the vowels.

---

### 16. Count Vowels

Using:

```js
const word = "javascript";
```

Use `for...of` to count the number of vowels.

---

### 17. Object Values

Given:

```js
const marks = {
    math: 85,
    science: 91,
    english: 78,
    computer: 95
};
```

Use `for...in` to calculate the total marks.

---

### 18. Object Conditions

Using the `marks` object, use `for...in` to print only subjects where the marks are greater than `80`.

---

### 19. `for...of` vs `for...in`

Given:

```js
const cities = ["Mumbai", "Delhi", "Pune", "Jaipur"];
```

Write two loops:

- one using `for...of`
- one using `for...in`

Observe what each loop gives you.

---

### 20. Mixed Challenge

Given:

```js
const numbers = [5, 12, 18, 7, 24, 31, 40];
```

Use `for...of` to:

- print every number
- skip odd numbers
- print only even numbers greater than `10`

---

### 21. Object Challenge

Given:

```js
const employees = {
    emp1: "Frontend Developer",
    emp2: "Android Developer",
    emp3: "Backend Developer",
    emp4: "Data Analyst"
};
```

Use `for...in` to print each employee ID and their role.

---

### 22. Map Challenge

Create a Map containing five programming languages and their creators.

Use `for...of` with destructuring to print:

```text
JavaScript -> Brendan Eich
...
```

---

### 23. Character Challenge

Given:

```js
const sentence = "I love coding";
```

Use `for...of` to count how many times the character `"o"` appears.

---

### 24. Final Challenge

Given:

```js
const scores = [45, 82, 67, 91, 38, 76, 55];
```

Use `for...of` to:

- find scores greater than `70`
- count how many scores are greater than `70`
- calculate their total


## Final Takeaways

- A `for` loop is useful when you know the starting point, condition, and update.
- A `while` loop continues running as long as its condition is `true`.
- A `do...while` loop executes **at least once** before checking its condition.
- A nested loop is a loop placed inside another loop.
- `break` completely stops the loop.
- `continue` skips the current iteration and moves to the next one.
- `for...of` is mainly used to get the **values** from iterables such as arrays and strings.
- `for...in` is commonly used to get the **keys** of an object.
- With arrays, `for...in` gives the **indexes**.
- A normal object is not directly iterable with `for...of`.
- A `Map` stores **key-value pairs** and has unique keys.
- `Map` can be iterated using `for...of`.
- In `for...of`, destructuring can be used with a `Map` to get both the key and value:

```js
for (const [key, value] of map) {
    console.log(key, value);
}
```

### 🧠 Easy Memory Trick

```text
for...of  → values
for...in  → keys / indexes

break     → stop
continue  → skip
```