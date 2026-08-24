# Encapsulation in Python OOP

## What is Encapsulation?

Encapsulation is one of the four fundamental OOP concepts. It is the bundling of data (attributes) and methods (functions) that operate on that data into a single unit called a class. It also involves hiding the internal details of an object from the outside world and only exposing what is necessary.

## Key Principles

1. **Data Hiding**: Keep internal data private and inaccessible from outside
2. **Controlled Access**: Provide public methods to access and modify private data
3. **Modularity**: Organize related data and methods together
4. **Security**: Protect data from unintended modification

## Access Modifiers in Python

Python doesn't have strict access modifiers like other languages, but uses naming conventions:

### 1. Public Members
- No prefix
- Accessible from anywhere

```python
class Student:
    def __init__(self, name):
        self.name = name  # Public attribute
```

### 2. Protected Members
- Single underscore prefix `_`
- Convention to indicate "use with caution"

```python
class Student:
    def __init__(self, name):
        self._gpa = 0.0  # Protected attribute
```

### 3. Private Members
- Double underscore prefix `__`
- Name mangling prevents easy access from outside

```python
class Student:
    def __init__(self, name):
        self.__student_id = None  # Private attribute
```

## Practical Example

```python
class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.__balance = balance  # Private attribute
    
    # Getter method
    def get_balance(self):
        return self.__balance
    
    # Setter method with validation
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Deposited: ${amount}")
        else:
            print("Invalid amount!")
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Withdrawn: ${amount}")
        else:
            print("Insufficient funds!")

# Usage
account = BankAccount("John", 1000)
account.deposit(500)  # Allowed
account.withdraw(200)  # Allowed
print(account.get_balance())  # Output: 1300
```

## Benefits of Encapsulation

- **Data Integrity**: Validation ensures data is correct
- **Flexibility**: Change internal implementation without affecting external code
- **Reusability**: Well-encapsulated classes are easier to reuse
- **Maintainability**: Reduces dependencies between components
- **Security**: Protects sensitive information from unauthorized access

## Properties (Pythonic Way)

Python's `@property` decorator provides a Pythonic way to implement getters and setters:

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value > 0:
            self._radius = value
        else:
            print("Radius must be positive!")
    
    @property
    def area(self):
        return 3.14 * self._radius ** 2

# Usage
circle = Circle(5)
print(circle.area)  # Output: 78.5
circle.radius = 10
print(circle.area)  # Output: 314.0
```

## Best Practices

1. Use double underscore for truly private data
2. Use single underscore for protected data
3. Provide getter and setter methods when needed
4. Use `@property` decorator for cleaner code
5. Always validate data in setter methods
6. Document the purpose of each method and attribute

## Summary

Encapsulation is about creating self-contained objects that manage their own state and behavior. By hiding implementation details and providing controlled access to data, you create more secure, maintainable, and robust applications.