# Creating and Using a Module in Python

A Python module is a file containing Python code, such as functions, classes, or variables. The file name is the module name with a `.py` extension.

## Create a module

1. Create a new file, for example `mymodule.py`.
2. Add functions, classes, or variables inside it.

Example `mymodule.py`:

```python
# mymodule.py

def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

class Calculator:
    def add(self, a, b):
        return a + b
```

## Use the module

In another file in the same folder, import and use the module.

Example `main.py`:

```python
import mymodule

print(mymodule.greet("Alice"))
print(mymodule.PI)

calc = mymodule.Calculator()
print(calc.add(2, 3))
```

## Alternative import styles

```python
from mymodule import greet, PI

print(greet("Bob"))
print(PI)
```

Or import everything from the module:

```python
from mymodule import *

print(greet("Carol"))
print(PI)
```

## Notes

- The module file must be in the same directory or in Python's import path.
- Use `import module_name` to load it.
- Use `from module_name import name` to import specific items.
