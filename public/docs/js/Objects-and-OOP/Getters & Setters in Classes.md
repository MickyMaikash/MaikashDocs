# JavaScript Getters & Setters in Classes

Getters and setters allow us to control how class properties are **read and changed**.

They use:

```js
get
set
```

A getter runs when we **access** a property, while a setter runs when we **assign** a value to a property.

---

## Creating a Getter and Setter

Example:

```js
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }
}
```

Here we have:

```js
get email()
```

and:

```js
set email(value)
```

Both use the same property name: `email`.

---

## Getter

A getter is used when we **read/access** a property.

```js
get email() {
    return this._email.toUpperCase();
}
```

When we write:

```js
const user1=new User("micky","abcd")
console.log(user1.email);
```

JavaScript automatically calls:

```js
get email()
```

So we don't write:

```js
user1.email()
```

We simply write:

```js
user1.email
```

The getter returns:

```js
this._email.toUpperCase()
```

So:

```text
micky
  ↓
MICKY
```

---

## Setter

A setter is used when we **assign a value** to a property.

```js
set email(value) {
    this._email = value;
}
```

When we write:

```js
this.email = email;
```

inside the constructor, JavaScript automatically calls:

```js
set email(value)
```

The value is then stored in:

```js
this._email
```

---

## Why Use `_email`?

Notice that the setter doesn't do this:

```js
set email(value) {
    this.email = value;
}
```

That would call the setter again and again.

Instead, we store the actual value in a different property:

```js
this._email = value;
```

So the flow is:

```text
this.email = email
       ↓
   setter runs
       ↓
this._email = value
       ↓
value is stored
```

Then when we read:

```js
hitesh.email
```

the getter runs:

```text
hitesh.email
      ↓
 getter runs
      ↓
this._email
      ↓
.toUpperCase()
      ↓
returned value
```

The `_` is a naming convention commonly used to indicate that the property is intended to be accessed internally.

---

## Getter and Setter Together

Let's use both email and password:

```js
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}mikcy`;
    }

    set password(value) {
        this._password = value;
    }
}
```

Create an object:

```js
const user2 = new User(
    "m@malk;2.ai",
    "abcd"
);
```

When this runs:

```js
this.email = email;
```

the setter runs:

```js
set email(value) {
    this._email = value;
}
```

And:

```js
this.password = password;
```

calls:

```js
set password(value) {
    this._password = value;
}
```

---

## Accessing the Properties

Now:

```js
console.log(user2.email);
```

calls:

```js
get email() {
    return this._email.toUpperCase();
}
```

Output:

```text
"M@MALK;2.ai"
```

And:

```js
console.log(user2.password);
```

calls:

```js
get password() {
    return `${this._password}mikcy`;
}
```

Output:

```text
abcdmikcy
```

---

## 7️⃣ Complete Example

```js
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}mikcy`;
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User(
    "h@hitesh.ai",
    "abcd"
);

console.log(hitesh.email);
console.log(hitesh.password);
```

Output:

```text
H@HITESH.AI
abcdmikcy
```

---

## 🧠 Quick Revision

- `get` → runs when a property is **read**.
- `set` → runs when a property is **assigned**.
- Getter is accessed like a normal property:
  ```js
  user.email
  ```
- Setter is triggered by assignment:
  ```js
  user.email = "new@email.com"
  ```
- `_email` stores the actual value.
- `_password` stores the actual password value.
- Getter can modify or process the value before returning it.
- Setter can control how a value is stored.

---

## Final Takeaways

```text
GETTER
user.email
    ↓
get email()
    ↓
return this._email
```

```text
SETTER
user.email = "abc"
       ↓
set email(value)
       ↓
this._email = value
```

### Memory Trick

> **`get` → Get the value**

> **`set` → Set the value**

The important thing to remember is:

> **Getter and setter use the same property name, while the actual value is commonly stored in a separate property such as `_email`.**

---

## 📝 Practice

### 1 Create a User Class

Create a `User` class with:

```text
username
email
```

Create a getter and setter for `email`.

- Store the actual email in `_email`.
- Make the getter return the email in uppercase.
- Create a user and print the email.

---

### 2 Password Getter

Create a `User` class with a `password` property.

Use a getter so that when the password is accessed, it returns:

```text
password123
```

with `"123"` added to the original password.

For example:

```text
Original: abc
Output: abc123
```

---

### 3 Password Setter

Create a `User` class with a password setter.

Store the assigned password inside:

```js
this._password
```

Create an object and assign a password through:

```js
user.password = "secret";
```

Then verify that the value was stored correctly.

---

### 4 Understand the Getter

Create:

```js
class Product {
    constructor(name) {
        this.name = name;
    }
}
```

Add a getter for `name` that returns the name in uppercase.

Create a product:

```text
laptop
```

Then:

```js
console.log(product.name);
```

Expected:

```text
LAPTOP
```

---

### 5 Understand the Setter

Create a `Player` class with a `score` property.

Use a setter so that:

```js
player.score = 50;
```

stores the value in:

```js
this._score
```

Then use a getter to return the score.

---

### 6 Getter + Setter Together

Create a `BankAccount` class with:

```text
accountHolder
balance
```

Create a getter and setter for `balance`.

Store the actual value in:

```js
this._balance
```

Create an account and set its balance.

Then print the balance using the getter.

---

### 7 Final Challenge

Create a `Student` class with:

```text
name
marks
```

Use:

- a setter for `marks`
- a getter for `marks`

The setter should store the value in `_marks`.

The getter should return:

```text
Marks: <marks>
```

Example:

```text
Marks: 85
```

Create two students and print their marks.

---

### 🧠 Challenge Question

Why do we use:

```js
this._email
```

instead of doing this inside the setter?

```js
set email(value) {
    this.email = value;
}
```

Think about **what would happen when the setter calls `this.email` again**.