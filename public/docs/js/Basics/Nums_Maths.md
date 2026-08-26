# Numbers and Math Module in Js
> ***Math*** is a built-in JavaScript object that provides mathematical constants and functions.

> A **Number** is a data type used to store numeric values, such as integers, decimal numbers, positive numbers, negative numbers, and special numeric values.

## Numbers 

### ways to initialize a Number variable
```js
const score=400 //1st -> normal primitive number
console.log(score)
console.log(`type of score is ${typeof score}`)

const newScore=new Number(120) //2nd -> number Object
console.log(newScore)
console.log(`type of sBcore is ${typeof newScore}`)
```
*Output*
```text
400
type of score is number
[Number: 120]
type of sBcore is object
```
> **Score** is a number (primitive type ) with value 400
> **newScore** is a number object(refrence type) with value 400

Both ways are okay generally we use 1st one

---
### Commonly Used Number Methods and Properties

#### toFixed()
> basically it is like rounding of or like getting how many decimal digit after number

*Example*
```js
let score=2340
console.log(score.toFixed(2)) //it will add two digit after decimal mean like 2340.00

let score2=2348.3
console.log(score2.toFixed(2)) //it will try to add two digit after decimal as here there is one digit after decimal so it will add one more 0 after first digit after decimal means 2340.30

let score3=2348.23423
console.log(score3.toFixed(2)) //in this case it will round off the digit after decimal to two digit only means like it would be round off to 2348.23
```

*Output*
```text
2340.00
2348.30
2348.23
```
---

### toPrecision()
> used to format a number to a specific number of significant digits.that we provide in that bracket
> Just remember for Knowledge and it is not used much

*Example*
```js
const othernum=1123.8996
console.log(othernum.toPrecision(4)) //it will try to round off to 4 significant digit which is 1123.1124
```

*Output*
```text
1124
```
---
### toLocaleString()
> used to format a number according to a specific country's/locale's number formatting rules.
> if we put "en-IN" then it would format it like normal our indian represent of rupees with commas
> if we put "en-US" then it would format number  with comma after 3 values from left

**Example**
```js
const amount=10000000
console.log(amount.toLocaleString('en-IN'))
console.log(amount.toLocaleString('en-US'))
```

*Output*
```text
1,00,00,000
10,000,000
```

---
## JavaScript Math Methods

### Math.abs()

> used to return the absolute value of a number, which means it removes the negative sign and returns the positive value.

> it converts a negative value into its positive value.

**Example**

```js
console.log(Math.abs(-4)) //4
console.log(Math.abs(4))  //4
```

**Output**

```text
4
4
```

---

### Math.round()
> used to round a number to the nearest integer.
>
> if the last decimal value is greater than `5`, it rounds up(2nd last increase by 1). eg 1.78=> 8>5 => 1.8 => 8>5 => 2
>
> if the last decimal value is less than `5`, it rounds down(2nd last remain same).eg 1.24 => 4<5 => 1.2=>2<5=>1
>
> if the last decimal value is equal to `5` then ti check the 2nd last value odd => round up and value even=>rounds down 

**Example**

```js
console.log(Math.round(4.6)) //6>5=>4+1=>5
console.log(Math.round(4.4)) //4<5=>4
console.log(Math.round(1.78)) //8>5=>1.8=>8>5=>1+1=2
console.log(Math.round(1.24)) //4<5=>1.2=>2<5=>1
console.log(Math.round(5.2345)) 
/**5==5=>2nd last decimal value is 
 * 4 even=>5.234=>4<5=>5.23=>3<5=>5.2=>2<5=>5
*/
console.log(Math.round(5.6575)) 
/**5==5=>2nd last decimal value is 
 * 7 odd => 5.658=>8>5=>5.66=>6>5=>5.7=>7>5=>5+1=6
*/
```

**Output**

```text
5
4
2
1
5
6
```

---

### Math.ceil()
> used to round a number up to the nearest integer.
>
> it returns the smallest integer that is greater than or equal to the given number.

**Example**

```js
console.log(Math.ceil(4.2))
console.log(Math.ceil(4.9))
console.log(Math.ceil(4))
```

**Output**

```text
5
5
4
```
> it doesn't round off it just check the nearest integer
> 
> like value 4.2=>it will return a integer which is greater than this number or equal to this number which is 5 and it never return a interger less that it's value so it answer is 5 not 4 ( still 4 is nearest integer)
>
> like value for 4=> it will return a integer which is equal to this number which is 4

