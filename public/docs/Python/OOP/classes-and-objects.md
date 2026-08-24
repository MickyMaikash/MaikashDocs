# Classes and Objects in Python OOP

## What is Object-Oriented Programming (OOP)?

Object-Oriented Programming is a way of structuring code using **objects** and **classes**. Think of it as creating blueprints for things in the real world.

---

## What are Classes and Objects?

### Class
A **class** is a blueprint or template for creating objects. It defines what properties (attributes) and actions (methods) objects will have.

### Object
An **object** is an instance of a class. It's a concrete realization of the blueprint.

**Real-world analogy:**
- **Class** = Cookie cutter (the mold)
- **Object** = Cookies made from that mold

---

## Creating Your First Class

### Basic Syntax

```python
class ClassName:
    # Class body
    pass
```

### Example: Creating a Car Class

```python
class Car:
    def __init__(self, brand, color, speed):
        self.brand = brand
        self.color = color
        self.speed = speed
    
    def drive(self):
        return f"The {self.color} {self.brand} is driving at {self.speed} km/h"
    
    def accelerate(self):
        self.speed += 10
        return f"Accelerating! New speed: {self.speed} km/h"

# Creating objects (instances)
car1 = Car("Toyota", "red", 100)
car2 = Car("BMW", "blue", 120)

print(car1.drive())  # Output: The red Toyota is driving at 100 km/h
print(car2.accelerate())  # Output: Accelerating! New speed: 130 km/h
```

---

## Key Components

### 1. Attributes (Properties)
Data that belongs to an object.

```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name      # Attribute
        self.age = age        # Attribute
        self.grade = grade    # Attribute

student1 = Student("Alice", 20, "A")
print(student1.name)  # Output: Alice
```

### 2. Methods (Functions)
Actions or behaviors that objects can perform.

```python
class Calculator:
    def add(self, a, b):
        return a + b
    
    def subtract(self, a, b):
        return a - b

calc = Calculator()
print(calc.add(10, 5))      # Output: 15
print(calc.subtract(10, 5))  # Output: 5
```

### 3. The `__init__` Constructor
Initializes an object when it's created. It runs automatically when you instantiate a class.

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        print(f"Dog {name} created!")

dog = Dog("Buddy", "Golden Retriever")  # Output: Dog Buddy created!
```

### 4. The `self` Parameter
Refers to the specific object being created or used.

```python
class Bank:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return f"{amount} deposited. New balance: {self.balance}"

account = Bank("John", 1000)
print(account.deposit(500))  # Output: 500 deposited. New balance: 1500
```

---

## Example: Book Class

```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.is_read = False
    
    def read_book(self):
        self.is_read = True
        return f"You read '{self.title}' by {self.author}"
    
    def get_info(self):
        status = "Read" if self.is_read else "Not Read"
        return f"{self.title} ({status}) - {self.pages} pages"

# Creating objects
book1 = Book("Python Guide", "John Doe", 350)
book2 = Book("Web Dev", "Jane Smith", 420)

print(book1.get_info())    # Output: Python Guide (Not Read) - 350 pages
print(book1.read_book())   # Output: You read 'Python Guide' by John Doe
print(book1.get_info())    # Output: Python Guide (Read) - 350 pages
```

---

## Practice Problems

### Problem 1: Create a Person Class
Create a `Person` class with attributes: name, age, email. Add a method that returns a greeting message.

**Expected Output:**
```
Hello, my name is Alice and I'm 25 years old
```

<details>
<summary>Solution</summary>

```python
class Person:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
    
    def greet(self):
        return f"Hello, my name is {self.name} and I'm {self.age} years old"

person = Person("Alice", 25, "alice@email.com")
print(person.greet())
```

</details>

---

### Problem 2: Create a BankAccount Class
Create a `BankAccount` class with:
- Attributes: account_holder, balance
- Methods: deposit, withdraw, check_balance

**Test cases:**
```
Initial balance: 1000
After deposit of 500: 1500
After withdrawal of 200: 1300
```

<details>
<summary>Solution</summary>

```python
class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited ${amount}. New balance: ${self.balance}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient balance"
        self.balance -= amount
        return f"Withdrew ${amount}. New balance: ${self.balance}"
    
    def check_balance(self):
        return f"Account balance: ${self.balance}"

account = BankAccount("John", 1000)
print(account.check_balance())   # Account balance: $1000
print(account.deposit(500))      # Deposited $500. New balance: $1500
print(account.withdraw(200))     # Withdrew $200. New balance: $1300
```

</details>

---

### Problem 3: Create a Student Class
Create a `Student` class with:
- Attributes: name, student_id, marks (list of marks)
- Methods: add_mark, calculate_average, get_grade

**Test case:**
```
Calculate average of marks [85, 90, 78, 92]
Determine grade based on average
```

<details>
<summary>Solution</summary>

```python
class Student:
    def __init__(self, name, student_id):
        self.name = name
        self.student_id = student_id
        self.marks = []
    
    def add_mark(self, mark):
        self.marks.append(mark)
        return f"Mark {mark} added"
    
    def calculate_average(self):
        if len(self.marks) == 0:
            return 0
        return sum(self.marks) / len(self.marks)
    
    def get_grade(self):
        avg = self.calculate_average()
        if avg >= 90:
            return "A"
        elif avg >= 80:
            return "B"
        elif avg >= 70:
            return "C"
        else:
            return "F"

student = Student("Alice", 101)
student.add_mark(85)
student.add_mark(90)
student.add_mark(78)
student.add_mark(92)
print(f"Average: {student.calculate_average():.2f}")  # Average: 86.25
print(f"Grade: {student.get_grade()}")                # Grade: B
```

</details>

---

## Key Takeaways

1. **Class** = Blueprint, **Object** = Instance
2. **`__init__`** initializes objects with starting values
3. **`self`** refers to the current object
4. **Attributes** store data
5. **Methods** define behavior
6. Use **objects** to organize and structure your code

---

## Common Mistakes to Avoid

❌ Forgetting `self` in method definitions
```python
# Wrong
def greet(name):
    return f"Hello {name}"

# Correct
def greet(self):
    return f"Hello {self.name}"
```

❌ Not calling `__init__` correctly
```python
# These automatically call __init__
obj = MyClass("value")  # ✓ Correct
```

---

## Next Steps

After mastering classes and objects, explore:
- **Inheritance** - Creating classes from other classes
- **Polymorphism** - Same method, different behavior
- **Encapsulation** - Hiding internal data
- **Abstraction** - Showing only what's needed
