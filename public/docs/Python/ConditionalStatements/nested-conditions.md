# Nested `if` / `else` in Python

Nested conditional statements are `if` statements placed inside another `if`, `elif`, or `else` block. They allow you to check additional conditions only when a previous condition is true.

## Syntax

```python
if condition1:
    if condition2:
        # code if both condition1 and condition2 are true
    else:
        # code if condition1 is true and condition2 is false
else:
    # code if condition1 is false
```

You can also nest inside `elif` or `else` blocks:

```python
if condition1:
    # code when condition1 is true
elif condition2:
    if condition3:
        # code when condition2 and condition3 are true
    else:
        # code when condition2 is true and condition3 is false
else:
    # code when no condition is true
```

## Example 1: Checking age and membership

```python
age = 20
is_member = True

if age >= 18:
    if is_member:
        print("Access granted")
    else:
        print("Membership required")
else:
    print("Access denied")
```

Explanation:
- The outer `if` checks if `age` is at least 18.
- The inner `if` runs only when the outer condition is true.
- If `age` is under 18, the `else` block runs immediately.

## Example 2: Grade evaluation

```python
score = 75

if score >= 90:
    print("Grade: A")
elif score >= 70:
    if score >= 80:
        print("Grade: B+")
    else:
        print("Grade: B")
else:
    print("Grade: C or below")
```

Explanation:
- `elif score >= 70` is only checked when `score < 90`.
- The nested `if` inside the `elif` block distinguishes between `B+` and `B`.

## Tips

- Keep nesting shallow for readability.
- Use clear indentation to show the structure.
- If nested logic becomes complex, consider using functions or logical operators instead.
- Remember that each nested block must be indented consistently.

## Practice Questions

1. Write a nested `if` statement that checks whether a number is positive and even, then prints a message for each case.
2. Create a program that asks for a user's age and student status, then prints:
   - "Discount applied" if age is under 18 or user is a student,
   - "Full price" otherwise.
3. Given a temperature value, use nested conditions to print:
   - "Cold" if temperature is below 10,
   - "Cool" if temperature is between 10 and 20,
   - "Warm" if temperature is between 21 and 30,
   - "Hot" if temperature is above 30.

Optional: Try writing the answers with nested `if` statements and then simplify them using logical operators where possible.
