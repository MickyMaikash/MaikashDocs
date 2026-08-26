# Comparison Operators in JavaScript

Comparison operators in JavaScript are used to **compare two values**.

The result of a comparison is always a **Boolean value**:

* `true`
* `false`

## Common Comparison Operators

* `>` : Greater than
* `>=` : Greater than or equal to
* `<` : Less than
* `<=` : Less than or equal to
* `==` : Loose equality
* `!=` : Loose inequality
* `===` : Strict equality
* `!==` : Strict inequality

---

## Basic Comparison

```js
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)
```

**Output:**

```text
true
true
false
false
false
true
```

### Understanding

```text
2 > 1
```

Means:

> Is 2 greater than 1?

Yes → `true`

```text
2 >= 1
```

Means:

> Is 2 greater than or equal to 1?

Yes → `true`

```text
2 < 1
```

Means:

> Is 2 smaller than 1?

No → `false`

```text
2 <= 1
```

Means:

> Is 2 smaller than or equal to 1?

No → `false`

```text
2 == 1
```

Means:

> Are 2 and 1 equal?

No → `false`

```text
2 != 1
```

Means:

> Are 2 and 1 not equal?

Yes → `true`

---

## Comparison Between String and Number

JavaScript can perform type conversion when using some comparison operators.

```js
console.log("2" > 1)
console.log("02" > 1)
```

**Output:**

```text
true
true
```

Here `"2"` and `"02"` are strings, but JavaScript converts them to numbers for this comparison.

Basically:

```text
"2" → 2

2 > 1 → true
```

and:

```text
"02" → 2

2 > 1 → true
```

### Important

Although JavaScript can perform these conversions, **avoid relying on complicated implicit conversions**, especially when writing code that should be easy to understand.

---

## Comparing `null` with Numbers

```js
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
```

**Output:**

```text
false
false
true
```

This can look confusing.

### Why?

For relational comparisons such as:

```js
null > 0
null >= 0
```

`null` is converted to the number `0`.

So:

```text
null > 0
↓
0 > 0
↓
false
```

And:

```text
null >= 0
↓
0 >= 0
↓
true
```

But `==` follows a different rule:

```js
null == 0
```

This is `false`.

So:

```text
null > 0   → false
null == 0  → false
null >= 0  → true
```

This is one reason why relying heavily on loose comparison can sometimes be confusing.
> generally avoid this typ of conversion
---

## Comparing `undefined` with Numbers

```js
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)
```

**Output:**

```text
false
false
false
```

`undefined` does not become `0` in these comparisons in the way `null` does.

For relational comparisons, `undefined` results in `NaN`, and comparisons involving `NaN` are `false`.

So:

```text
undefined > 0  → false
undefined == 0 → false
undefined < 0  → false
```
> generally avoid this typ of conversion
---

## `==` Loose Equality

`==` is called the **loose equality operator**.

It compares values, but JavaScript can perform **type conversion** before comparing them.

For example:

```js
console.log("2" == 2)
```

**Output:**

```text
true
```

Why?

```text
"2"  → string
2    → number
```

JavaScript converts the string `"2"` into the number `2` for this comparison.

Then:

```text
2 == 2
```

So the result is:

```text
true
```

---

## `===` Strict Equality

`===` is called the **strict equality operator**.

It checks:

1. The value
2. The datatype

Both must match.

```js
console.log("2" === 2)
```

**Output:**

```text
false
```

Because:

```text
"2" → string
2   → number
```

The values may represent the same number, but their datatypes are different.

Therefore:

```text
"2" === 2
↓
false
```

### Another example

```js
console.log(2 === 2)
```

Output:

```text
true
```

Both are:

```text
value → 2
datatype → number
```

---

## `!=` Loose Inequality

`!=` checks whether two values are **not equal**, while allowing type conversion.

```js
console.log("2" != 2)
```

Output:

```text
false
```

Because JavaScript converts `"2"` to `2`, so they are considered equal with `==`.

Therefore:

```text
"2" != 2
↓
false
```

---

## `!==` Strict Inequality

`!==` checks whether the values or their datatypes are different.

```js
console.log("2" !== 2)
```

Output:

```text
true
```

Because:

```text
"2" → string
2   → number
```

Their datatypes are different, so strict inequality gives `true`.

---

## `==` vs `===`

This is one of the most important things to remember.

### `==`

