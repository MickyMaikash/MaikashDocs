# Loops In JavaScript 

Loops are used to **repeat a block of code** multiple times.

The main loops covered here are:

- `for` loop
- `while` loop
- `do...while` loop
- `break` and `continue`

---

## `for` Loop

A `for` loop is commonly used when you know how many times you want to repeat something.

### Basic Syntax

```js
for (initialization; condition; update) {
    // code
}
```

### Example

```js
for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        console.log("5 is best number")
    }

    console.log(element)
}
```
### Output

```text
0
1
2
3
4
5 is best number
5
6
7
8
9
10
```
### How It Works

```text
initialization → condition → code → update
                      ↑        |
                      └────────┘
```

For example:

```js
for (let i = 0; i <= 10; i++)
```

- `let i = 0` → starting value
- `i <= 10` → condition
- `i++` → update after each iteration

---

### Scope Inside a `for` Loop

Variables declared using `let` or `const` inside the loop are available only within that block.

```js
for (let i = 0; i <= 10; i++) {
    const element = i;
}

console.log(element);
```
### output
```txt
console.log(element);
            ^

ReferenceError: element is not defined
```
`element` cannot be accessed outside the loop.

---

## Nested `for` Loop

A loop inside another loop is called a **nested loop**.

```js
for (let i = 1; i <= 4; i++) {

    for (let j = 0; j <= 3; j++) {

        console.log(`innerloop value: ${j} and outer loop ${i}`)

        console.log(i + '*' + j + '=' + i * j)
    }
}
```
### Output
```txt
innerloop value: 0 and outer loop 1
1*0=0
innerloop value: 1 and outer loop 1
1*1=1
innerloop value: 2 and outer loop 1
1*2=2
innerloop value: 3 and outer loop 1
1*3=3
innerloop value: 0 and outer loop 2
2*0=0
innerloop value: 1 and outer loop 2
2*1=2
innerloop value: 2 and outer loop 2
2*2=4
innerloop value: 3 and outer loop 2
2*3=6
innerloop value: 0 and outer loop 3
3*0=0
innerloop value: 1 and outer loop 3
3*1=3
innerloop value: 2 and outer loop 3
3*2=6
innerloop value: 3 and outer loop 3
3*3=9
innerloop value: 0 and outer loop 4
4*0=0
innerloop value: 1 and outer loop 4
4*1=4
innerloop value: 2 and outer loop 4
4*2=8
innerloop value: 3 and outer loop 4
4*3=12
```

### How It Works

For every one iteration of the outer loop, the inner loop runs completely.

```text
Outer Loop
   ↓
Inner Loop
   ↓
Runs completely
   ↓
Outer Loop moves to next iteration
```

---

## Looping Through an Array

A `for` loop can be used to access every element of an array.

```js
let myarr = ["flash", "batman", "superman"];

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];

    console.log(element)
}
```
### Output
```txt
flash
batman
superman
```
### Important

```js
myarr.length
```

gives the number of elements in the array.

```js
myarr[index]
```

accesses the element at the current index.

```text
index    value
  0      flash
  1      batman
  2      superman
```

---

## `break` & `continue`

### `break`

`break` is used to **completely stop the loop**.

```js
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        break;
    }

    console.log(`value of i is ${index}`);
}
```

### Output

```text
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
```

Once `break` executes, the loop ends immediately.

---

### `continue`

`continue` **skips the current iteration** and moves to the next iteration.

```js
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        continue;
    }

    console.log(`value of i is ${index}`);
}
```

When `index` becomes `5`, that iteration is skipped.

### Difference

```text
break     → stop the entire loop

continue  → skip the current iteration
             and move to the next iteration
```

---

## `while` Loop

A `while` loop runs **as long as its condition is true**.

### Basic Syntax

```js
while (condition) {
    // code
}
```

### Example

```js
let index = 0;

while (index <= 10) {
    console.log(`value of index ${index}`);
    index += 2;
}
```
### Output
```txt
value of index 0
value of index 2
value of index 4
value of index 6
value of index 8
value of index 10
```
Here:

```js
index += 2;
```

increases `index` by `2` after every iteration.

---

### `while` Loop With an Array

```js
let myARr = ["flash", "batman", "superman"];

let arr = 0;

while (arr < myARr.length) {

    console.log(`value is ${myARr[arr]}`)

    arr++;
}
```
### Output
```txt
value is flash
value is batman
value is superman
```

The variable `arr` is used as the array index.

```text
arr = 0 → flash
arr = 1 → batman
arr = 2 → superman
```

---

## `do...while` Loop

A `do...while` loop executes the code **at least once**, even if the condition is false.

### Basic Syntax

```js
do {
    // code
} while (condition);
```

### Example

```js
let score = 11;

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);
```

### Output

```text
score is 11
```

Even though:

```js
score <= 10
```

