# Instance Variables in Python OOP

## What is an Instance Variable?

An instance variable is a variable that belongs to a specific object created from a class. Each object has its own copy of instance variables, so object A and object B can store different values.

In Python, instance variables are usually created inside the `__init__` method using the `self` keyword.

Example:

```python
class Car:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

car1 = Car("Toyota", "red")
car2 = Car("Honda", "blue")

print(car1.brand)  # Toyota
print(car2.color)  # blue
```

## Key points

- Instance variables are defined per object.
- Use `self.variable_name` inside class methods to refer to instance variables.
- Each object can have different values for its instance variables.
- Instance variables are created when the object is instantiated.

## Why use instance variables?

Instance variables allow objects to maintain their own state. This is a core concept in object-oriented programming because it helps model real-world entities with unique properties.

## Summary

Instance variables are the attributes that belong to each instance of a class. They are created with `self` inside the constructor, and they let each object store and manage its own data.