```text
Checks equality
+
Allows type conversion
```

Example:

```js
console.log("2" == 2)
```

Result:

```text
true
```

### `===`

```text
Checks equality
+
Checks datatype
+
No type conversion for the equality check
```

Example:

```js
console.log("2" === 2)
```

Result:

```text
false
```

Because:

```text
"2" → string
2   → number
```

---

## `!=` vs `!==`

Similarly:

```text
!=
→ loose inequality
→ allows type conversion
```

```text
!==
→ strict inequality
→ checks value and datatype
```

Example:

```js
console.log("2" != 2)   // false
console.log("2" !== 2)  // true
```

---

## Quick Revision

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater than          |
| `>=`     | Greater than or equal |
| `<`      | Less than             |
| `<=`     | Less than or equal    |
| `==`     | Loose equality        |
| `!=`     | Loose inequality      |
| `===`    | Strict equality       |
| `!==`    | Strict inequality     |

### Remember

```text
==   → loose comparison
===  → strict comparison

!=   → loose not-equal
!==  → strict not-equal
```

### Most important examples

```js
console.log(2 == "2")    // true
console.log(2 === "2")   // false

console.log(2 != "2")    // false
console.log(2 !== "2")   // true
```

For modern JavaScript, **prefer `===` and `!==` in normal code** because they avoid many surprising type-conversion cases.


# 🧠 Practice Questions

Try to solve these questions yourself without looking at the notes.

---

## 1. Write Comparison Expressions

Write JavaScript comparison expressions for the following:

- Check whether `20` is greater than `10`.
- Check whether `15` is less than `25`.
- Check whether `30` is greater than or equal to `30`.
- Check whether `10` is less than or equal to `5`.
- Check whether `50` is equal to `50`.
- Check whether `20` is not equal to `30`.

---

## 2. Choose the Correct Operator

Choose the correct comparison operator (`>`, `<`, `>=`, `<=`, `==`, `!=`) for each statement:

- `25` is greater than `15`.
- `10` is less than `20`.
- `50` is equal to `50`.
- `30` is not equal to `40`.
- `18` is greater than or equal to `18`.
- `5` is less than or equal to `10`.

---

## 3. Equality Operators

Create JavaScript expressions to compare the number `10` with the string `"10"` using:

- Loose equality
- Strict equality
- Loose inequality
- Strict inequality

Then observe the difference between the results.

---

## 4. String and Number Comparison

Create the following variables:

```javascript
let number = 25;
let textNumber = "25";
```

Write JavaScript expressions to compare these two variables using:

- `==`
- `===`
- `!=`
- `!==`

---

## 5. Comparison With Different Values

Create these variables:

```javascript
let a = 15;
let b = 20;
```

Write comparison expressions to check:

- Whether `a` is greater than `b`
- Whether `a` is less than `b`
- Whether `a` is equal to `b`
- Whether `a` is not equal to `b`
- Whether `b` is greater than or equal to `a`

---

## 6. Predict the Result

Without running the code, predict whether each expression gives `true` or `false`:

```javascript
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 == "10");
console.log(10 === "10");
```

---

## 7. String and Number Conversion

Write JavaScript expressions to compare:

- `"5"` with `5` using `==`
- `"5"` with `5` using `===`
- `"10"` with `5` using `>`
- `"10"` with `10` using `>=`

For each comparison, think about whether JavaScript performs type conversion.

---

## 8. `null` Comparison

Write JavaScript expressions to compare `null` with `0` using:

- `>`
- `<`
- `>=`
- `<=`
- `==`
- `===`

Before running them, try to predict which results will be `true` and which will be `false`.

---

## 9. `undefined` Comparison

Write JavaScript expressions to compare `undefined` with `0` using:

- `>`
- `<`
- `>=`
- `<=`
- `==`
- `===`

Observe the results and try to explain why `undefined` behaves differently from `null`.

---

## 10. Comparison Challenge

Create these variables:

```javascript
let firstValue = 20;
let secondValue = "20";
```

Now write JavaScript comparison expressions to:

- Compare their values using `==`
- Compare their values and datatypes using `===`
- Check whether they are loosely not equal using `!=`
- Check whether they are strictly not equal using `!==`
- Check whether `firstValue` is greater than `10`
- Check whether `secondValue` is greater than `10`

Finally, explain in your own words why `==` and `===` can produce different results. 