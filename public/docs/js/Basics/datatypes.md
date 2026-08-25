# DataTypes in Javascript
- data type tells **which type of value** a variable is storing

> for checking the datatype of value we use `typeof` operator

### Javascript has different type of datatypes such as `number`,`boolean`,`string`,`object`,`null`,`undefined`,`symbols`

---

## Number
> `number` is used to store numbers such as 
```js
let age = 21

let price = 500

console.log(age)
console.log(price)
```
Javascript use Number type for Normal Numbers
 
Number datatype can store value till 2⁵³ 

---

## BigInt
> for number greater 2⁵³ js use BigInt to store them

**example**
```js
let bigNumber = 123456789012345678901234567890n
console.log(bigNumber)
```
- The n at the end tells JavaScript that the value is a BigInt.

---

## String 
> string is use to store text
- Strings can be written using
    - Double quotes " "
    - Single quotes ' '
    - Backticks ` `

---

## Boolean
> A boolean can have only two values:
```text
true 
false
```
- It is generally used when something has two possible states.

*example:*
```js
let isLoggedIn=false
console.log(isLoggedIn)
```

---

## Null
> null represents an intentional empty value. 

- It means we are deliberately saying that there is no value.

**example**
```js
const selectedUser=null
console.log(selectedUser)
```
> Here, *selectedUser* currently has no value intentionally.

## Intersting thing about Null
```js
console.log(typeof null)
```
**output**
```text
object
```
> Although *null* is not actually an **object**, typeof null returns "object".

---

## Undefined
> undefined means value has not been assigned

**example**
```js
let favouriteCar
console.log(favouriteCar)
```
**Output**
```text
undefined
```
- Here, we created the variable but didn't give it a value.

- it's type is also undefined
```js
console.log(typeof undefined)
```
*output*
```text
undefined
```

--- 

## Symbol
> ***Symbol*** is used to create a unique value.
*example*
```js
let id = Symbol("id")

console.log(id)
```
**output**
```text
Symbol(id)
```

- even if the value is still same still both variable would not be equal see example below
```js
let car1=Symbol("bmw")
let car2=Symbol("bmw")
console.log(car1==car2)
```
*output*
```text
false
```
---

## Object
> An object is used to store related data together using properties and values.

*example*
```js
const user={
    name:"Maikash",
    programming_lang:"Python"
}
console.log(user)
```
*output*
```text
{ name: 'Maikash', programming_lang: 'Python' }
```
here user contains name -> "Maikash" and programming_lang->"Python"

---

## Checking the datatype
> We can use `typeof` to check the type of a value.
For example:
```js
let age=3
console.log(typeof age)
```
*Output*
```text
number
```

- Some more Examples
```js
console.log(typeof 21)
console.log(typeof "Micky")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
```

***Output***
```text
number
string
boolean
undefined
object
```
> Remember: typeof value--> check the type of value

---
# Quick Revision
| Data Type | Used For | Example |
|-----------|----------|---------|
| **Number** | Numbers | **21** |
| **BigInt** | Very large integers | **213n** |
| **String** | Text | **"Micky"** |
| **Boolean** | `true` / `false` | **true** |
| **null** | Intentional empty value | **null** |
| **undefined** | Value not assigned | **undefined** |
| **Symbol** | Unique values | **Symbol("id")** |
| **Object** | Related data | **{ name: "Micky" }** |

---
# 🧠 Quick Practice
Try to Identify the datatype of each value

```js
let username = "Micky"
let age = 21
let isLoggedIn = true
let selectedUser = null
let score
let bigNumber = 12345678901234567890n
```
