# Python `if` Statement

## What is an `if` statement?

An `if` statement lets Python execute a block of code only when a condition is true.

### Syntax

```python
if condition:
    # code executed when condition is true
```

### Example

```python
age = 18
if age >= 18:
    print("You are eligible to vote")
```

## How it works

1. Python evaluates the condition after `if`.
2. If the condition is `True`, the indented block runs.
3. If the condition is `False`, Python skips the block.

## Common comparison operators

- `==` : equal to
- `!=` : not equal to
- `>`  : greater than
- `<`  : less than
- `>=` : greater than or equal to
- `<=` : less than or equal to

## Using `else`

The `else` block runs when the `if` condition is false.

```python
number = 5
if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

## Using `elif`

`elif` lets you test multiple conditions in sequence.

```python
score = 75
if score >= 90:
    print("Grade A")
elif score >= 75:
    print("Grade B")
else:
    print("Grade C")
```

## Best practices

- Use clear conditions.
- Keep indentation consistent (usually 4 spaces).
- Avoid overly complex conditions in one line.
- Use `elif` instead of nested `if` when checking multiple exclusive cases.

## Practice Questions

1. Write an `if` statement that prints "Positive" when a number is greater than 0.
2. Write code that checks if a variable `temp` is below 0 and prints "Freezing" if true, otherwise prints "Above freezing".
3. Create an `if` / `else` statement to print "Adult" when `age` is 18 or older, and "Minor" otherwise.
4. Write a program that checks if a number `n` is divisible by 3 and prints "Divisible by 3" if true.
5. Use `if`, `elif`, and `else` to classify a grade value: 90+ to print "Excellent", 70-89 to print "Good", otherwise print "Needs Improvement".

## Practice answers

```python
# 1
number = 10
if number > 0:
    print("Positive")

# 2
temp = -5
if temp < 0:
    print("Freezing")
else:
    print("Above freezing")

# 3
age = 16
if age >= 18:
    print("Adult")
else:
    print("Minor")

# 4
n = 9
if n % 3 == 0:
    print("Divisible by 3")

# 5
grade = 85
if grade >= 90:
    print("Excellent")
elif grade >= 70:
    print("Good")
else:
    print("Needs Improvement")
```