is already `false`, the code inside `do` runs once before the condition is checked.

---

## 🧠 Quick Revision

| Concept | Purpose |
|---|---|
| `for` | Repeat code using initialization, condition and update |
| Nested loop | Loop inside another loop |
| Array loop | Access array elements using an index |
| `break` | Completely stop the loop |
| `continue` | Skip the current iteration |
| `while` | Repeat while a condition is true |
| `do...while` | Run once before checking the condition |

---
## 📝 Practice

> Try these without looking at the examples above.

### 1. Basic `for` Loop

Print numbers from `3` to `17`.

---

### 2. Counting Backwards

Use a `for` loop to print numbers from `25` down to `10`.

---

### 3. Odd Numbers

Print all odd numbers between `1` and `30`.

---

### 4. Multiples of a Number

Print all multiples of `4` between `1` and `40`.

---

### 5. Sum of Numbers

Use a `for` loop to calculate the sum of numbers from `1` to `50`.

---

### 6. Multiplication Table

Use a `for` loop to print the multiplication table of `7`.

Expected format:

```text
7 x 1 = 7
7 x 2 = 14
...
```

---

### 7. Array Traversal

Given:

```js
let colors = ["red", "blue", "green", "yellow", "purple"];
```

Use a `for` loop to print every element.

---

### 8. Array Indexes

Given:

```js
let cities = ["London", "Tokyo", "Paris", "Dubai"];
```

Print both the **index** and the **value** of every element.

---

### 9. Array Numbers

Given:

```js
let numbers = [12, 5, 27, 8, 19, 34];
```

Use a loop to calculate the sum of all numbers.

---

### 10. Find a Value

Given:

```js
let animals = ["cat", "dog", "lion", "tiger", "rabbit"];
```

Use a loop to check whether `"lion"` exists in the array.

---

### 11. `break`

Print numbers from `1` to `50`, but stop the loop when the number becomes `27`.

---

### 12. `continue`

Print numbers from `1` to `20`, but skip all numbers divisible by `3`.

---

### 13. `break` With an Array

Given:

```js
let users = ["Alex", "John", "Sara", "Mike", "David"];
```

Loop through the array and stop when `"Mike"` is found.

---

### 14. Nested Loop

Create nested loops that produce:

```text
1 1
1 2
1 3
1 4
2 1
2 2
2 3
2 4
```

---

### 15. Nested Loop Pattern

Use nested loops to print:

```text
*
**
***
****
*****
```

---

### 16. Nested Loop Pattern

Use nested loops to print:

```text
1
12
123
1234
12345
```

---

### 17. `while` Loop

Use a `while` loop to print numbers from `2` to `20`, increasing by `2`.

---

### 18. `while` Loop With an Array

Given:

```js
let games = ["chess", "cricket", "football", "tennis"];
```

Use a `while` loop to print every game.

---

### 19. `while` Loop With a Condition

Start with:

```js
let number = 100;
```

Use a `while` loop to keep subtracting `10` until the number becomes `0`.

---

### 20. `while` Loop — Reverse

Start with:

```js
let count = 10;
```

Use a `while` loop to print numbers from `10` down to `1`.

---

### 21. `do...while`

Create a `do...while` loop that prints `"Hello JavaScript"` five times.

---

### 22. `do...while` Condition

Start with:

```js
let value = 50;
```

Create a `do...while` loop that decreases the value by `10` each time until it becomes less than `10`.

---

### 23. Find the First Even Number

Given:

```js
let numbers = [7, 13, 9, 15, 22, 18, 4];
```

Use a loop to find the **first even number** and stop the loop using `break`.

---

### 24. Skip Specific Values

Given:

```js
let numbers = [2, 4, 6, 7, 8, 10, 13, 14];
```

Use a loop to print all numbers except `7` and `13`.

Use `continue`.

---

### 25. Count Positive Numbers

Given:

```js
let numbers = [-4, 8, -2, 15, 7, -9, 3];
```

Use a loop to count how many numbers are positive.

---

### 26. Find the Largest Number

Given:

```js
let numbers = [14, 72, 31, 89, 45, 6];
```

Use a loop to find the largest number.

---

### 27. Reverse an Array

Given:

```js
let fruits = ["apple", "banana", "mango", "orange"];
```

Use a loop to print the elements in reverse order.

---

### 28. Count a Specific Value

Given:

```js
let numbers = [2, 5, 2, 8, 2, 9, 4, 2];
```

Use a loop to count how many times `2` appears.

---

### 29. Nested Loop — Multiplication Tables

Use nested loops to print multiplication tables from `1` to `5`.

---

### 30. Mixed Challenge

Given:

```js
let numbers = [3, 8, 12, 15, 21, 24, 30];
```

Use a loop to:

- skip numbers divisible by `3`
- stop completely if a number greater than `25` is reached
- print the remaining numbers

Use both `continue` and `break`.