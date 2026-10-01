# Objects in Js

* In Objects there is key value pairs.
* with the help of key we can get value of that corrosponding key

## ways of Declaration of Object

### ***Constructor method(Singleton) :***
> Example
```js
const tinderUser= new Object()//singleton or contructor method
 console.log(typeof tinderUser)

tinderUser.id="123abd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn=false
console.log(tinderUser)
```
*Result*:
```txt
object
{ id: '123abd', name: 'Sam', isLoggedIn: false }
```



### ***Literal Method :*** 
> Example:
```js
const jsUser={} // example of object created with literal method
```
* Now let's add some data key value pairs in object
```js
const jsObj={
    name:"Micky",
    "score":2343,
    isloogged:false,
}
console.log(jsObj)
```
**Results**:
```bash
{ name: 'Micky', score: '2343', isloogged: false }
Micky
2343
```
### Important

`new Object()` creates an object, but in normal JavaScript code, **object literals `{}` are generally preferred**.

---

## How to Acess Objects 
> Let create an Object to understand this
```js
const jsUser={
    name:"micky",
    age:2323,
    isLoggedIn:false,
    logginDays:["monday","tuesday"]
} 
```
for getting the values of like from object
we have two ways
```js
//let try to get the value of key name
console.log(jsUser.name) //1st Dot Method
console.log(jsUser["name"]) //2nd string method
```
> when we write like key as without double comma("") then by default it is considered as string example like in my obj info i create a keyvalue pair key as email and value as ".com" by default the email is processed as "email" in js so both method dot and string could be used to get the value of it
```js
const info={
    email:".com" //here email  in js processed as "email"
} 
console.log(info.email)
console.log(info["email"])
```
>results:
```
.com
.com
```
> and string method is useful when we can't use dot method to access eg.
```js
const starObj={
    name:"micky",
    "full name":"micky Maikash"
}
//here we can't use dot method to get the value of full name
console.log(starObj.full name)
```
result
```md
console.log(starObj.full name)
                    ^^^^

SyntaxError: missing ) after argument list
    at compileSourceTextModule (node:internal/modules/esm/utils:346:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:107:18)
    at #translate (node:internal/modules/esm/loader:546:20)
    at afterLoad (node:internal/modules/esm/loader:596:29)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:601:12)
    at #createModuleJob (node:internal/modules/esm/loader:624:36)
    at #getJobFromResolveResult (node:internal/modules/esm/loader:343:34)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:311:41)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:664:25)

```
> in this case we have to use string method to get the value of full name
```js
console.log(starObj["full name"])
```
results
```md
micky Maikash
```


---
## How to use symbol as a key in Object
> For this first we have to create a symbol datatype variable

```js
const mySymbol=Symbol("key1")
```
> Now one thing you must know  when we use symbol as key in object we don't write normally we just add square bracket around it
```js
const Object1={
    isLoggedIn:true,
    [mySymbol]:"key2"
}
console.log(Object1)
console.log(Object1[mySymbol])
```
*Result*:
```txt
{ isLoggedIn: true, [Symbol(key1)]: 'key2' }
key2
```
---

## How to Change value inside Object
> let create a new object
```js
const carInfo={
    name:"BMW",
    mileage:80,
}
```
- let's change the value of milage for that 
```js
console.log(carInfo) //before change of mileage
carInfo.mileage=90
console.log(carInfo) //after change of mileage
```
*Results*:
```txt
{ name: 'BMW', mileage: 80 }
{ name: 'BMW', mileage: 90 }
```
> This is the way we can override/change the values of corrosponding key 
---
## Freeze
> when we don't want to change the values in our boject so we apply freeze function
> basically no change takes places when we apply freeze function on our object Example:-
```js
//let freeze our recent carInfo object
Object.freeze(carInfo)  //carInfo object freeze

console.log(carInfo)
carInfo.name="Toyota"
console.log(carInfo)
```
*result*
```txt
carInfo.name="Toyota"
            ^

TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    at ModuleJob.run (node:internal/modules/esm/module_job:345:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

```
- we get error as it can't be change and we are trying to change it's value if you remove the freeze line and run it again then it would change


---

## Function in Object
let add greet function:
> in Js Function are treated as variable like a type 1 citizen no descrimination
```js
let star={
    carName:"BMW",
    carMileage:80,
    owner:"laskdf;l",
}
star.greet=function(){
    console.log("Hello")
}
console.log(star.greet) //here just the function refrence
console.log(star.greet()) //function executed
```
**Results*:
```txt
[Function (anonymous)]
Hello
undefined
```

