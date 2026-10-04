# JavaScript Getters & Setters with `Object.defineProperty()`

JavaScript also allows us to create **getters and setters manually** using:

```js
Object.defineProperty()
```

Instead of using the `get` and `set` syntax inside a `class`, we can define them directly on an object.

---

## Creating a Constructor Function

We start with a constructor function:

```js
function user(email, password) {
    this._email = email;
    this._password = password;
}
```

When we create an object using:

```js
const chai = new user("chai@chai.com", "chai");
```

the values are initially stored as:

```text
_email → "chai@chai.com"
_password → "chai"
```

The `_` properties are used to store the actual values.

---

## Creating a Getter and Setter

We can use:

```js
Object.defineProperty()
```

to define how a property behaves.

Syntax:

```js
Object.defineProperty(object, property, {
    get: function() {},
    set: function(value) {}
});
```

For example:

```js
Object.defineProperty(this, 'email', {
    get: function() {
        return this._email.toUpperCase();
    },

    set: function(value) {
        this._email = value;
    }
});
```

Here we are defining `email` with a getter and setter.

---

## Getter for `email`

The getter is:

```js
get: function() {
    return this._email.toUpperCase();
}
```

It runs when we access:

```js
chai.email
```

The flow is:

```text
chai.email
    ↓
getter runs
    ↓
this._email
    ↓
.toUpperCase()
    ↓
"CHAI@CHAI.COM"
```

So:

```js
console.log(chai.email);
```

outputs:

```text
CHAI@CHAI.COM
```

---

## Setter for `email`

The setter is:

```js
set: function(value) {
    this._email = value;
}
```

It runs when we assign a new value:

```js
chai.email = "newchai@gmail.com";
```

The flow is:

```text
chai.email = "newchai@gmail.com"
              ↓
         setter runs
              ↓
this._email = value
```

---

## Getter and Setter for `password`

We can do the same thing for `password`:

```js
Object.defineProperty(this, 'password', {
    get: function() {
        return this._password.toUpperCase();
    },

    set: function(value) {
        this._password = value;
    }
});
```

Now:

```js
console.log(chai.password);
```

returns:

```text
CHAI
```

because the getter converts the stored password to uppercase.

---

## Complete Example

```js
function user(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },

        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },

        set: function(value) {
            this._password = value;
        }
    });
}

const chai = new user("chai@chai.com", "chai");

console.log(chai.email);
console.log(chai.password);
```

Output:

```text
CHAI@CHAI.COM
CHAI
```

---

## Understanding the Flow

For `email`:

```text
new user(...)
      ↓
_email stores original value
      ↓
Object.defineProperty()
      ↓
email gets getter + setter
      ↓
chai.email
      ↓
getter runs
      ↓
this._email.toUpperCase()
```

For changing the value:

```text
chai.email = "new@email.com"
            ↓
        setter runs
            ↓
this._email = value
```

---

## 🧠 Quick Revision

- `Object.defineProperty()` can define properties with custom behavior.
- `get` runs when the property is read.
- `set` runs when the property is assigned.
- `_email` and `_password` store the actual values.
- `email` and `password` provide controlled access to those values.
- The getter can process the value before returning it.
- The setter controls how a new value is stored.

---

## Final Takeaways

```text
Object.defineProperty()
          ↓
    define a property
          ↓
     ┌────┴────┐
     ↓         ↓
   get        set
     ↓         ↓
 read value  assign value
```

### Memory Trick

> `get` → **when getting/reading the value**

> `set` → **when setting/changing the value**

> `Object.defineProperty()` → **manually define property behavior**

---

## 📝 Practice

### 1 Create a Product Property

Create a constructor function `Product` with:

```text
name
price
```

Use `Object.defineProperty()` to create a getter and setter for `name`.

Make the getter return the name in uppercase.

---

### 2 Create a Price Getter

Create a `Product` constructor with a `price`.

Use a getter so that accessing:

```js
product.price
```

returns the stored price with `₹` before it.

Example:

```text
₹500
```

---

### 3 Create a Setter

Create a constructor function `Student` with a `_name` property.

Use `Object.defineProperty()` to create a `name` setter that stores the assigned value in `_name`.

---

### 4 Getter + Setter Together

Create a `Book` constructor with:

```text
title
author
```

Create getters and setters for both properties using `Object.defineProperty()`.

Make the `title` getter return the title in uppercase.

---

### 5 Final Challenge

Create a `BankAccount` constructor with:

```text
accountHolder
balance
```

Use `Object.defineProperty()` to create a getter and setter for `balance`.

The getter should return:

```text
Balance: ₹<amount>
```

The setter should update the stored `_balance` value.