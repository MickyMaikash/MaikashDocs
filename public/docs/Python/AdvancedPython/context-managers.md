# Python Context Managers

Context managers in Python provide a convenient way to manage resources and ensure that setup and cleanup code is executed reliably. They are commonly used with the `with` statement.

## Why use context managers?

- Automatically close files and network connections.
- Release locks or resources even if an error occurs.
- Keep code cleaner and easier to read.

## Basic concept

A context manager defines two methods:

- `__enter__(self)`: runs when entering the `with` block.
- `__exit__(self, exc_type, exc_value, traceback)`: runs when exiting the block.

Example with a file:

```python
with open('example.txt', 'r') as f:
    data = f.read()
```

This is equivalent to:

```python
temp = open('example.txt', 'r')
try:
    data = temp.read()
finally:
    temp.close()
```

## Custom context manager using a class

```python
class MyContext:
    def __enter__(self):
        print('entering')
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print('exiting')
        return False

with MyContext() as ctx:
    print('inside with block')
```

## Context managers with `contextlib`

You can also create context managers using `contextlib.contextmanager` and a generator function:

```python
from contextlib import contextmanager

@contextmanager
def managed_resource():
    print('setup')
    try:
        yield 'resource'
    finally:
        print('cleanup')

with managed_resource() as resource:
    print(resource)
```

## When to use

- File I/O
- Database connections
- Thread locks
- Temporary changes to state

## Learning resources

- Python official docs: Context Managers and `with` statement
- `contextlib` module documentation
- Practical examples of file handling and resource cleanup

Context managers are essential for writing robust Python code that handles resources safely and cleanly.