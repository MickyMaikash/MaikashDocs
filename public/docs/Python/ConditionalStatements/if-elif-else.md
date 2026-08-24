# Python Conditional Statements: `if`, `elif`, `else`

## Overview
Python uses conditional statements to execute code only when certain conditions are true. The main statements are:

- `if`: check a condition and run code when it is true
- `elif`: check another condition if the previous `if` or `elif` was false
- `else`: run code when all previous conditions are false

## Basic `if` statement
Use `if` to test a condition.

Example:

```python
age = 18
if age >= 18:
    print("You are an adult.")
```

If `age >= 18` is true, the indented block runs.

## `if` with `else`
Use `else` for the fallback case when the `if` condition is false.

Example:

```python
age = 15
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

## `if` with `elif`
Use `elif` to check additional conditions after the first `if`.

Example:

```python
score = 75
if score >= 90:
    print("Grade A")
elif score >= 75:
    print("Grade B")
elif score >= 60:
    print("Grade C")
else:
    print("Grade D")
```

Only the first true condition block runs. If `score` is 75, the second block executes and the rest are skipped.

## Multiple `elif` blocks
You can chain many `elif` checks.

Example:

```python
number = 0
if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")
```

## Common patterns
- Use `if` alone when only one condition matters.
- Use `if` + `else` when there are two possible outcomes.
- Use `if` + `elif` + `else` when there are multiple branches.

## Notes
- Indentation is required in Python.
- `elif` stands for "else if."
- `else` has no condition.
- Only one branch runs in a single `if`/`elif`/`else` chain.

## Practice exercises
1. Write a program that checks if a number is even or odd.
2. Write a program that assigns a letter grade based on a numeric score.
3. Write a program that prints whether a temperature is "cold", "warm", or "hot" using `if`, `elif`, and `else`.
