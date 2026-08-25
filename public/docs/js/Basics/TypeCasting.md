# TypeCasting in Javascript
> Type casting refers to converting a value from one data type to another desired data type.
*For Example*
```js
let number1=32
console.log(`the type of number 1 is ${typeof(number1)}`)
let number2=String(number1)  /* here we are converting the type of number1 into String 
and then storing that converted value into the number2 means number2 has string
*/
console.log(`the type of number 2 is ${typeof(number2)}`)
console.log(`the value of number2 is ${number2}`)
```
*Output*
```text
the type of number 1 is number
the type of number 2 is string
the value of number2 is 32
```
- Typecasting different variable into number and the results
    - "33" => 33
    - "33abc" => NaN
    - undefined => NaN
    - null => 0
    - true => 1; false => 0
---
## More Example 
```js
let loggedIN="micky"
let BolleanloggedIn=Boolean(loggedIN)
console.log(BolleanloggedIn)
```
*Output*
```text
true
```
> empyt string("") when converted into boolean it returns false
> non empyt string ("hello")  when converted into boolean it returns true

* Typecasting variables into Boolean and the results
    * 1 => True
    * 0 => false
    * "" => false //empty string into fasle
    * "micky" => true 

---

# 🧠 Quick Practice
## 1. Create a variable named someNumber which has value 32 and the create a second variable name numInString which is equal to value of someNumber but in String and print type of numInString and also it's value
 