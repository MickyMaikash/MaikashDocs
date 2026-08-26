# Arithmetic Operator in Js
Arithmetic operators in Js are used to perform basic mathematical operations on numeric values.

## Common Operators

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (remainder of division)
- `**` : Exponentiation (power)



**for example**:
```js
console.log(2+2) //addition operator
console.log(4-2) //subtraction operator
console.log(3*2) //multiplication opeartor
console.log(3/2) //division operator
console.log(4%3) //modulus operator(it returns remainder)
console.log(2**8) //exponenetial operator
```
**Output**
```text
4
2
6
1.5
1
256
```
> important NOtes: for ***/*** in other language such python c++ java and it returns integer part of result and leave the float .here is not that case here in js it return the value it get like after division as in js there is no integer/float datatype there is a number datatype

**another example**
```js
let value=3
let negativeValue=-value
console.log(value)
console.log(negativeValue)
```
**Output**
```text
3
-3
```
> it is like putting minus in value it change it postive to negative

---

## String addition
> for adding two string we use **+** opeator

```js
let firstStatement="How are "
let secondStatement="you?"

console.log(firstStatement+secondStatement)
```

*output*:
```text
How are you?
```

## Addition of String and Number
> Remeber: js executes from left to right
**for Example**
```js
console.log("1"+2);
console.log(1+"2");
```
**output**
```text
12
12
```
> when we add string to number  or number to string then number is converted into string and then both string get added

*Example 2*
```js
console.log("1"+2+2)
```
***output**:
```text
122
```
> here the thing basically execute left to right
 - first it add "1"+2 => "12"(string add with number then number get converted into string and both string get added =>"12")
 - "12"+2=>"122"(again string add to number)

 *Example 3*
```js
console.log(1+2+"2")
```
***output**:
```text
32
```
> here the thing basically execute left to right
 - first it add 1+2 => 3(normal number additon =>3)
 - 3+"2"=>32(again string add to number so number converted into string and both strings added=>32 )

---

## what happen when we add + before variable or any value 
- (eg +"3" ,+true ,+3 ,+"Hi" and etc)
```js
console.log(+true)
console.log(+"3")
console.log(+"")
console.log(+"3ablc")
```
***Output***
```text
1
3
0
NaN
```
> here + convert into number basiacally typecasting into number

- true -> 1
- "3" -> 3
- "" -> 0 (as "" is falsy vlaue)
- "3ablc"-> NaN

---

## Increment Operator (generally used for Number)
> it increase the value by 1
- "++"=> increment
- when it placed before variable(of type number) is called **preincremnet Opeartor** (means first increment and then use)
- when it placed after variable(of type number) is called **postincrement Opeartor** (means first use and then increment)

**For Example**
```js
let gameScore=100
//postincrement example
gameScore++
console.log(`the value using postincrement is ${gameScore}`)

//preincrement example
++gameScore
console.log(`the value using preincrement is ${gameScore}`)
```
**Output**
```text
the value using postincrement is 101
the value using preincrement is 102
```
> here gameScore = 100 means  it is a variable which holds value 100
- when we do **++gameScrore** it just  increase it by 1 and store overide the earlier value with new one (100-> 101) and print the value so we get 101 that what variable holds at that moment
- when we do gameScrore++ it also just increase it by 1 and store overide the earlier value with new one (101-> 102) and print the value so we get 102 that what variable holds at that moment

**Interesting things **
```js
let star=10
console.log(star++ + ++star)
```
*output**
```text
22
``
> Dry run it
- first star value is 10
- star++ + ++star for it
- star++ => postincrement so use value first then increment means we have to use star as 10 and star increase by 1 becomes 11
- ++star=>preincrement so increase value and then use so star increase by 1 (11->12) and then use so we have to use star value as 12 due to postincremnet 
- - star++ + ++star => 10 + 12 => 22

## Quick Practise predict the output
```js
let star=11
console.log(++star + star++ )
console.log(star)
```

--- 
## One Important Point
> see this example
```js
let numberOfCar=12
numberofCar=numberOfCar+23
console.log(numberOfCar)
```
**Output**
```text
35
```
> here when we have some variable eg  x=12 and when we write x=x+23 it means add the 23 to value of variable of x and then put this value in the variable x basically the earlier value 12 would be repalced by 12+23 

> x=12
> x++ or x= x+1 both are same both measn same increase value by 1 and reassing to x 

--- 

# 🧠 Quick Practice
### 1. Write a JavaScript program to add 25 and 17.
---
### 2. Write a program to subtract 35 from 80.
---
### 3. Write a program to multiply 12 and 8.
---
### 4. Write a program to divide 45 by 6.
---
### 5. Write a program to find the remainder when 27 is divided by 5.
---
### 6. Write a program to calculate 2 raised to the power 8.
---
### 7. Create a variable number with the value 4. Print its cube and its negative value.
---
### 8. Create a variable price with the value 150. Increase its value by 50 using reassignment, then increase it by 1 using an increment operator.
---
### 9. Create two string variables containing "Hello " and "JavaScript". Combine them and print the resulting sentence.
---
### 10. Predict the output of the following without running the code:
```js
console.log("10" + 5);
console.log(10 + "5");
console.log("10" + 5 + 5);
console.log(10 + 5 + "5");
```
---
### 11. Use the unary + operator with "25", true, false, "", and "hello". Predict the result of each.
---
### 12. Predict the output of each expression:
```js
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log("2" + 3 * 4);
console.log(2 + 3 + "4");
console.log("2" + 3 + 4);
```
---
### 13. Create a variable number = 10 and write a program that performs several arithmetic operations on it, including addition, subtraction, multiplication, division, remainder, exponentiation, and increment. Print the result after each operation.







