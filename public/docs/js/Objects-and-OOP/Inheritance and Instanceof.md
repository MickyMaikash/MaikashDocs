# 🧬 JavaScript Classes — Inheritance & `instanceof`

JavaScript classes can **inherit** properties and methods from another class.

The `extends` keyword is used to create a child class from another class, while `super()` is used to call the parent class constructor.

---

## Creating the Parent Class

```js
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}
```

Here, `User` is the **parent class**.

It contains:

- `username` property
- `logMe()` method

---

## Creating a Child Class

The `extends` keyword allows one class to inherit from another class.

```js
class Teacher extends User {
```

Here:

```text
User
 ↓
Teacher
```

`Teacher` is the **child class**, and `User` is the **parent class**.

Because `Teacher` extends `User`, objects created from `Teacher` can use the methods and functionality inherited from `User`.

---

## Using `super()`

The child class has its own constructor:

```js
constructor(username, email, password) {
    super(username);

    this.email = email;
    this.password = password;
}
```

`super()` calls the constructor of the parent class.

```js
super(username);
```

This passes `username` to the `User` constructor:

```js
constructor(username) {
    this.username = username;
}
```

So the flow is:

```text
new Teacher(...)
      ↓
Teacher constructor
      ↓
super(username)
      ↓
User constructor
      ↓
this.username = username
```

> `super()` is used to call the parent class constructor from a child class.

---

## Adding Methods to the Child Class

The child class can also have its own methods.

```js
addCourse() {
    console.log(`A new course was added by ${this.username}`);
}
```

This method belongs to `Teacher`.

So `Teacher` can use:

```text
Inherited from User:
logMe()

Own method:
addCourse()
```

---

## Creating a `Teacher` Object

```js
const chai = new Teacher(
    "Chai",
    "chai@teacher.com",
    "1234"
);
```

The `chai` object gets:

```text
username → from User
email → from Teacher
password → from Teacher
```

And it can use the inherited method:

```js
chai.logMe();
```

Output:

```text
Username is Chai
```

---

## Creating a Normal `User`

You can still create objects directly from the parent class.

```js
const masalaChai = new User("masalaChai");

masalaChai.logMe();
```

Output:

```text
Username is masalaChai
```

`masalaChai` is a `User` object, but it is **not a `Teacher` object**.

---

## `instanceof`

The `instanceof` operator checks whether an object belongs to a particular class through its prototype chain.

```js
console.log(chai instanceof User);
```

Output:

```text
true
```

Why?

Because `Teacher` extends `User`, so a `Teacher` instance is also considered an instance of `User`.

You can also check:

```js
console.log(chai instanceof Teacher);
```

Output:

```text
true
```

But:

```js
console.log(masalaChai instanceof Teacher);
```

Output:

```text
false
```

### Simple idea

```text
chai
 ↓
Teacher
 ↓
User

chai instanceof Teacher → true
chai instanceof User    → true
```

> `instanceof` checks whether an object is an instance of a class or something in that class's inheritance chain.

---

## Complete Example

```js
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);

        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher(
    "Chai",
    "chai@teacher.com",
    "1234"
);

chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
console.log(masalaChai instanceof Teacher);
```

Output:

```text
Username is Chai
A new course was added by Chai
Username is masalaChai
true
true
false
```

---

## 🧠 Quick Revision

- `extends` → creates inheritance between classes.
- `User` → parent class.
- `Teacher` → child class.
- `super()` → calls the parent constructor.
- A child class can use methods inherited from its parent.
- A child class can also have its own properties and methods.
- `instanceof` → checks whether an object is an instance of a class or its inheritance chain.

---

## Final Takeaways

```text
class User
    ↓
Parent Class
    ↓
extends
    ↓
class Teacher
    ↓
Child Class
    ↓
super()
    ↓
calls Parent Constructor
```

**Memory trick:**

> `extends` → inherit  
> `super()` → call parent constructor  
> `instanceof` → check instance/inheritance

---

## 📝 Practice

### 1 Create a `Student` Child Class

Create a `Person` class with a `name` property and `introduce()` method.

Create a `Student` class that extends `Person`.

---

### 2 Use `super()`

Create an `Employee` class with `name`.

Create a `Manager` class that extends `Employee` and adds `department`.

Use `super()` to initialize the name.

---

### 3 Add a Child Method

Create a `Vehicle` class with a `brand` property.

Create a `Car` class that extends `Vehicle`.

Add a `drive()` method to `Car`.

---

### 4 Test `instanceof`

Create a `Dog` class that extends an `Animal` class.

Create a dog object and check:

```js
dog instanceof Dog
dog instanceof Animal
```

---

### 5 Parent and Child Methods

Create a `User` class with:

```text
username
login()
```

Create an `Admin` class extending `User` with:

```text
deleteUser()
```

Create an admin object and call both methods.

---

### 6 Multiple Properties

Create a `Product` class with:

```text
name
price
```

Create a `DigitalProduct` class extending it with:

```text
fileSize
```

Use `super()` to initialize the parent properties.

---

### 7 Create a `Developer` Class

Create a `Person` parent class.

Create a `Developer` child class with:

```text
language
```

Add a method that prints the developer's name and programming language.

---

### 8 Check the Inheritance Chain

Create:

```text
Animal
   ↓
Mammal
   ↓
Dog
```

Create a `Dog` object and check `instanceof` against all three classes.

---

### 9 Parent Constructor + Child Constructor

Create a `GameCharacter` class with:

```text
name
health
```

Create a `Warrior` class extending it with:

```text
weapon
```

Use `super()` correctly.

---

### 10 Override a Method

Create a `User` class with a method called `role()`.

Create an `Admin` class extending `User`.

Create another `role()` method inside `Admin` with different output.

Test which method runs when called on an admin object.

---

### 11 Create a `Teacher` Child Class

Create a `Person` class with:

```text
name
```

Create a `Teacher` class extending `Person` with:

```text
subject
```

Add a method that prints both values.

---

### 12 Create a `PremiumUser`

Create a `User` class with:

```text
username
```

Create a `PremiumUser` class extending `User`.

Add a method called `accessPremiumContent()`.

---

### 13 Check Parent and Child Instances

Create:

```text
Account
   ↓
SavingsAccount
```

Create one `SavingsAccount` object and check whether it is an instance of both classes.

---

### 14 Create a `Laptop` Child Class

Create a `Device` class with:

```text
brand
```

Create a `Laptop` class extending `Device` with:

```text
ram
```

Use `super()` and print both properties.

---

### 15 Final Challenge — Inheritance System

Create:

```text
User
 ↓
Teacher
 ↓
Instructor
```

Give each class at least one property or method of its own.

Create an `Instructor` object and test which methods it can access.

Then use `instanceof` to check whether the object is an instance of:

```text
Instructor
Teacher
User
```