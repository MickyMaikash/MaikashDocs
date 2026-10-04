# 🧩 JavaScript `static` Methods In Class

A `static` method belongs to the **class itself**, rather than to the objects created from that class.

This means the method cannot normally be accessed through an instance of the class.

---

## Creating a Static Method

A static method is created using the `static` keyword:

```js
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}
```

Here:

```js
static createId()
```

is a static method.

---

## Static Method Cannot Be Accessed Through an Instance

Create an object:

```js
const micky = new User("micky");
```

Trying to call:

```js
micky.createId();
```

will not work because `createId()` is static.

The method belongs to the `User` class itself, not to the `micky` object.

```text
User class
   ↓
createId()  ← static method

micky object
   ↓
cannot access createId()
```

---

## Accessing a Static Method

A static method is accessed using the **class name**:

```js
console.log(User.createId());
```

Output:

```text
123
```

So:

```js
User.createId();
```

works, while:

```js
micky.createId();
```

does not.

> `static` prevents instances from accessing that method.

---

## Normal Method vs Static Method

### Normal method

```js
class User {
    logMe() {
        console.log("Hello");
    }
}

const micky = new User("micky");

micky.logMe();
```

A normal method can be accessed through an instance.

### Static method

```js
class User {
    static createId() {
        return "123";
    }
}

User.createId();
```

A static method is accessed through the class itself.

```text
Normal method:
object → method

Static method:
class → method
```

---

## Static Methods With Inheritance

Static methods also belong to the class, and a child class can access inherited static members through the class.

```js
class User {
    static createId() {
        return `123`;
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}
```

The inheritance relationship is:

```text
User
 ↓
Teacher
```

The `Teacher` class inherits from `User`.

However, the static method is **not accessed through a `Teacher` instance**.

```js
const iphone = new Teacher(
    "iphone",
    "i@phone.com"
);
```

This will not work:

```js
iphone.createId();
```

But the static method can be accessed through the class:

```js
User.createId();
```

And inherited static functionality can also be accessed through:

```js
Teacher.createId();
```

---

## Normal Methods Still Work on Instances

The `Teacher` class inherits the normal `logMe()` method from `User`.

```js
iphone.logMe();
```

Output:

```text
username: iphone
```

So in this example:

```text
User
│
├── logMe()       → normal method
│
└── createId()    → static method
```

The instance can use:

```js
iphone.logMe();
```

but not:

```js
iphone.createId();
```

---

## Complete Example

```js
class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const micky = new User("micky");

console.log(User.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher(
    "iphone",
    "i@phone.com"
);

iphone.logMe();

console.log(Teacher.createId());
```

Output:

```text
123
username: iphone
123
```

---

## 🧠 Quick Revision

- `static` creates a method that belongs to the **class**.
- Static methods are not normally accessed through instances.
- Normal methods can be accessed through instances.
- Static methods are called using the class name.
- Static members can participate in class inheritance.
- `super()` still calls the parent constructor when creating a child instance.

---

## Final Takeaways

```text
Normal method:

class → instance → method


Static method:

class → static method
```

**Memory trick:**

> `static` → belongs to the class, not the instance.

## 📝 Practice

### 1 Choose Whether `static` Is Needed

Create a `User` class that has:

- `username`
- `email`
- a method `showUser()` that prints the user's information
- a method `generateUserId()` that returns a fixed ID format such as `"USER-12345"`

Create multiple users.

Now decide:

> Should `generateUserId()` be a normal method or a `static` method?

Implement your choice and explain **why the method should or should not belong to individual user objects**.

**Hint:** Ask yourself:

> Does this method need any information from a particular user's object (`this`), or is it a utility that belongs to the `User` class itself?
