# map( ) and reduce( )

## `map()`

`map()` is generally used when we want to **apply an operation to every element** of an array.

It returns a **new array** containing the results.

### Basic Example

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10);

console.log(newNums);
```

Here, `10` is added to every element.

```text
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
```

### 🧠 Important

```text
map()
  ↓
takes every element
  ↓
applies an operation
  ↓
returns a new array
```

---

## Method Chaining

JavaScript array methods can be chained together.

For example:

```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

console.log(newNums);
```

### How It Works

First:

```js
.map((num) => num * 10)
```

```text
[1,2,3,4,5,6,7,8,9,10]

        ↓ ×10

[10,20,30,40,50,60,70,80,90,100]
```

Then:

```js
.map((num) => num + 1)
```

```text
[11,21,31,41,51,61,71,81,91,101]
```

Then:

```js
.filter((num) => num >= 40)
```

```text
[41,51,61,71,81,91,101]
```

### 🧠 Key Idea

Each method works with the **result returned by the previous method**.

```text
Original Array
      ↓
    map()
      ↓
 New Array
      ↓
    map()
      ↓
 New Array
      ↓
  filter()
      ↓
 Final Array
```

---

## `reduce()`

`reduce()` is generally used when we want to **combine the elements of an array into a single result**.

For example, we can use it to calculate a total.

### Basic Syntax

```js
array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);
```

Two important values are:

- `acc` → accumulator
- `cr` → current value

---

### Example

```js
const myNums = [1, 2, 3];

const total = myNums.reduce((acc, cr) => {
    console.log(`acc: ${acc} and cr: ${cr}`);
    return acc + cr;
}, 0);

console.log(total);
```

### How It Works

The initial accumulator is:

```text
acc = 0
```

Then:

```text
acc = 0, cr = 1 → 1
acc = 1, cr = 2 → 3
acc = 3, cr = 3 → 6
```

Final result:

```text
6
```

---

### Shorter Syntax

The same operation can be written more shortly:

```js
const total = myNums.reduce((acc, cr) => acc + cr, 0);

console.log(total);
```

---

## `reduce()` With an Array of Objects

`reduce()` is especially useful when we need to calculate a total from an array of objects.

```js
const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python",
        price: 999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 12999
    }
];
```

We can calculate the total price:

```js
const total = shoppingCart.reduce(
    (acc, num) => acc + num.price,
    0
);

console.log(total);
```

### How It Works

The accumulator starts at:

```text
0
```

Then the prices are added one by one:

```text
0 + 2999
2999 + 999
3998 + 5999
9997 + 12999
```

Final result:

```text
22996
```

---

## 🧠 Quick Revision

| Method | Main Purpose | Returns |
|---|---|---|
| `forEach()` | Perform an action for every element | `undefined` |
| `filter()` | Keep elements that satisfy a condition | New array |
| `map()` | Transform every element | New array |
| `reduce()` | Combine elements into one result | Single value |
| Method chaining | Perform multiple array operations | Depends on final method |

### Easy Memory Trick

```text
forEach() → DO something

filter()  → KEEP something

map()     → CHANGE something

reduce()  → COMBINE something
```

---

## Final Takeaways

- `map()` applies an operation to every element.
- `map()` returns a **new array**.
- `filter()` returns a new array containing elements that satisfy a condition.
- Array methods can be chained together.
- In method chaining, each method works with the result of the previous method.
- `reduce()` is useful when combining array elements into a single result.
- `reduce()` commonly uses an **accumulator** and **current value**.
- The second argument of `reduce()` can provide the initial accumulator value.
- `reduce()` is useful for calculating totals from arrays of objects.

### 🧠 Remember

```text
map     → transform
filter  → select
reduce  → combine
```

---

## 📝 Practice

> Try these without looking at the examples above.

### 1. Basic `map()`

Given:

```js
const numbers = [2, 4, 6, 8, 10];
```

Use `map()` to multiply every number by `3`.

---

### 2. Add a Value

Given:

```js
const numbers = [5, 10, 15, 20];
```

Use `map()` to add `7` to every number.

---

### 3. Convert Values

Given:

```js
const prices = [100, 250, 500, 750];
```

Use `map()` to add `18%` to every price.

---

### 4. String Transformation

Given:

```js
const names = ["alex", "john", "sara", "mike"];
```

Use `map()` to convert every name to uppercase.

---

### 5. Object Transformation

Given:

```js
const users = [
    { name: "Alex", age: 20 },
    { name: "Sara", age: 24 },
    { name: "John", age: 19 }
];
```

Use `map()` to create a new array containing only the names.

---

### 6. `map()` + `filter()`

Given:

```js
const numbers = [3, 8, 12, 15, 20, 25];
```

Use:

1. `map()` to multiply every number by `2`
2. `filter()` to keep values greater than `20`

---

### 7. Multiple `map()` Calls

Given:

```js
const numbers = [1, 2, 3, 4, 5];
```

Use two `map()` calls:

- First multiply each number by `5`
- Then add `2`

---

### 8. Basic `reduce()`

Given:

```js
const numbers = [10, 20, 30, 40];
```

Use `reduce()` to calculate the total.

---

### 9. Product of Numbers

Given:

```js
const numbers = [2, 3, 4, 5];
```

Use `reduce()` to calculate the product of all numbers.

---

### 10. Find the Largest Value

Given:

```js
const numbers = [18, 42, 7, 91, 35, 64];
```

Use `reduce()` to find the largest number.

---

### 11. Shopping Cart Total

Given:

```js
const cart = [
    { item: "Mouse", price: 800 },
    { item: "Keyboard", price: 1500 },
    { item: "Headphones", price: 2200 }
];
```

Use `reduce()` to calculate the total price.

---

### 12. Count Values

Given:

```js
const numbers = [2, 5, 2, 8, 2, 9, 5, 2];
```

Use `reduce()` to count how many times `2` appears.

---

### 13. `filter()` + `map()`

Given:

```js
const products = [
    { name: "Phone", price: 15000 },
    { name: "Mouse", price: 800 },
    { name: "Laptop", price: 60000 },
    { name: "Keyboard", price: 2000 }
];
```

Use:

- `filter()` to keep products costing more than `5000`
- `map()` to create an array containing only their names

---

### 14. `map()` + `filter()` + `reduce()`

Given:

```js
const numbers = [5, 10, 15, 20, 25, 30];
```

Use:

1. `map()` to multiply every number by `2`
2. `filter()` to keep values greater than `30`
3. `reduce()` to calculate their total

---

### 15. Course Prices

Given:

```js
const courses = [
    { name: "JavaScript", price: 2000 },
    { name: "Python", price: 3000 },
    { name: "Android", price: 5000 }
];
```

Use `reduce()` to calculate the total price of all courses.

---

### 16. Final Challenge

Given:

```js
const products = [
    { name: "Phone", price: 12000 },
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 900 },
    { name: "Monitor", price: 15000 },
    { name: "Keyboard", price: 2500 }
];
```

Use method chaining to:

1. Filter products costing more than `5000`
2. Use `map()` to get only their prices
3. Use `reduce()` to calculate their total price