> Let's write another function which prints info of object star
```js
star.greetTwo=function(){
    console.log(`Hello ,The car name is ${this.carName} and the car mileage is ${this.carMileage}`) 
    //here this refers to the object that the method is called on
}
console.log(star.greetTwo())
```
**Results**
```txt
Hello ,The car name is BMW and the car mileage is 80
undefined
```


---

## Nested Objects

An object can contain another object inside it.

```js
const regularUser = {
    email: "2343@gmail.com",

    fullname: {
        username: {
            firstname: "micky",
            lastname: "nicky"
        }
    }
}
```

Here:

```text
regularUser
    ↓
fullname
    ↓
username
    ↓
firstname
lastname
```

To access `firstname`:

```js
console.log(regularUser.fullname.username.firstname)
```

Output:

```text
micky
```

### Accessing nested properties

General pattern:

```js
object.property.property.property
```

Example:

```js
regularUser.fullname.username.lastname
```

Output:

```text
nicky
```

---

## Combining Objects

Suppose we have three objects:

```js
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    6: "a",
    5: "b"
}
```

### Method 1 — Object inside Object

```js
const obj3 = {
    obj1,
    obj2
}
```

This does **not** combine their properties into one object.

It creates an object containing `obj1` and `obj2` as nested objects.

Conceptually:

```js
{
    obj1: {
        1: "a",
        2: "b"
    },

    obj2: {
        3: "a",
        4: "b"
    }
}
```

---

##  `Object.assign()`

`Object.assign()` can combine multiple objects.

```js
const obj3 = Object.assign({}, obj1, obj2, obj4)
```

The `{}` is the target object.

Result:

```js
{
    1: "a",
    2: "b",
    3: "a",
    4: "b",
    6: "a",
    5: "b"
}
```

### Syntax

```js
Object.assign(target, source1, source2, ...)
```

Example:

```js
Object.assign({}, obj1, obj2, obj4)
```

Here:

```text
{}       → target
obj1     → source
obj2     → source
obj4     → source
```

---

## Object Spread Operator `...`

We can also combine objects using the spread operator.

```js
const obj3 = {
    ...obj1,
    ...obj2,
    ...obj4
}
```

Result:

```js
{
    1: "a",
    2: "b",
    3: "a",
    4: "b",
    6: "a",
    5: "b"
}
```

### Remember

The same `...` spread syntax that we use with arrays can also be used with objects.

Example:

```js
const obj3 = {
    ...obj1,
    ...obj2
}
```

---

## Array of Objects

An array can contain multiple objects.

```js
const user = [
    {
        id: 1,
        email: "dfadfeqa@gmail.com"
    },

    {
        id: 2,
        email: "abc@gmail.com"
    },

    {
        id: 3,
        email: "xyz@gmail.com"
    }
]
```

Here:

```text
user
 ↓
Array
 ↓
Object
 ↓
id / email
```

To access the email of the second object:

```js
console.log(user[1].email)
```

Remember that array indexing starts from **0**:

```text
user[0] → first object
user[1] → second object
user[2] → third object
```

So:

```js
user[1].email
```

means:

```text
user
 ↓
second object
 ↓
email
```

---

## `Object.keys()`

`Object.keys()` gives us an **array containing all the keys** of an object.

Example:

```js
const tinderUser = new Object()

tinderUser.id = "123abd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser))
```

Output:

```js
["id", "name", "isLoggedIn"]
```

### Remember

```js
Object.keys(object)
```

→ gives an **array of keys**.

---

## `Object.values()`

`Object.values()` gives us an **array containing all the values** of an object.

```js
console.log(Object.values(tinderUser))
```

Output:

```js
["123abd", "Sam", false]
```

### Remember

```js
Object.values(object)
```

→ gives an **array of values**.

---

## `Object.entries()`

`Object.entries()` gives us an array containing **key-value pairs**.

```js
console.log(Object.entries(tinderUser))
```

Output:

```js
[
    ["id", "123abd"],
    ["name", "Sam"],
    ["isLoggedIn", false]
]
```

Each key-value pair becomes its own array:

```js
["id", "123abd"]
["name", "Sam"]
["isLoggedIn", false]
```

### Remember

```js
Object.entries(object)
```

→ gives:

