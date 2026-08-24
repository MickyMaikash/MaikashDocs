# Custom Exceptions in Python

Custom exceptions let you create meaningful error types for your own programs. They improve error handling by making it easier to catch and respond to specific conditions.

## Why use custom exceptions

- Provide clearer error messages.
- Distinguish between different error cases.
- Keep code organized and easier to debug.

## Create a custom exception

In Python, define a custom exception by subclassing `Exception` or another built-in exception type.

```python
class ValidationError(Exception):
    """Raised when validation fails."""
    pass
```

You can add custom behavior by overriding `__init__` or defining attributes.

```python
class ValidationError(Exception):
    def __init__(self, message, field=None):
        super().__init__(message)
        self.field = field
```

## Raise the custom exception

Use `raise` when the specific error condition occurs.

```python
def validate_age(age):
    if age < 0:
        raise ValidationError("Age must be non-negative", field="age")
```

## Handle the custom exception

Catch the custom exception in a `try`/`except` block.

```python
try:
    validate_age(-5)
except ValidationError as error:
    print(f"Validation failed: {error}")
    if getattr(error, 'field', None):
        print(f"Field: {error.field}")
```

## Best practices

- Inherit from `Exception` for most custom errors.
- Use specific names like `InvalidInputError`, `AuthenticationError`, or `DatabaseError`.
- Keep the exception message descriptive.
- Use custom exceptions when you want to separate error handling from generic exceptions.

## Summary

Custom exceptions are a simple way to make error handling more readable and maintainable. Create a new class that inherits from `Exception`, raise it where appropriate, and catch it in `try`/`except` blocks.
