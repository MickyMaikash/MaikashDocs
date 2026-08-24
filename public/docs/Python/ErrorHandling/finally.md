# Finally Block in Python Error Handling

## What is Finally?

The `finally` block in Python is a part of the try-except-finally statement. It contains code that executes **regardless of whether an exception occurred or not**. The finally block always runs after the try and except blocks, making it perfect for cleanup operations.

## Syntax

```python
try:
    # Code that might raise an exception
    risky_operation()
except SomeException:
    # Handle the exception
    print("Exception caught")
finally:
    # This always executes
    print("Cleanup code")
```

## Why is Finally Used?

The finally block is used to ensure that certain critical code runs no matter what happens:

1. **Resource Cleanup** - Close files, database connections, or network sockets
2. **Cleanup Operations** - Release locks, temporary variables, or allocated memory
3. **Guaranteed Execution** - Code that must run even if an exception occurs
4. **Consistency** - Ensure state is properly reset after try-except blocks

## When to Use Finally

- **File Operations** - Ensure files are closed even if an error occurs during reading/writing
- **Database Connections** - Always close connections to prevent resource leaks
- **Lock Release** - Release locks in multi-threaded applications
- **Temporary Resources** - Clean up temporary files or memory
- **API Calls** - Complete logging or metric collection regardless of success/failure

## Examples

### Example 1: File Handling

```python
try:
    file = open('data.txt', 'r')
    content = file.read()
except FileNotFoundError:
    print("File not found")
finally:
    file.close()  # Always closes the file
```

### Example 2: Database Connection

```python
try:
    db = connect_to_database()
    db.execute("SELECT * FROM users")
except ConnectionError:
    print("Database connection failed")
finally:
    db.close()  # Connection always closes
```

### Example 3: Finally Without Exception

```python
try:
    result = 10 / 2
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("This executes even though no exception occurred")
```

Output:
```
Result: 5.0
This executes even though no exception occurred
```

## Key Points

- ✅ Finally block **always executes** (except if `exit()`, `sys.exit()`, or infinite loop)
- ✅ It runs after try and except blocks
- ✅ Can be used with or without an except block
- ✅ Perfect for cleanup and resource management
- ✅ Prevents resource leaks and ensures stable application behavior

## Best Practice

Use finally for cleanup that must always happen:

```python
file = None
try:
    file = open('data.txt', 'r')
    data = file.read()
except IOError:
    print("Error reading file")
finally:
    if file:
        file.close()  # Safely close if file was opened
```