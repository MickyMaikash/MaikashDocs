# Try-Except in Python Error Handling

## What is Try-Except?

Try-except is a fundamental error handling mechanism in Python that allows you to catch and handle exceptions gracefully without crashing your program.

## Why We Use Try-Except

1. **Prevent Program Crashes**: Catches unexpected errors and prevents your program from terminating abruptly
2. **Graceful Degradation**: Allows your program to continue running even when errors occur
3. **Custom Error Messages**: Provides user-friendly error messages instead of cryptic stack traces
4. **Resource Cleanup**: Ensures proper cleanup of resources (files, connections) even when errors occur
5. **Better User Experience**: Handles errors silently or with meaningful feedback

## Basic Syntax

```python
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Code to handle the specific exception
    print("Error: Cannot divide by zero!")
except Exception as e:
    # Catch any other exception
    print(f"An error occurred: {e}")
else:
    # Executes if no exception occurred
    print("Division successful:", result)
finally:
    # Always executes, regardless of exceptions
    print("Execution completed")
```

## Key Components

- **try**: Block containing code that might raise an exception
- **except**: Block that handles specific exceptions
- **else**: Block that runs if no exception occurred (optional)
- **finally**: Block that always runs, used for cleanup (optional)

## Practical Examples

### Example 1: Handling File Operations
```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    if 'file' in locals():
        file.close()
```

### Example 2: Type Conversion
```python
try:
    num = int(input("Enter a number: "))
    print(f"You entered: {num}")
except ValueError:
    print("Error: Please enter a valid number!")
```

### Example 3: List Index Error
```python
try:
    my_list = [1, 2, 3]
    print(my_list[10])
except IndexError:
    print("Error: Index out of range!")
```

## Best Practices

1. **Catch Specific Exceptions**: Avoid bare `except:` clauses; be specific about what you're catching
2. **Use Multiple Except Blocks**: Handle different exceptions differently
3. **Clean Up Resources**: Use `finally` block for cleanup operations
4. **Log Errors**: Record errors for debugging purposes
5. **Don't Suppress All Errors**: Always handle exceptions meaningfully

## Practice Problems

1. Read Numbers from File
```text
Write a function that reads integers from a file (one per line) and returns their sum. Handle missing files, empty lines, and non-integer values gracefully.
```
Hint: use try-except for FileNotFoundError and ValueError; skip invalid lines.

2. Safe Dictionary Lookup
```text
Create a function safe_get(d, key) that returns the value for key in dict d or a default message if the key is missing. Do not use dict.get().
```
Hint: catch KeyError.

3. Divide Many Numbers
```text
Given a list of (numerator, denominator) pairs, return a list of division results. For divisions by zero, insert None and continue.
```
Hint: handle ZeroDivisionError per item.

4. Retry on Failure
```text
Implement a function retry(func, attempts) that calls func() and retries up to attempts times if it raises an exception. Return the result or re-raise after exhausting attempts.
```
Hint: use a loop with try-except and time.sleep for backoff (optional).

5. Parse JSON with Fallback
```text
Write a function parse_json_or_default(s, default) that parses string s as JSON and returns default if parsing fails.
```
Hint: catch json.JSONDecodeError.

6. Clean Resource Manager
```text
Simulate opening a resource by creating a class with open() and close() methods. Use try-finally to ensure close() is always called even if an error occurs while using the resource.
```
Hint: demonstrate with a simple class and raise an exception inside the try block.

## Summary

Try-except is essential for robust Python programming. It enables error handling that makes applications more reliable, user-friendly, and maintainable by gracefully managing unexpected situations.

