# Strings in js
> A **String** is a data type used to store and work with text, such as names, words, sentences, and symbols.
> ** Strings follows 0 based Indexing

## ways to add variable value in String 
> 1. we can use + operator like adding in String

**Example**
```js
let car1="Ferrari"
let noOfCar=8

console.log("He has " + noOfCar+ " "+car1) //this way like for log

let message="He has " + noOfCar+ " "+car1
console.log(message) //for storing in a variable
```
*Output*
```text
He has 8 Ferrari
He has 8 Ferrari
```
> here using + operator between string and variable then if variable is not of type then type conversion take place in string and then things are added together

> 2. Using Backtics we can directly add variable value inside string wherever we want
- basically we initiliase our string with `` and inside it where we want to add /invoke our variable there
- we use **${}** inside this curly bracket we add that variable name

*Example*
```js
let carName="Bmw"
let noOfCar=10

console.log(`He has ${noOfCar} ${carName}`) //this way like for log

let message=`He has ${noOfCar} ${carName}`
console.log(message) //for storing in a variable
```
*Output*
```text
He has 10 Bmw
He has 10 Bmw
```
> generally this backtics way is more used whenever we want to add things inside the string rather writing multiple **+** for string catenation
---

## Ways to create Strings
```js
let name="Micky" //1st way ->  Normal /primitive String
let username=new String("MickyMaikash") //2nd way or object way -> creates a string object 
console.log(name)
console.log(typeof name)
console.log(username)
console.log(typeof username)
```
**Output**
```text
Micky
string
[String: 'MickyMaikash']
object
```
> Note: In normal JavaScript code, prefer the primitive string syntax ("Micky") instead of new String().
---

## Commonly Used String Methods


> Below are some of the most commonly used methods and properties of JavaScript strings.

### length 
> it gives the total number of characters present in a string

*Example*
```js
const message="This Section is about String methods and properties"
console.log(message.length)

```
*Output*
```text
51
```

> it returned 51 because "message" contains 51 characters
> remember that length is a property, so we don't use () with it
- name.length     // correct syntax
- name.length()   // wrong syntax
---

### charAt()
> gives specific character of string at specific index we provide in the bracket

*Example*
```js
const starName="Sirus"
console.log(starName.charAt(2))
```
*Output*
```text
r
```
> it returned the value present at 2nd index means 3rd postion
---

## includes()
> it returns true or false based on the value we put in that bracket is it present in our string 

**Example**
```js
let name = "MickyMaikash"; 
console.log(name.includes("Micky")); 
console.log(name.includes("John"));
```
*Output*
```text
true
false
```
> it return **true** because "Micky" presnet in the *name*
> it return **false** because "John" not present in the *name*
---
## indexOf()
> Returns the index of the first occurrence of a  value we put in that bracket.
> if no value present then it returns -1

*Example*
```js
let carName = "BMW";

console.log(carName.indexOf("B"));
console.log(carName.indexOf("a"));
```
*Output:*
```text
0
-1
```
> it returned 0 because "B" is present in *carName* at 0th Index
> it returned -1 because "a" is not present in *carName* 
---
## lastIndexOf()
> it returns the last occurence of the character we passsed in that bracket 
> if not character present then returns -1

**Example**
```js
let slangName = "HelloHiorHilo";

console.log(slangName.lastIndexOf("H"));
console.log(slangName.lastIndexOf("i"));
console.log(slangName.lastIndexOf("a"));
```
**Output**
```text
9
10
-1
```
> it return 9 because the last index of "H" in **slangName" is 9
> it return 10 because the last index of "i" in **slangName" is 9
> it return -1 because "a" is not present in the **slangName**
---

## startsWith()

> it returns true or false based on whether a string starts with a specified value we put in that bracket

**Example**

```js
let value = "Hello";

console.log(value.startsWith("He"));

console.log(value.startsWith("lo"));
```

**Output**

```text
true
false
```

> it returned **true** because the **value** starts with "He"
> it returned **false** because the **value** does not start with "lo"

---

## endsWith()

> it returns true or false based on whether a string ends with a specified value we put in that bracket

**Example**

```js
let value = "Hello";

console.log(value.endsWith("lo"));

console.log(value.endsWith("He"));
```

**Output**

```text
true
false
```

> it returned **true** because the **value** ends with "lo"
> it returned **false** because the **value** does not end with "He"

---

## slice()

> it extracts a part of a string based on the starting and ending index we provide in the bracket
> the ending index is not included

**Example**

```js
let name = "MickyMaikash";

console.log(name.slice(0, 5)); //it goes from 0 to 4
```

**Output**

```text
Micky
```

> it started from index **0** and stopped before index **5**
> therefore, characters from index **0 to 4** were returned

### Negative Index

> we can also use a negative index in `slice()`
> a negative index starts counting from the end of the string

```text
M  i  c  k  y
0  1  2  3  4
-5 -4 -3 -2 -1
```

**Example**

