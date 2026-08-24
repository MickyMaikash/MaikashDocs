# Methods in Python OOP

In Python object-oriented programming, a method is a function that belongs to a class.

Key points:

- Methods are defined inside a class.
- They operate on instances of the class or on the class itself.
- The first parameter is usually `self` for instance methods.
- Class methods use `cls` and are marked with `@classmethod`.
- Static methods do not receive `self` or `cls` and are marked with `@staticmethod`.

Example:

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name}."

    @classmethod
    def species(cls):
        return "Homo sapiens"

    @staticmethod
    def is_adult(age):
        return age >= 18
```

- `greet` is an instance method. It uses `self` to access the object's data.
- `species` is a class method. It uses `cls` to access class-level behavior.
- `is_adult` is a static method. It is a utility function related to the class.

Methods are central to encapsulating behavior in OOP and organizing code around objects.