```text
[
    [key, value],
    [key, value],
    ...
]
```

---

## `hasOwnProperty()`

`hasOwnProperty()` checks whether an object has a **specific property/key of its own**.

Example:

```js
console.log(tinderUser.hasOwnProperty("isLoggedIn"))
```

Output:

```text
true
```

Because `isLoggedIn` exists in `tinderUser`.

If we check:

```js
console.log(tinderUser.hasOwnProperty("isLogged"))
```

Output:

```text
false
```

because the actual property is:

```js
isLoggedIn
```

not:

```js
isLogged
```

### Syntax

```js
object.hasOwnProperty("propertyName")
```

It returns a Boolean:

```text
true  → property exists
false → property doesn't exist
```

---

# Quick Revision

## Creating objects

```js
const obj = {}
```

or:

```js
const obj = new Object()
```

---

## Nested object

```js
const user = {
    name: {
        first: "Micky"
    }
}

console.log(user.name.first)
```

---

## Combine objects

### `Object.assign()`

```js
const obj3 = Object.assign({}, obj1, obj2)
```

### Spread operator

```js
const obj3 = {
    ...obj1,
    ...obj2
}
```

---

## Array of objects

```js
const users = [
    {
        id: 1,
        name: "Micky"
    },
    {
        id: 2,
        name: "Sam"
    }
]

console.log(users[1].name)
```

---

## Useful Object Methods

| Method | What it gives |
|---|---|
| `Object.keys(obj)` | Array of keys |
| `Object.values(obj)` | Array of values |
| `Object.entries(obj)` | Array of `[key, value]` pairs |
| `obj.hasOwnProperty("key")` | `true` / `false` |

### Easy way to remember

```text
Object.keys()     → KEYS
Object.values()   → VALUES
Object.entries()  → KEY + VALUE
hasOwnProperty()  → DOES THIS KEY EXIST?
```

---

## Important Difference
➡️ **What are the keys?**
```js
Object.keys(tinderUser)
```



➡️ **What are the values?**
```js
Object.values(tinderUser)
```

➡️ **Give me keys AND values together**
```js
Object.entries(tinderUser)
```


➡️ **Does `name` exist in this object?**

```js
tinderUser.hasOwnProperty("name")
```


# 🧠 Quick Practice — Objects in JavaScript

### Question 1 — Create an Object

> Create an object named `book` with these properties:
> - `title` → `"Atomic Habits"`
> - `author` → `"James Clear"`
> - `pages` → `320`
>
> Print the book's title and author.

**Expected Output:**
```text
Atomic Habits
James Clear
```

---

### Question 2 — Object Using Constructor

> Create an empty object named `laptop` using `new Object()`.
>
> Add:
> - `brand` → `"Lenovo"`
> - `ram` → `"16GB"`
> - `storage` → `"512GB"`
>
> Print the object.

---

### Question 3 — Dot Notation

> Create a `movie` object with `name`, `genre`, and `rating`.
>
> Use **dot notation** to print the movie's genre.

---

### Question 4 — Bracket Notation

> Create a `phone` object with:
> - `brand` → `"Samsung"`
> - `model` → `"S24"`
> - `price` → `75000`
>
> Use **bracket notation** to print the price.

---

### Question 5 — Property With Spaces

> Create an object named `student`.
>
> Add a property:
> `"full name"` → `"Rahul Patel"`
>
> Access and print it.


**Expected Output:**
```text
Rahul Patel
```
---
### Question 6 — Symbol as Object Key

> Create a Symbol called `userId`.
>
> Use it as a key inside an object called `account`.
>
> Give it the value `101`.
>
> Print the value using the Symbol.

---

### Question 7 — Change an Object Value

> Create a `game` object:
> ```js
> name: "Minecraft"
> level: 5
> ```
>
> Change `level` to `10`.
>
> Print the updated level.



**Expected Output:**
```text
10
```

---

### Question 8 — Freeze an Object

> Create an object named `settings` with:
> ```js
> theme: "dark"
> volume: 80
> ```
>
> Freeze the object.
>
> Try changing `volume` to `100`.
>
> Print the object and observe whether the value changes.

---

### Question 9 — Function Inside an Object

> Create a `calculator` object.
>
> Add a function called `sayReady` that prints:
> `"Calculator is ready"`


**Expected Output:**
```text
Calculator is ready
```
---

### Question 10 — Function Using `this`