```js
let name = "Micky";

console.log(name.slice(-2)); //it will go from -2 to end 
```

**Output**

```text
ky
```
> `-2` means start from the 2nd character from the end
> therefore, it returned "ky"
---

## substring()

> it extracts a part of a string based on the starting and ending index we provide in the bracket
> the ending index is not included

**Example**

```js
let name = "MickyMaikash";

console.log(name.substring(0, 5));
```

**Output**

```text
Micky
```

> it started from index **0** and stopped before index **5**
> therefore, characters from index **0 to 4** were returned

### Difference Between `slice()` and `substring()`

> one important difference is that `slice()` supports negative indexes, while `substring()` treats negative values as `0`

**Example**

```js
let name = "Micky";

console.log(name.slice(-2));

console.log(name.substring(-2)); //it will return whole text from 0 to end as it consider negative index as 0 and we don't provide where till it go
```

**Output**

```text
ky
Micky
```

> `slice(-2)` starts from the 2nd character from the end
> `substring(-2)` treats `-2` as `0`, so it starts from index `0`

---

## toLowerCase()
> it converts all the characters of a string into lowercase letters

**Example**

```js
let username = "MICKYMaikash";

console.log(username.toLowerCase());
```

**Output**
```text
mickymaikash
```

> it converted all the capital letters into lowercase letters

---

## toUpperCase()
> it converts all the characters of a string into uppercase letters

**Example**
```js
let name = "micky";
console.log(name.toUpperCase());
```

**Output**

```text
MICKY
```

> it converted all the lowercase letters into uppercase letters

---

## trim()
> it removes extra whitespace from the beginning and end of a string

**Example**
```js
let stars = "   2342342323435   ";
console.log(name.trim());
```

**Output**
```text
2342342323435
```

> it removed the extra whitespace from the beginning and end of the string
> it does not remove whitespace between words

**Example**
```js
let superHero = "   BatMan Superman   ";
console.log(superHero.trim());
```
**Output**
```text
BatMan Superman
```

> the whitespace between "Micky" and "Maikash" was not removed

---

## trimStart()
> it removes whitespace only from the beginning of a string

**Example**

```js
let spiderman = "   Andrew Garfield   ";
console.log(spiderman.trimStart());
```

**Output**

```text
Andrew Garfield      
```

> it removed the whitespace from the beginning but kept the whitespace at the end

---

## trimEnd()

> it removes whitespace only from the end of a string

**Example**

```js
let spiderman = "   Tom Holland   ";

console.log(spiderman.trimEnd());
```

**Output**
```text
   Tom Holland
```

> it removed the whitespace from the end but kept the whitespace at the beginning

---

## replace()
> it replaces the first occurrence of a specified value with another value

**Example**
```js
let message = "Hello World World";
console.log(message.replace("World", "Micky"));
```

**Output**
```text
Hello Micky World
```

> it replaced only the **first** occurrence of "World" with "Micky"
> the second "World" remained unchanged

---

## replaceAll()
> it replaces all occurrences of a specified value with another value

**Example**
```js
let message = "Hello World World";
console.log(message.replaceAll("World", "Micky"));
```

**Output**
```text
Hello Micky Micky
```

> it replaced **all** occurrences of "World" with "Micky"

---

## split()
> it splits a string based on the value we provide in the bracket and returns an **Array**

**Example**

```js
let name = "Micky-Maikash";

console.log(name.split("-"));
```

**Output**

```text
[ 'Micky', 'Maikash' ]
```

> it split the string whenever it found `-`
> it returned an **Array** containing the separated values

We can also split every character by providing an empty string:

```js
let IronMan = "Robert Downey Jr.";
console.log(IronMan.split(""));
```

**Output**

```text
[
  'R', 'o', 'b', 'e', 'r', 't', ' ', 'D', 'o', 'w', 'n', 'e', 'y', ' ','J', 'r', '.'
]
```

> because we provided an empty string, it separated every character

---

## concat()
> it joins two or more strings together
**Example**

```js
let firstSpiderMan = "Tobey Maguire";
let secondSpiderMan = "Andrew Garfield";
let thirdSpiderMan = "Tom Holland";

console.log(firstSpiderMan.concat(" ", secondSpiderMan).concat(" ",thirdSpiderMan));
```

**Output**
```text
Tobey Maguire Andrew Garfield Tom Holland
```

> it joined **firstSpiderMan** , **secondSpiderMan** and **thirdSpiderMan** together with a space between them

---

## repeat()

> it repeats a string the number of times we provide in the bracket

**Example**
```js
let message = "Hi ";
console.log(message.repeat(3));
```

**Output**
```text
Hi Hi Hi
```

> it repeated the "Hi " string **3 times**

---

## padStart()

> it adds the specified value to the beginning of a string until the string reaches the length we provide

**Example**

```js
let hr = "5";
console.log(hr.padStart(2, "0"));
```

**Output**

```text
05
```
> the original string has a length of **1**

