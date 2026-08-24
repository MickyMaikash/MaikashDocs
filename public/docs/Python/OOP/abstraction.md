# Abstraction in Python OOP

## What is Abstraction?

Abstraction is one of the four fundamental OOP concepts that hides complex implementation details and shows only the necessary features of an object. It allows you to focus on what an object does rather than how it does it.

## Key Principles

- **Hide Complexity**: Only expose essential features to the user
- **Reduce Complexity**: Break down complex problems into simpler parts
- **Improve Maintainability**: Changes to internal logic don't affect external code
- **Enhance Reusability**: Abstract classes define common interfaces

## Abstract Classes and Methods

### Using the `abc` Module

Python provides the `abc` (Abstract Base Classes) module to create abstract classes:

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass
    
    @abstractmethod
    def move(self):
        pass
    
    def breathe(self):
        print("Breathing...")

class Dog(Animal):
    def sound(self):
        print("Woof!")
    
    def move(self):
        print("Running on four legs")

dog = Dog()
dog.sound()      # Output: Woof!
dog.move()       # Output: Running on four legs
dog.breathe()    # Output: Breathing...
```

## Abstract Properties

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @property
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    @property
    def area(self):
        return 3.14 * self.radius ** 2

circle = Circle(5)
print(circle.area)  # Output: 78.5
```

## Benefits of Abstraction

1. **Security**: Hide sensitive implementation details
2. **Flexibility**: Easy to modify internal implementation
3. **Maintainability**: Clear interface definition
4. **Consistency**: Enforce a common structure across subclasses
5. **Readability**: Code is easier to understand

## Real-World Example

```python
from abc import ABC, abstractmethod

class DatabaseConnection(ABC):
    @abstractmethod
    def connect(self):
        pass
    
    @abstractmethod
    def query(self, sql):
        pass
    
    @abstractmethod
    def disconnect(self):
        pass

class MySQLConnection(DatabaseConnection):
    def connect(self):
        print("Connected to MySQL database")
    
    def query(self, sql):
        print(f"Executing MySQL query: {sql}")
    
    def disconnect(self):
        print("Disconnected from MySQL")

db = MySQLConnection()
db.connect()
db.query("SELECT * FROM users")
db.disconnect()
```

## Abstract Methods Without ABC

```python
class Vehicle:
    def start(self):
        raise NotImplementedError("Subclasses must implement start() method")

class Car(Vehicle):
    def start(self):
        print("Car engine started")

car = Car()
car.start()  # Output: Car engine started
```

## Best Practices

- Use `ABC` module for formal abstraction
- Define clear interfaces for subclasses
- Document abstract methods well
- Keep abstract classes focused on common behavior
- Avoid unnecessary abstraction

## Summary

Abstraction is essential for writing clean, maintainable Python code. It helps you hide unnecessary complexity, define clear contracts for subclasses, improve code organization, and make your code more robust and flexible.