> remember : first check value is integer then that is the answer as it is equal to number and it is integer if it is float  then greater integer value will be the answer
---

### Math.floor()
> used to round a number down to the nearest integer.
> it returns the largest integer that is less than or equal to the given number.

**Example**

```js
console.log(Math.floor(4.9))
console.log(Math.floor(4.2))
console.log(Math.floor(4))
```

**Output**

```text
4
4
4
```
> for value 4.9=> as it returns integer value less than 4.9 or equal to 4.9 which is 4
>
> for value 4 => as it returns integer value less than 4 or equal to 4 which is 4 

---

### Math.sqrt()
> used to find the square root of a number.
**Example**

```js
console.log(Math.sqrt(25))
```

**Output**

```text
5
```

---

### Math.pow()

> used to calculate a number raised to a particular power.

> Math.pow(2, 3) means 2³, which is 2 × 2 × 2.

**Example**

```js
console.log(Math.pow(2, 3))
```

**Output**

```text
8
```
> it is similar to exponential operator

*Example*
```js
console.log(Math.pow(2,3)) //2*2*2 = 8
console.log(2**3) //2*2*2=8
```

*output*
```text
8
8
```
---

### Math.min()
> used to find the minimum value from the numbers provided.

**Example**
```js
console.log(Math.min(4, 2, 2, 1, 0, -2))
```

**Output**
```text
-2
```

---

### Math.max()
> used to find the maximum value from the numbers provided.

**Example**
```js
console.log(Math.max(4, 2, 2, 1, 0, -2))
```

**Output**
```text
4
```

---

### Math.random()
> it is used to generate random value between **0**(inclusive) and **1**(exclusive)
>
> every time value generated would be differnet as it generated randomly 
>
> it value will be like equal or greater than 0 but always less than 1 eg 0.23,0,0.6543,0.99989
>
> value range => 0<=value<1

**Example**
```js
console.log(Math.random())
```
**Output**
```text
0.1778420392471045
```
> Note:-> whenever **Math.random()** code run so value would be differnt at everytime .at sometime it may be 0 or 0.2324345345 or 0.4223434534 or 0.992834534 so my answer and your answer could be different for this case so don't worry


---
> To get random value from given min and max range (min,max) we use like the following formula
```js
Math.floor(Math.random() * (max-min+1))+ min
```
- to understand this formula read all Intersting Cases below
- it's example is givent at the bottom

---

> Interesting Case 1.
- when you want like i want the value from 0 to 10(let assume) but Math.random always gives from 0 to 1 for that case
- we would multiply the result of Math.random() by 10 like Math.random()*10
- then it's range woule become 0 to 10 still there would be values we get will always less than 10 but greater than or equal to 0 
- range => (0x10) <= value < (1x10)  =>  0 <= value <10

*Example*
```js
console.log(Math.random()) //it will return 0 to 1(exclusive)
console.log(Math.random()*10) //it will return 0 to 10(exclusive)
```
*Output*
```text
0.9152821936941593
9.621483903577682
```
> Note: My answer and your answer could differ because Math.random() always generate different value when it runs so don't worry



---
> Interesting Case 2.
- when you want like i want the value from 2 to 10(let assume) but Math.random always gives from 0 to 1 for that case
- if we multiply the result of Math.random() by 10 then we get value from 0 to 10 but we want 2 to 10 so add 2 in the result after multiplication by 10 in Math.random() like (Math.random()*10)+2
- then it's range woule become 2 to 12 still there would be values we get will always less than 12 but greater than or equal to 0 or 10
- range => (0x10) <= value < (1x10)  => ( 0+2) <= value <(10+2) => 2 <= value < 12

*Example*
```js
console.log(Math.random()*10) //it will return 0 to 10(exclusive)
console.log((Math.random()*10)+2) //it will return 2 to 12(exclusive)
```
*Output*
```text
7.237808815548641
11.31286410675867
```
> Note: My answer and your answer could differ because Math.random() always generate different value when it runs so don't worry


> here values in 2nd case is more than 10 because we added 2 after when range was from 0 to 10 so range become 2 to 12 but if you want specifically from 2 to 10 we have to optimised that code 
>
> one thing is fixed we have to add minimum number so that range could start from there but our max value (which we use to multiply before addition of minimum number in result) could be optimized 
>
> we have to decrease max value (that much like as when minimum added at last so it could become equal to exact max value we want )
>
> let assume if we want 10 what happend we first multiply the result of Math.random() by 8 then range would be from 0 to 8 and then add 2 of it's result then range would be come 2 to 10 that what we want 
>
> max value we have to put for multiplication will be 8 (10-2)  so when we add 2 at last then it could be 10 so that rangle could become from (0 to 8) to (2 to 10)
>
> from this conclusion we get the formula if we want max 10 and min 2 then we have to multiply by max-min (10-2 =8 ) and at last we would add min(2)

