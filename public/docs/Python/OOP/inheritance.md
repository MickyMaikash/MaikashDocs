# Inheritance in OOP - Python

## What is Inheritance?

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows a class to inherit properties and methods from another class. The class that inherits is called the **child class** or **derived class**, and the class being inherited from is called the **parent class** or **base class**.

## Why Use Inheritance?

- **Code Reusability**: Avoid writing duplicate code by reusing parent class functionality
- **Logical Hierarchy**: Organize classes in a hierarchical structure
- **Polymorphism**: Enables method overriding and flexible code design
- **Maintainability**: Easier to maintain and update code

## Basic Syntax

```python
class Parent:
    def __init__(self, name):
        self.name = name
    
    def display(self):
        print(f"Name: {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age
    
    def display(self):
        super().display()
        print(f"Age: {self.age}")

# Creating an object
child = Child("Alice", 10)
child.display()
```

**Output:**
```
Name: Alice
Age: 10
```

## Types of Inheritance

### 1. Single Inheritance
One child class inherits from one parent class.

```python
class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

dog = Dog()
dog.speak()  # Inherited method
dog.bark()   # Own method
```

### 2. Multiple Inheritance
One child class inherits from multiple parent classes.

```python
class Parent1:
    def method1(self):
        print("Method from Parent1")

class Parent2:
    def method2(self):
        print("Method from Parent2")

class Child(Parent1, Parent2):
    pass

child = Child()
child.method1()  # From Parent1
child.method2()  # From Parent2
```

### 3. Multilevel Inheritance
A chain of inheritance - grandparent → parent → child.

```python
class GrandParent:
    def greet(self):
        print("Hello from GrandParent")

class Parent(GrandParent):
    def goodbye(self):
        print("Goodbye from Parent")

class Child(Parent):
    pass

child = Child()
child.greet()     # From GrandParent
child.goodbye()   # From Parent
```

### 4. Hierarchical Inheritance
Multiple child classes inherit from the same parent class.

```python
class Vehicle:
    def move(self):
        print("Vehicle is moving")

class Car(Vehicle):
    def honk(self):
        print("Car honks")

class Bike(Vehicle):
    def ring_bell(self):
        print("Bike rings bell")

car = Car()
bike = Bike()
car.move()      # Inherited
bike.move()     # Inherited
```

## Method Overriding

A child class can override (redefine) a method from the parent class.

```python
class Vehicle:
    def start(self):
        print("Vehicle starts with a key")

class ElectricCar(Vehicle):
    def start(self):
        print("Electric car starts with a button")

car = ElectricCar()
car.start()  # Output: Electric car starts with a button
```

## Using super()

The `super()` function allows you to call methods from the parent class.

```python
class Parent:
    def __init__(self, name):
        self.name = name

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)  # Call parent's __init__
        self.age = age

child = Child("Bob", 12)
print(child.name)  # Bob
print(child.age)   # 12
```

## Key Points to Remember

- Use `super()` to access parent class methods
- Child classes inherit all public attributes and methods
- You can override methods to customize behavior
- Python supports multiple inheritance (use carefully to avoid complexity)
- Method Resolution Order (MRO) determines the order of method lookup in multiple inheritance
- Check MRO using `ClassName.__mro__` or `help(ClassName)`

## Benefits of Inheritance

✅ Reduces code duplication  
✅ Improves code organization  
✅ Enables polymorphism  
✅ Makes code more maintainable  
✅ Supports logical class hierarchies
