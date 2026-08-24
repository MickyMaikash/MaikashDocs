# Python Arithmetic Operators

Arithmetic operators in Python are used to perform basic mathematical operations on numeric values.

## Common Operators

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division (result is a float)
- `//` : Floor division (result is rounded down to the nearest integer)
- `%` : Modulus (remainder of division)
- `**` : Exponentiation (power)

## Examples

```python
# Addition
x = 5 + 3  # x = 8

# Subtraction
y = 10 - 4  # y = 6

# Multiplication
z = 6 * 7  # z = 42

# Division
a = 15 / 4  # a = 3.75

# Floor division
b = 15 // 4  # b = 3

# Modulus
c = 15 % 4  # c = 3

# Exponentiation
d = 2 ** 5  # d = 32
```

## Operator Precedence

Python follows standard precedence rules:

1. `**`
2. `*`, `/`, `//`, `%`
3. `+`, `-`

Use parentheses to change evaluation order.

```python
result = 2 + 3 * 4  # result = 14
result = (2 + 3) * 4  # result = 20
```

## Notes

- Division `/` always returns a float, even if the operands are integers.
- Floor division `//` returns an integer when both operands are integers, otherwise it returns a float.
- The modulus operator `%` is useful for checking even/odd values and working with remainders.
- Exponentiation uses `**`, not `^`.

## Practice

Try these examples:

```python
print(8 + 2 * 3)
print((8 + 2) * 3)
print(9 // 2)
print(9 % 2)
print(3 ** 3)
```
