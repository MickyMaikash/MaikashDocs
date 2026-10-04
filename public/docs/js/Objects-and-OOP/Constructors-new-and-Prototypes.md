# JavaScript Constructor Functions, `new` & Prototypes

## Object Literals

An object literal is a direct way to create an object using `{}`.

```js
const user = {
    username: "micky",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this)
    }
}
```

Here, `user` is an object containing properties and a method.

### Accessing Object Properties

```js
console.log(user.username)
```

Output:

```text
micky
```

The method can also be called using:

```js
user.getUserDetails()
```

Inside the method:

```js
console.log(this)
```

`this` refers to the object that is calling the method.

---

## Constructor Functions

A **constructor function** is a function used to create multiple objects with the same structure.

It uses `this` to assign values to each new object, and the `new` keyword creates a separate instance from it.

```js
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}
```

Here, `User` is the constructor function.
The values passed to the constructor are assigned to the new object's properties using `this`.

**Simple idea:**

> **Constructor function = a blueprint/function used to create multiple similar objects.**

---

## The `new` Keyword

The `new` keyword is used with a constructor function to create a **new instance**.

```js
const userOne = new User("micky", 12, true)
const userTwo = new User("CodeStarter", 11, false)
```

Here, `userOne` and `userTwo` are separate instances created from the same constructor.

```js
console.log(userOne)
console.log(userTwo)
```

Each instance contains its own values.

```js
console.log(userOne.username)
console.log(userTwo.username)
```

Output:

```text
micky
CodeStarter
```

### Why Use `new`?

The `new` keyword creates a separate instance each time the constructor is called.

```text
User
 ├── userOne
 └── userTwo
```

The values stored in one instance are independent from the other instance.

---

## Constructor Property

Objects created using a constructor have access to a `constructor` property.

```js
console.log(userTwo.constructor)
```

For an object created using:

```js
new User(...)
```

the `constructor` property refers to the `User` constructor function.

---

## Functions Are Objects

Functions in JavaScript are also objects, so they can have their own properties.

```js
function multipleBy5(num){
    return num * 5
}
```

The function can be called normally:

```js
console.log(multipleBy5(5))
```

Output:

```text
25
```

We can also add a property to the function:

```js
multipleBy5.power = 2
```

Now:

```js
console.log(multipleBy5.power)
```

Output:

```text
2
```

So a function can be used as a function and can also have properties like an object.

---

## The `prototype` Property

Functions have a `prototype` property.

```js
console.log(multipleBy5.prototype)
```

When working with constructor functions, the prototype can be used to add methods that instances can access.

---

## Adding Methods to a Prototype

Create a constructor:

```js
function creatUser(username, score){
    this.username = username
    this.score = score
}
```

Methods can then be added to its prototype:

```js
creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`)
}
```

Now create two instances:

```js
const chai = new creatUser("chai", 25)
const tea = new creatUser("tea", 250)
```

The instances can access the prototype methods:

```js
chai.printme()
```

Output:

```text
Price is 25
```

---

## Prototype Methods and `this`

Inside a prototype method, `this` refers to the instance that calls the method.

```js
creatUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`)
}
```

When:

```js
chai.printme()
```

is called:

```text
this → chai
```

When:

```js
tea.printme()
```

is called:

```text
this → tea
```

This allows the same prototype method to work with different instances.

---

## Constructor and Prototype

The constructor is used to initialize values for each instance:

```js
function creatUser(username, score){
    this.username = username
    this.score = score
}
```

The prototype can be used to define methods:

```js
creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`)
}
```

So the basic idea is:

```text
Constructor → Instance values
Prototype   → Methods
```

---

## What Happens Behind the Scenes When `new` Is Used?

When we write:

```js
const chai = new creatUser("chai", 25)
```

JavaScript performs several steps.

### Step 1 — A New Object Is Created

The `new` keyword creates a new JavaScript object.

```text
new creatUser("chai", 25)
            ↓
       New object
