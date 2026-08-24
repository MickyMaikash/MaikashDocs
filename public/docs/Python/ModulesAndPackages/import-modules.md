# Importing Modules in Python

Python modules are files containing Python code that you can reuse in other programs. A module is usually a `.py` file.

## Basic import

Use the `import` statement to load a module.

```python
import math
print(math.sqrt(16))
```

This imports the `math` module, and you can access its functions using `math.<name>`.

## Import specific names

You can import only a function, class, or variable from a module.

```python
from math import sqrt, pi
print(sqrt(25))
print(pi)
```

## Import with an alias

Use `as` to give a module or name a shorter alias.

```python
import numpy as np
print(np.array([1, 2, 3]))
```

## Importing your own module

If you have a file named `mymodule.py` in the same folder:

```python
# mymodule.py

def greet(name):
    return f"Hello, {name}!"
```

```python
# main.py
import mymodule
print(mymodule.greet('Nagma'))
```

## Notes

- A module can contain functions, classes, and variables.
- Python searches the current folder and `PYTHONPATH` when importing.
- Use `help(module)` to see available contents.
