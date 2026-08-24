# Polymorphism in Python OOP

## What is Polymorphism?

Polymorphism is one of the core concepts in Object-Oriented Programming (OOP). The term comes from Greek, meaning "many forms" (poly = many, morph = form). In Python, polymorphism allows objects of different types to be treated through the same interface, and methods can have different implementations depending on the object calling them.

## Key Principles

Polymorphism enables you to write flexible and reusable code by allowing:
- Objects of different classes to be used interchangeably
- Methods to behave differently based on the object type
- Functions to work with objects of multiple types

## Types of Polymorphism in Python

### 1. Method Overriding

Method overriding occurs when a subclass provides a specific implementation of a method that already exists in the parent class.

```python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof! Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Polymorphism in action
animals = [Dog(), Cat(), Animal()]
for animal in animals:
    print(animal.speak())
# Output:
# Woof! Woof!
# Meow!
# Some sound
```

### 2. Duck Typing

Python follows the "duck typing" principle: if it walks like a duck and quacks like a duck, it's a duck. You don't need to inherit from a common base class for polymorphism to work.

```python
class Duck:
    def quack(self):
        return "Quack!"

class Person:
    def quack(self):
        return "I'm quacking like a duck!"

def make_it_quack(obj):
    print(obj.quack())

make_it_quack(Duck())     # Quack!
make_it_quack(Person())   # I'm quacking like a duck!
```

### 3. Method Overloading via Default Arguments

Python doesn't support traditional method overloading, but you can achieve similar behavior using default arguments.

```python
class Calculator:
    def add(self, a, b, c=0):
        return a + b + c

calc = Calculator()
print(calc.add(5, 10))        # 15
print(calc.add(5, 10, 20))    # 35
```

### 4. Operator Overloading

You can define how operators behave with custom classes using special methods.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __str__(self):
        return f"({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(v3)  # (4, 6)
```

## Advantages of Polymorphism

1. **Code Reusability** - Write generic code that works with multiple types
2. **Flexibility** - Easy to add new classes without changing existing code
3. **Maintainability** - Changes are localized and easier to manage
4. **Extensibility** - New functionality can be added with minimal modifications
5. **Cleaner Code** - Less code duplication and more intuitive logic flow

## Practical Example

```python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphic function
def print_area(shape):
    print(f"Area: {shape.area()}")

# Using polymorphism
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print_area(shape)
```

## Conclusion

Polymorphism is a powerful feature in Python that allows you to write more generic, flexible, and maintainable code. By leveraging polymorphism, you can create systems that are easy to extend and modify without breaking existing functionality.