```

### Step 2 — The Prototype Is Linked

The newly created object is linked to the constructor function's prototype.

```text
chai
  ↓
creatUser.prototype
```

Because of this connection, `chai` can access methods defined on construction function:

```js
creatUser.prototype
```

For example:

```js
chai.printme()
```

### Step 3 — The Constructor Is Called

The constructor function is called with the provided arguments.

`this` is bound to the newly created object.

```js
function creatUser(username, score){
    this.username = username
    this.score = score
}
```

For:

```js
new creatUser("chai", 25)
```

the new object receives:

```text
username → "chai"
score    → 25
```

### Step 4 — The New Object Is Returned

The newly created object becomes the result of the `new` expression.

```js
const chai = new creatUser("chai", 25)
```

Therefore, `chai` refers to the new instance.

---

## Complete `new` Flow

```text
new creatUser("chai", 25)
             ↓
     New object is created
             ↓
 Prototype is linked to object
             ↓
    Constructor is called
             ↓
       this → new object
             ↓
      New object is returned
```

---

## Complete Example

```js
function creatUser(username, score){
    this.username = username
    this.score = score
}

creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`)
}

const chai = new creatUser("chai", 25)
const tea = new creatUser("tea", 250)

chai.printme()

chai.increment()

chai.printme()

tea.printme()
```

Output:

```text
Price is 25
Price is 26
Price is 250
```

Here:

- `chai` and `tea` are separate instances.
- `increment()` and `printme()` are prototype methods.
- `this` refers to the instance calling the method.

---

## 🧠 Quick Revision

### Object Literal

```js
const user = {
    username: "micky"
}
```

Creates an object directly.

### Constructor Function

```js
function User(username){
    this.username = username
}
```

Used to create objects with the same structure.

### `new`

```js
const userOne = new User("micky")
```

Creates a new instance.

### `this`

Refers to the current object or instance in the relevant function call.

### `prototype`

```js
User.prototype.someMethod = function(){
    // code
}
```

Allows methods to be added to the constructor's prototype.

### `constructor`

```js
userOne.constructor
```

Refers to the constructor function associated with the instance.

---

## Final Takeaways

- Object literals create objects directly.
- Constructor functions can be used to create multiple instances.
- `new` creates a new instance.
- `this` is used to assign values to the current instance.
- Functions are objects and can have their own properties.
- Functions have a `prototype` property.
- Methods can be added to a constructor's prototype.
- Instances can access methods through the prototype.
- `this` inside a prototype method refers to the instance calling the method.
- `new` creates an object, links its prototype, calls the constructor with `this`, and returns the new object.

### Memory Trick

```text
Constructor → Create and initialize
new         → Create a new instance
this        → Current instance
prototype   → Methods
```

---

## 📝 Practice

### 1 Create a Constructor

Create a `Book` constructor with:

```text
title
author
pages
```

Create two different book instances using `new`.

---

### 2 Create Multiple Instances

Create a `Student` constructor with:

```text
name
age
course
```

Create three different student instances.

---

### 3 Use `this`

Create a `Laptop` constructor and use `this` to store:

```text
brand
model
price
```

Print the values.

---

### 4 Add a Constructor Method

Create a `Car` constructor with:

```text
brand
model
```

Add a `showCar()` method that prints both values.

---

### 5 Test Separate Instances

Create two `Phone` objects using the same constructor.

Change a property on the first phone and verify that the second phone remains unchanged.

---

### 6 Explore the Constructor

Create a `Movie` constructor and one instance.

Print:

```js
movie.constructor
```

Observe what it refers to.

---

### 7 Add a Function Property

Create a function called `calculateSquare`.

Add a property:

```js
calculateSquare.description = "Finds the square of a number"
```

Print both the function result and the property.

---

### 8 Explore `prototype`

Create a normal function and print:

```js
function test(){
}

console.log(test.prototype)
```

Observe the result.

---

### 9 Add a Prototype Method

Create a `Product` constructor with:

```text
name
price
```

Add a prototype method called `showProduct()`.

---

### 10 Modify Using a Prototype Method

Create a `BankAccount` constructor with:

```text
owner
balance
```

Add a prototype method called `deposit()` that increases the balance.

---

### 11 Use `this` in a Prototype Method

Create a `Game` constructor with:

```text
player
score
```

Add a prototype method that prints:

```text
Player: ...
Score: ...
```

Use `this` to access the values.

---

### 12 Multiple Prototype Methods

Create a `Counter` constructor with:

```text
count
```

Add these prototype methods:

```text
increment()
decrement()
showCount()
```

Test all three methods.

---

### 13 Test Shared Methods

Create two objects from the same constructor.

Call the same prototype method on both objects and observe how `this` gives different results.

---

### 14 Build a User Constructor

Create a `User` constructor with:

```text
username
email
age
```

Add a prototype method:

```text
showProfile()
```

that prints all three values.

---

### 15 Understand the `new` Flow

Create a small example using `new`.

Then explain in comments:

```text
1. New object
2. Prototype link
3. Constructor call
4. Object returned
```

---

### 16 Constructor vs Prototype

Create a constructor with two properties and one prototype method.

Identify which parts belong to:

```text
Instance
Prototype
```

---

### 17 Build a Shopping Product

Create a `ShoppingItem` constructor with:

```text
name
price
quantity
```

Add a prototype method that calculates:

```text
price × quantity
```

---

### 18 Build a Game Character

Create a `Character` constructor with:

```text
name
health
level
```

Add prototype methods:

```text
takeDamage()
levelUp()
showStats()
```

Test them with two different characters.

---

### 19 Compare Object Literal and Constructor

Create one object using an object literal and another using a constructor function.

Compare how they are created and accessed.

---

### 20 Mini Project — Product Manager

Create a `Product` constructor.

Each product should have:

```text
name
price
category
stock
```

Add prototype methods:

```text
showDetails()
addStock()
removeStock()
```

Create at least three products and test all methods.

**Bonus:** Add a method that calculates the total value of available stock:

```text
price × stock
```



---

## 🧩 JavaScript Classes vs Prototypes

JavaScript supports `class` syntax, but its object system is fundamentally based on **prototypes**.

The `class` syntax was introduced in **ES6** and provides a cleaner, more familiar way to write constructor-based code.

This can make JavaScript feel more familiar to developers coming from languages such as **C++ or Java**, where classes are a major part of object-oriented programming.

### Prototype-Based Approach

Before using `class` syntax, constructor functions and prototypes were commonly written like this:

```js
function User(username, score){
    this.username = username
    this.score = score
}

User.prototype.increment = function(){
    this.score++
}

const userOne = new User("Micky", 25)

userOne.increment()
```

### Class Syntax

The same general idea can be written using `class`:

```js
class User {
    constructor(username, score){
        this.username = username
        this.score = score
    }

    increment(){
        this.score++
    }
}

const userOne = new User("Micky", 25)

userOne.increment()
```

The `class` syntax is cleaner and easier to read, especially for developers coming from traditional OOP languages.

### Important Idea

```text
JavaScript
    ↓
Prototype-based object system
    ↓
class syntax provides a cleaner abstraction
```

So `class` does not mean JavaScript stopped using prototypes.

Behind the scenes, JavaScript still uses the **prototype chain** for inheritance and method lookup.

### Why Learn Prototypes?

Even if you normally use `class` syntax in modern JavaScript, understanding prototypes helps explain:

- how `new` works
- where methods are stored
- how inheritance works
- how property lookup works
- what happens behind the scenes when using classes

### Quick Comparison

```text
Constructor Function + Prototype
        ↓
More explicit / lower-level understanding

class
        ↓
Cleaner syntax / easier to write

Both
        ↓
Use JavaScript's prototype-based object model
```

> **Memory Trick:**  
> `class` → cleaner syntax  
> `prototype` → underlying object model