- if you want to generate value between min to max like 2(inclusive) to 10(exclusive) or 3(inclusive) to 10(exclusive) then we coule use this 
```js
//replace the max and min value with your desired value
 (Math.random()*(max-min))+min
```

Example

```js 
// generate random number between 10(inclusive) to 20(exclusive)
const min=10
const max=20
console.log((Math.random() * (max-min))+ min)
```

*output*
```text
18.46382261474071
```
> Note: My answer and your answer could differ because Math.random() always generate different value when it runs so don't worry

---
> Intersting Case 3. 

- if you want like i want to get value from 2 to 10 but value should alwasy greater or equal to 2 and also equal to 10 or less than 10 means you want range when you want to include both max and min value 
- but Math.random() value provide first value inclusive (included) and last value (not included )
- if we use this **(Math.random()*(10-2))+2** then we could all values between 2 to 10 all vlaues will be less than 10 if we want to include 10 again we have to increase the multiplication factor by 1 like this
- **(Math.random()*(10-2+1))+2**=> **(Math.random()*(9))+2** =>range would first 0 to 9 and after 2 add it would be 0 to 11 means all values would be greater than 0 or eqaul to 0 and always less than 11 mean value could be 10 and less than 11 or more than 10

- now for getting values only between 2 to 10 we we can roundoff value before addition to min value like using Math.floor like Math.floor(Math.random()*(9))+2 => first it would get value between 0 to 9 => let assume it get 8.52342 but Math.floor() which returns integer equal or less than value mean it would be round off it to 8 and when we add 2 to it at last then it could become 10 that we want 

- Formula we get when we want both min and max inclusive in the result

```js
//replace the max and min value with your desired value
  Math.floor(Math.random(max-min+1))+min
```


*Example*
```js
const min=2
const max=10
console.log(Math.floor(Math.random() * (max-min+1))+ min)
//it will always like between 2 to 10 both included it range is [2,10]
```
*output*
```js
10
```




# 🧠 Quick Practice Numbers and Math 

### Question 1 — Positive Number

> Write a JavaScript program that takes a number stored in a variable and prints its positive/absolute value using a Math method.

> Example: `-45` → `45`

---

### Question 2 — Round a Decimal

> Create a variable containing a decimal number such as `78.65` and write code to round it to the nearest integer.

> Example: `78.65` → `79`

---

### Question 3 — Price Formatting

> A product costs `4567.8`.

> Write JavaScript code that displays the price with exactly `2` digits after the decimal point.

> Example: `4567.8` → `4567.80`

---

### Question 4 — Indian Number Format

> A company's annual revenue is `25000000`.

> Write code to display this number using the Indian number formatting system.

> Expected format:

```text
2,50,00,000
```

---

### Question 5 — Find the Largest Number

> You have three numbers stored in variables.

> Write a program that finds and prints the largest number using a Math method.

```js
const a = 45
const b = 78
const c = 32
```

---

### Question 6 — Find the Square Root

> A square has an area stored in a variable.

```js
const area = 144
```

> Write a program to calculate and print the side length of the square using a Math method.

> Expected result:

```text
12
```

---

### Question 7 — Random Number from 1 to 10

> Write JavaScript code that generates a random integer between `1` and `10`.

> Both `1` and `10` must be included.

> The number should change whenever the program runs.

---

### Question 8 — Random Number from 50 to 100

> Write a program that generates a random integer between `50` and `100`.

> only `50`  must be included.

> and `100` must not be included

> Do not manually write the possible numbers. Use `Math.random()`.

---

### Question 9 — Random Dice Roll

> Write a program that simulates rolling a normal six-sided dice.

> Every time the program runs, it should generate a random integer from `1` to `6`.

> Both `1` and `6` must be possible.

---

### Question 10 — Random Number Guessing Setup

> Create a program that generates a random integer between `1` and `100` and stores it in a variable called `randomNumber`.

> Then print:

```text
Random number generated: <number>
```

> Requirements:

- Use `Math.random()`.
- The result must be an integer.
- The minimum possible value must be `1`.
- The maximum possible value must be `100`.
- Both `1` and `100` must be possible.

---