> `padStart(2, "0")` adds `"0"` at the beginning until the total length becomes **2**

---

## padEnd()

> it adds the specified value to the end of a string until the string reaches the length we provide

**Example**

```js
let name1 = "Micky";
let name2 = "Rahul";
let name3 = "Aman";

console.log(name1.padEnd(10, " ") + 20);
console.log(name2.padEnd(10, " ") + 25);
console.log(name3.padEnd(10, " ") + 18);
```

**Output**
```text
Micky     20
Rahul     25
Aman      18
```

> the original strings has a length more than  **1**
> `padEnd(10, " ")` adds `" "` at the end until the total length becomes **10**
> it gives us a nice table format
---

## match()
> it searches for a specified pattern in a string and returns the matching result

**Example**

```js
let message = "I like JavaScript";
console.log(message.match(/JavaScript/));
console.log(message.match(/Python/));
```

**Output**

```text
[ 'JavaScript', index: 7, input: 'I like JavaScript', groups: undefined ]
null
```

> it found "JavaScript" in the **message** and returned the matching result
> it doesn't find python means no match is found, it returns `null`.
> `match()` is commonly used with **regular expressions**

---

## search()

> it searches for a specified pattern in a string and returns the index where the match is found

**Example**

```js
let message = "I like Python";
console.log(message.search(/JavaScript/));
console.log(message.search(/Python/));
```

**Output**
```textj
-1
7
```
> it returned **-1** because "Javascript" not found in string
> it returned **7** because "Python" starts at index **7**

If no match is found, it returns `-1`.
---

## toString()

> it converts a value into a string

**Example**

```js
let number = 123;
console.log(number.toString());
console.log(typeof number.toString());
```

**Output**

```text
123
string
```

> `number` was originally a **Number**
> `toString()` converted it into a **String**

---

# Quick Revision

| Method          | What it does                                 |
| --------------- | -------------------------------------------- |
| length          | string property which gives the total number of character in string
| `charAt()`      | gives the character at a specific index      |
| `includes()`    | checks whether a value is present            |
| `indexOf()`     | gives the index of the first occurrence      |
| `lastIndexOf()` | gives the index of the last occurrence       |
| `startsWith()`  | checks whether a string starts with a value  |
| `endsWith()`    | checks whether a string ends with a value    |
| `slice()`       | extracts a part of a string                  |
| `substring()`   | extracts a part of a string                  |
| `toLowerCase()` | converts the string to lowercase             |
| `toUpperCase()` | converts the string to uppercase             |
| `trim()`        | removes whitespace from both ends            |
| `trimStart()`   | removes whitespace from the beginning        |
| `trimEnd()`     | removes whitespace from the end              |
| `replace()`     | replaces the first occurrence                |
| `replaceAll()`  | replaces all occurrences                     |
| `split()`       | splits a string and returns an Array         |
| `concat()`      | joins strings                                |
| `repeat()`      | repeats a string                             |
| `padStart()`    | adds characters to the beginning             |
| `padEnd()`      | adds characters to the end                   |
| `match()`       | searches for a pattern and returns the match |
| `search()`      | searches for a pattern and returns its index |
| `toString()`    | converts a value into a string               |


# 🧠 String Practice Questions


### Question 1

> Find the total number of characters in `"Wireless Keyboard"`.

---

### Question 2

> Find the character present at index `4` in `"Elephant"`.

---

### Question 3

> Check whether `"student@example.com"` contains `"@"`.

---

### Question 4

> Find the position of the first `"o"` in `"Welcome Home"`.

---

### Question 5

> Find the position of the last `"a"` in `"JavaScript is amazing"`.

---

### Question 6

> Check whether `"https://example.com"` starts with `"https"`.

---

### Question 7

> Check whether `"assignment.pdf"` ends with `".pdf"`.

---

### Question 8

> Extract `"Delhi"` from `"DelhiIndia"`.

---

### Question 9

> Extract the last four characters from `"ORD5829"`.

---

### Question 10

> Extract `"Python"` from `"PythonProgramming"`.

---

### Question 11

> Convert `"WELCOME TO OUR WEBSITE"` into lowercase.

---

### Question 12

> Remove the extra whitespace from both sides of `"   Hello World   "`.

---

### Question 13

> Change only the first `"red"` to `"blue"` in `"red red red"`.

---

### Question 14

> Change every `"cat"` to `"dog"` in `"cat cat cat"`.

---

### Question 15

> Separate `"Milk,Bread,Eggs,Butter"` into individual values.

---

### Question 16

> Combine `"Rahul"` and `"Sharma"` into `"Rahul Sharma"`.

---

### Question 17

> Create a string containing `"*"` repeated 10 times.

---

### Question 18

> Convert `"42"` into `"0042"`.

---

### Question 19

> Find the position where `"React"` appears in `"I am learning React"`.

---

### Question 20

> A username is `"   DEV_MASTER   "`. Remove the unnecessary whitespace and convert it to lowercase.
>
> What should the final result be?

--- 


