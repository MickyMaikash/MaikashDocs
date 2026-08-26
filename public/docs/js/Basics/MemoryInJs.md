# Memory in Js
## There are two commonly used memory concepts in Js

## 1. Stack
>  **Stack** (Primitive type of data) => we get copy and when we change in copy the original doesn't change 
* datatype(Primitive (by Values)) stored in ***stack*** example
    - **String**, **Number**, **Boolean** **null**, **undefined**, **Symbol**, **BigInt**


> Primitive
- → copied by value
- → assigning to another variable creates a separate value
- → changing one does not affect the other


**Example**
```js
let myyoutubename="CodeStarter" //original value
let anothername=myyoutubename  //it is copy of original by value

anothername="mickyclasses" //change in copy

console.log(myyoutubename)
console.log(anothername)
```

*Output*
```text
CodeStarter
mickyclasses
```
> Here, when we assign the original variable to a new variable, the value is copied to the new variable. And then we change the value of the new variable.

> Therefore, when we print both variables, their values are different. The change in the new variable's value doesn't affect the original variable; the original variable remains the same.

> This demonstrates the primitive / copied-by-value concept in the Stack memory model.
---

## 2. Heap 
> **Heap** (Non-primitive or Reference type)=>we get original reference and when we change in that refernce new variable then the original variable changes means the changes in new one affects the original one 
    
* Refrence Dataype/Non-Primitive stored in **Heap** example
    - ***Array***, **Objects**, ***Functions***

> Non-Primitive / Reference type
- → the reference is copied
- → both variables can refer to the same object
- → changing the object through one reference is visible through the other

**Example**
```js
let user1={
    name:"Micky",
    favouriteNumber:7
}  // original variable

let user2=user1 // copy of reference of original variable

user2.favouriteNumber=3

console.log(user1.favouriteNumber)
console.log(user2.favouriteNumber)
```

*Output*
```text
3
3
```
> Here, when we assign the original object to a new variable, the **reference** is copied to the new variable.
>
> Both variables now refer to the **same object**.
```text
user1 ───────┐
             │
             ▼
        ┌────────────────────┐
        │    Object          │
        │                    │
        │ name: "Micky"      │
        │ favouriteNumber: 3 │
        └────────────────────┘
             ▲
             │
user2 ───────┘
```

> Then, when we change the value of the object through the new variable, the original variable also shows the changed value.
>
> Therefore, when we print both variables, their values are the same.
>
> The change made through the new variable affects the original variable because both variables refer to the same object.
>
> This demonstrates the **Non-Primitive / Reference ** copy  in the Heap memory model