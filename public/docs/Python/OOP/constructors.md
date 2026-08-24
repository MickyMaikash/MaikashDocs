# Python Classes: Constructors

A constructor is a special method in a class that runs automatically when you create a new object. In Python, the constructor method is named `__init__()`.

## Why use constructors?

- Initialize object state when an instance is created.
- Set default values for attributes.
- Ensure the object is ready to use after creation.
- Accept parameters so different objects can start with different data.

## How constructors are created

In Python, define the constructor inside a class using `def __init__(self, ...)`.

Example:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("Alice", 30)
print(person.name)  # Alice
print(person.age)   # 30
```

- `self` refers to the instance being created.
- `name` and `age` are parameters passed when creating `Person`.
- `self.name` and `self.age` store values on the object.

## Constructor behavior

- `__init__()` is called automatically when you use `ClassName(...)`.
- You do not call `__init__()` directly in normal use.
- A class can only have one `__init__()` method.

## When to use constructors

Use constructors when you want objects to start with meaningful data or when initialization needs to happen immediately. Common uses:

- Setting up default values.
- Validating input data.
- Preparing internal attributes.

## Simple example

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

rect = Rectangle(5, 4)
print(rect.area())  # 20
```

Constructors are an important part of object-oriented programming because they make objects easy to create and use with predictable initial state.