> Create a `bike` object with:
> - `brand` → `"Yamaha"`
> - `model` → `"R15"`
>
> Add a function called `showBike`.
>
> Use `this` to print:
> `"Yamaha R15"`

---

### Question 11 — Nested Object

> Create a `userProfile` object.
>
> Inside it, create an `address` object containing:
> - `city` → `"Delhi"`
> - `pincode` → `adabadf2342`
>
> Print the city.


**Expected Output:**
```text
Delhi
```

---

### Question 12 — Multiple Nested Levels

> Create an object named `company`.
>
> Structure it like:
> ```text
> company
>   └── employee
>        └── contact
>             └── email
> ```
>
> Store the email `"employee@example.com"`.
>
> Access and print the email.

---

### Question 13 — Combine Objects Using `Object.assign()`

> Create three objects:
>
> ```js
> const personal = {
>     name: "Aarav"
> }
>
> const education = {
>     degree: "BCA"
> }
>
> const location = {
>     state: "Kerala"
> }
> ```
>
> Combine them into a new object using `Object.assign()`.
>
> Print the final object.

---

### Question 14 — Combine Objects Using Spread

> Create three objects representing:
> - a product's name
> - its price
> - its category
>
> Combine all three using the **spread operator** into one object.

---

### Question 15 — Array of Objects

> Create an array named `products` containing three objects.
>
> Each object should have:
> - `name`
> - `price`
>
> Example products can be anything you want.

---

### Question 16 — Access Object From Array

> Using your `products` array from the previous question:
>
> Print the `name` of the **second product**.

---

### Question 17 — `Object.keys()`

> Create a `car` object with at least four properties eg brand,model,year and color.
>
> Use `Object.keys()` to print all the keys.



**Expected Output Example:**
```text
[ 'brand', 'model', 'year', 'color' ]
```

---

### Question 18 — `Object.values()`

> Create a `restaurant` object with:
> - `name`
> - `city`
> - `rating`
>
> Use `Object.values()` to print all the values.

---

### Question 19 — `Object.entries()`

> Create a `student` object with three properties eg name,age,grade.
>
> Use `Object.entries()` to print all key-value pairs.



**Expected Output Example:**
```text
[
  [ 'name', '...' ],
  [ 'age', ... ],
  [ 'grade', '...' ]
]
```

---

### Question 20 — `hasOwnProperty()`

> Create an object named `account`.
>
> Check whether it has:
> - `"username"`
> - `"password"`
> - `"email"`
>
> Use `hasOwnProperty()` for each check.
---

### Question 21 — Basic Object Destructuring

> Create a `player` object with:
> ```js
> name
> score
> team
> ```
>
> Use object destructuring to extract `name` and `score`.
>
> Print both.

---

### Question 22 — Rename While Destructuring

> Create a `product` object:
> ```js
> {
>     productName: "Keyboard",
>     productPrice: 2500
> }
> ```
>
> Destructure `productName` but store it in a variable called `name`.
>
> Destructure `productPrice` but store it in a variable called `price`.
>
> Print both variables.

---

### Question 23 — Destructuring in Function Parameters

> Create an object named `user`.
>
> It should contain:
> ```js
> username
> age
> ```
>
> Create a function that receives the object using **destructuring in the parameter**.
>
> Print the username and age inside the function.

---

### Question 24 — API-Style Object

> Imagine you received this data from an API:
>
> Create an object containing:
> - `username`
> - `email`
> - `isVerified`
> - `followers`
>
> Print the username and followers.

---

### Question 25 — API Array of Objects

> Imagine an API returns a list of three users.
>
> Create an array containing three user objects.
>
> Each user should have:
> - `id`
> - `username`
> - `email`
>
> Print the username of the third user.

---

### Question 26 — 🔥 Final Challenge: User Profile

> Create a `profile` object containing:
>
> - `username`
> - `age`
> - `email`
> - `address`
>   - `city`
>   - `country`
> - `skills` → an array of at least three skills
>
> Then:
>
> 1. Print the username using dot notation.
> 2. Print the email using bracket notation.
> 3. Print the city .
> 4. Print the second skill.
> 5. Use destructuring to extract `username`.
> 6. Use `Object.keys()` to print all top-level keys.

---

### 🚀 Bonus Challenge

> Create a `shoppingCart` object containing an array of product objects.
>
> Each product should have:
> - `name`
> - `price`
> - `quantity`
>
> Then calculate and print the **total price of everything in the cart**.

---

