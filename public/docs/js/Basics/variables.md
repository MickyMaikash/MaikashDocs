# Variables in Javascript
- variable is a container(named storage location) used to store a value
- In js we don't need to define the type of variable means which type of data we want to store in them like whether it is number/int , boolean or string 
- **=* it is called assignment Operator used to assign a value to a variable
**Example**

```js
let numberOfStars=12
```
- here `let` declares the vairable
- `numberofStars` name of the variable
- `12` value stored in that variable

--- 
## How to create  a variable in javascript
> to create a variable in js we use keywords like 
```
let
```
+ for creating a variable which value could be change or reassign 
```
const
```
+ for creating a variable which value is fixed (we don't want to change basically) which can't be reassigned or changed to another value
```
var
```
+  it is similar to let but it is not used much here due to it's issue like function scope 

**Prefer Not to use Var because of issue in Block Scope and functional scope**

**var** ->function scope

**let** or **const** -> block scope

---

*Example:*

```js
let number1 // variable number1 created 
let number1=23  //variable number1 assigned a value 23 by = (assignemtn operator)
const city= "Delhi" //variable city created and value "Delhi" assigned to it
console.log(number1)
console.log(city)
```

*Output:*
```
23
Delhi
```

---

### Check which variable could be reassigned
**Variable created With `let` keyword Example**
```js
let Id = 234234
console.log(Id)
Id=1342
console.log(Id)
```

**Output:**
```
234234
1342
```
- here first result is before reassign and 2nd result is after reassign
so we can easily update /reassign and make changes in variable which created with `let` keyowords

**Variable created With `const` keyword Example**
```js
const name = "Micky"
console.log(name)
name="Maikash"
console.log(name)
```

**Output:**
```
name="Maikash"
    ^

TypeError: Assignment to constant variable.
```
- here eror appear in terminal which says ***TypeError: Assignment to constant variable*** means we are trying to update the value of **constant variable which is not possible**. thus we can change the value of variable made with `const` Keyowrd



**Variable created With `var` keyword Example**
```js
var carName = "Ferrari"
console.log(carName)
carName="BMW"
console.log(carName)
```

**Output:**
```
Ferrari
BMW
```
- we got both previous value of *carName* and also new value of *carName* after resassign we can easily update /reassign and make changes in variable which created with `var` keyowords just similar to as `let` keywords

--- 

## Rule for Variable Names

* A variable name cannot start with a number.
* A variable name cannot contain spaces.
* A variable name can start with a letter, _, or $ in js.
* After the first character, a variable name can contain letters, numbers, _, and $.
* Special characters such as @, &, #, etc. are not allowed.
* JavaScript variable names are case-sensitive.
* Reserved JavaScript keywords cannot be used as variable names. such as `new` ,`let`,`async` ,`class` etc

> Rule to remember:- First character → letter, _ or $
> Remaining characters → letters, numbers, _ or $

*Example of Variables*

```js
let starPoint=12          //valid variable name 
const _starCount=100      //valid variable  
let name = "Micky";     //valid variable name
let age20 = 20;        //valid variable name
let _username = "Micky";  //valid variable name
let $price = 500;        //valid variable name
let user_name = "Micky";  //valid variable name
let user2 = "John";      //valid variable name

console.table([starPoint,user2,$price,user_name,_starCount,name,age20,_username])
```

*Output*
```js
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 12      │
│ 1       │ 'John'  │
│ 2       │ 500     │
│ 3       │ 'Micky' │
│ 4       │ 100     │
│ 5       │ 'Micky' │
│ 6       │ 20      │
│ 7       │ 'Micky' │
└─────────┴─────────┘
```

**Example of wrong variable names**

```js
// ❌ Invalid variable names
let 2name = "Micky";       // Cannot start with a number
let @name = "Micky";       // Special character not allowed
let user-name = "Micky";   // '-' is not allowed
let user name = "Micky";   // Spaces are not allowed

console.table([2name,@name,user-name])
```
**Output**
```
let 2name = "Micky";       // Cannot start with a number
    ^^

SyntaxError: Invalid or unexpected token
```
> it is giving error because these are not valid variables name according to rule of  variable naming in js

***Count the Number of correct variables from below given values*** 
```
1. userName
2. 2users
3. _score
4. user-name
5. $price
6. first name
7. age25
8. @username
9. _123
10. 123_user
```

---
# 🧠 Practice
Try to solve these using only what you have learned so far.

## 1. Predict the output

```js
let galaxyName = "Milky Way";

console.log(galaxyName);
```
> what will be the results?

---

## 2. Welcome Message
- Create a variable to store your name and print:
```text
Welcome, Micky!
```
> here as i printed my name

---

## 3. Predict the output
```js
let secretCode = "X42";

secretCode = "Z99";

console.log(secretCode);
```
> what will be the results?

---

## 4. Introduce Yourself

Create variables for your name, city, and favorite color.

Print something like:

```text
My name is Micky.
I live in Ahmedabad.
My favorite color is Black.
```

---

## 5. Find the Mistake
```js
let player-name = "Shadow";

console.log(player-name);
```
> What is wrong with the variable?

---

## 6. Choose the Correct Keyword
- The value of rocketFuel will be changed later.
```js
_____ rocketFuel = "Low";
```
> Which keyword(`let` or `var` or `const`) should be used?

---

## 7. Create a Game Character

Create variables for:

* Character name
* Character type
* Character weapon

Print:

```text
Character: Shadow
Type: Assassin
Weapon: Katana
```

---

## 8. Movie Information

Create variables for a movie's:

* Name
* Director
* Language

Print all the information using `console.log()`.

---

## 9. Change a Variable

Create a `let` variable called `currentLevel`.

Give it an initial value and then change it to another value.

Print the value **before and after** changing it.

---

## 10. Constant Information

Create three `const` variables for information that should not change:

* Your birth country
* Your favorite programming language
* Your favorite game

Print them using `console.log()`.

---

## 11. Build a Profile

Create variables for:

```text
Username
Country
Favorite Game
Favorite Language
```

Then print them as a small profile:

```text
===== PROFILE =====
Username: ...
Country: ...
Favorite Game: ...
Favorite Language: ...
===================
```

---

## 12. Fix the Code

The following code contains invalid variable names. Fix them so the program runs:

```js
let 1player = "Shadow";
let player-name = "Rex";
let @weapon = "Sword";

console.log(1player);
console.log(player-name);
console.log(@weapon);
```

---

## 13. Make Your Own

Create **5 variables** about anything you want.

For example, you could make variables about:

* A game
* A movie
* A football team
* A fictional character
* A spaceship
* Yourself

Print all five using `console.log()`.

---

## ⭐ 14. Mini Challenge

Create variables for a fictional character and print this:

```text
========================
      CHARACTER CARD
========================
Name: Shadow
Class: Ninja
Weapon: Katana
World: Dark Realm
========================
```

Use only variables and `console.log()`.



