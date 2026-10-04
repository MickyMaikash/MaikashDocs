# 🧩 JavaScript Classes & Prototypes — ES6

JavaScript provides `class` syntax as a cleaner way to create objects using constructors and methods.

Although `class` syntax looks similar to classes in languages like C++ or Java, JavaScript still uses **prototypes behind the scenes**.

## 🧬 JavaScript Is Prototype-Based

JavaScript is a **prototype-based object-oriented programming language**.

Its object system is fundamentally based on **prototypes**. Objects can inherit properties and methods from other objects through the prototype chain.

Unlike languages such as **C++ and Java**, which primarily use a class-based object system, JavaScript's object system is fundamentally prototype-based.

JavaScript also provides `class` syntax, but classes are mainly a cleaner syntax for working with JavaScript's existing prototype-based object system.

> JavaScript → Object-Oriented → Prototype-Based
---

## Creating a Class

The `class` keyword is used to create a class.

```js
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`;
    }
}
```

A class can contain:

- `constructor()` → initializes the object
- methods → functions that belong to the class

---

## The `constructor()`

The `constructor()` runs automatically when a new object is created using `new`.

```js
const chai = new User("chai", "chai@gmail.com", "123");
```

The values are assigned using `this`:

```js
this.username = username;
this.email = email;
this.password = password;
```

So the created object contains:

```js
{
    username: "chai",
    email: "chai@gmail.com",
    password: "123"
}
```

---

## Methods Inside a Class

Methods can be written directly inside the class.

```js
encryptPassword() {
    return `${this.password}abc`;
}
```

Another method:

```js
changeUserName() {
    return `${this.username.toUpperCase()}`;
}
```

They can then be called using the object:

```js
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
```

---

## Creating Multiple Objects

The same class can be used to create multiple objects.

```js
const chai = new User("chai", "chai@gmail.com", "123");
const tea = new User("tea", "tea@gmail.com", "1243");
```

Each object gets its own values:

```js
chai.username
// chai

tea.username
// tea
```

---

## Behind the Scenes

The `class` syntax provides a cleaner way to write constructor/prototype-based code.

Behind the scenes, constructor functions and prototypes are used::

```js
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
};
```

Then:

```js
const tea = new User("tea", "tea@gmail.com", "1243");

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
```

Output:

```text
1243abc
TEA
```

---

## Class Syntax vs Prototype Syntax

### Class syntax

```js
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
}
```

### Constructor + Prototype syntax

```js
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};
```

Both approaches can create objects with the same kind of behavior.

> **Class syntax = cleaner syntax for working with constructor/prototype-based objects.**

---

## 🧠 Quick Revision

- `class` is used to define a class.
- `constructor()` runs when an object is created with `new`.
- `this` refers to the object being created/used.
- Methods can be written directly inside a class.
- `new` creates a separate instance.
- JavaScript uses prototypes for method lookup.
- Methods written in a class are available through the object's prototype.
- Constructor functions and prototypes can provide the same underlying style of object creation.

---

## Final Takeaways

```text
class
   ↓
constructor()
   ↓
new User(...)
   ↓
new object / instance
   ↓
methods available through prototype
```

**Memory trick:**

> `class` → cleaner syntax  
> `constructor()` → initialize object  
> `new` → create instance  
> `prototype` → shared method lookup

---

Absolutely. For your documentation, I'll keep the practice section at **20 questions** so you get enough revision without making every question repetitive.

## 📝 Practice

### 1 Create a `Car` Class

Create a `Car` class with:

- `brand`
- `model`
- `price`

Add a method that prints the car's brand and model.

---

### 2 Create a `Student` Class

Create a `Student` class with:

- `name`
- `age`
- `course`

Add a method that returns the student's name in uppercase.

---

### 3 Create Multiple Instances

Create a `Phone` class with:

- `brand`
- `model`
- `storage`

Create three different phone objects and print their details.

---

### 4 Create a `Book` Class

Create a `Book` class with:

- `title`
- `author`
- `price`

Add a method called `getDetails()` that returns the book's information.

---

### 5 Use the Constructor

Create a `Player` class with:

- `name`
- `score`

Create two players with different scores and verify that each object has its own values.

---

### 6 Create a Method

Create a `BankAccount` class with:

- `accountHolder`
- `balance`

Create a method called `showBalance()` that returns the current balance.

---

### 7 Change an Object's Property

Create a `Laptop` class with:

- `brand`
- `ram`
- `price`

Create an object and then change its `price`. Print the updated object.

---

### 8 Create a Method Using `this`

Create a `Movie` class with:

- `title`
- `rating`

Create a method called `showRating()` that uses `this.rating` and returns the rating.

---

### 9 Convert Class to Prototype

Create a `Product` class with:

```text
name
price
```

Add a `getPrice()` method.

Then recreate the same functionality using a constructor function and `prototype`.

---

### 10 Create a Prototype Method

Create a constructor function called `Animal` with:

```text
name
type
```

Add a `describe()` method using:

```js
Animal.prototype.describe
```

The method should return the animal's name and type.

---

### 11 Create Two Instances

Create a `User` constructor function with:

```text
username
email
```

Add a prototype method called `showUser()`.

Create two different users and call the method on both.

---

### 12 Modify a Property Through a Method

Create a `Counter` class with:

```text
count
```

Add a method called `increase()` that increases `count` by `1`.

Create an object and call the method multiple times.

---

### 13 Create a Temperature Class

Create a `Temperature` class with:

```text
city
temperature
```

Add a method that returns:

```text
City: <city>, Temperature: <temperature>°C
```

---

### 14 Create a `Course` Class

Create a `Course` class with:

```text
name
duration
price
```

Add a method called `getCourseInfo()` that returns all three values.

---

### 15 Create a `Game` Class

Create a `Game` class with:

```text
title
players
```

Add a method that increases the number of players by `1`.

Create an object and call the method twice.

---

### 16 Recreate a Class Using Prototype

Create this class:

```js
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}
```

Now recreate it using a constructor function and `Employee.prototype`.

---

### 17 Compare Two Instances

Create a `Vehicle` class with:

```text
brand
speed
```

Create two different vehicles.

Print their properties and verify that changing one object's speed does not change the other object's speed.

---

### 18 Create a Method That Modifies `this`

Create a `Profile` class with:

```text
username
```

Add a method called `changeName(newName)` that changes the username using `this`.

Test it with an object.

---

### 19 Prototype Method With `this`

Create a constructor function called `Team` with:

```text
name
members
```

Add a prototype method called `showTeam()` that uses `this` to return the team's name and number of members.

---

### 20 Final Challenge — Class + Methods

Create a `ShoppingCart` class with:

```text
owner
items
```

The `items` property should be an array.

Add methods to:

- add an item
- remove an item
- show all items
- count the total number of items

Create one cart and test all the methods.

---

### 🎯 Bonus Challenge

Take any one of your classes from the questions above and implement it **both ways**:

1. Using `class`
2. Using a constructor function + `prototype`

Then compare the two versions and identify what the `class` syntax is simplifying.