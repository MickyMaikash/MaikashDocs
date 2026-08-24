# Regular Expressions in Python

## What is Regular Expression (Regex)?

A **regular expression (regex)** is a sequence of characters that defines a search pattern. It's used to match, find, and manipulate text based on specific patterns. Regex is a powerful tool for text processing and pattern matching in strings.

## Why Use Regular Expressions?

- **Pattern Matching**: Find specific patterns in large text
- **Data Validation**: Validate email addresses, phone numbers, URLs, etc.
- **Text Extraction**: Extract specific data from unstructured text
- **Text Replacement**: Replace patterns with desired content
- **Data Cleaning**: Clean and format data efficiently
- **String Manipulation**: Split, search, and modify strings

## How Regular Expressions Work

Regex uses special characters and patterns to define what you're searching for:

- `.` - Matches any character except newline
- `*` - Matches 0 or more occurrences
- `+` - Matches 1 or more occurrences
- `?` - Matches 0 or 1 occurrence
- `^` - Matches start of string
- `$` - Matches end of string
- `[abc]` - Matches any character in the brackets
- `[a-z]` - Matches any character in the range
- `[^abc]` - Matches any character NOT in brackets
- `\d` - Matches any digit (0-9)
- `\w` - Matches word characters (a-z, A-Z, 0-9, _)
- `\s` - Matches whitespace
- `|` - Alternation (OR)

## Getting Started: Simple Step-by-Step

### Step 1: Import the `re` module
```python
import re
```

### Step 2: Define your pattern
Think of a pattern as a template of what you're looking for:
```python
pattern = r"cat"  # Looking for the word "cat"
```

### Step 3: Define your text
```python
text = "I have a cat and a dog"
```

### Step 4: Choose a method and search
```python
result = re.search(pattern, text)  # Find "cat" in text
if result:
    print("Found:", result.group())  # Prints: Found: cat
```

---

## Using Regex in Python

Python's `re` module provides regex functionality:

```python
import re
```

## Main Methods of the `re` Module

### 1. **re.match()**
Checks if regex matches at the **beginning** of a string.

```python
import re
pattern = r"Hello"
text = "Hello World"
result = re.match(pattern, text)
if result:
    print("Match found:", result.group())
```

### 2. **re.search()**
Searches for regex pattern **anywhere** in the string (returns first match).

```python
pattern = r"World"
text = "Hello World"
result = re.search(pattern, text)
if result:
    print("Match found:", result.group())
```

### 3. **re.findall()**
Returns a **list of all matches** in the string.

```python
pattern = r"\d+"
text = "I have 2 cats and 3 dogs"
matches = re.findall(pattern, text)
print(matches)  # Output: ['2', '3']
```

### 4. **re.sub()**
**Replaces** all occurrences of pattern with a replacement string.

```python
pattern = r"\d+"
text = "I have 2 cats and 3 dogs"
result = re.sub(pattern, "X", text)
print(result)  # Output: I have X cats and X dogs
```

### 5. **re.split()**
**Splits** a string by regex pattern.

```python
pattern = r"\s+"
text = "Hello   World   Python"
result = re.split(pattern, text)
print(result)  # Output: ['Hello', 'World', 'Python']
```

### 6. **re.finditer()**
Returns an **iterator** of all matches (useful for large data).

```python
pattern = r"\d+"
text = "I have 2 cats and 3 dogs"
for match in re.finditer(pattern, text):
    print(match.group(), "at position", match.start())
```

### 7. **re.compile()**
**Compiles** a regex pattern for reuse (improves performance).

```python
pattern = re.compile(r"\d+")
text1 = "I have 2 cats"
text2 = "I have 3 dogs"
print(pattern.findall(text1))  # ['2']
print(pattern.findall(text2))  # ['3']
```

## Practical Examples

### Email Validation
```python
import re
pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
email = "user@example.com"
if re.match(pattern, email):
    print("Valid email")
```

### Extract Phone Number
```python
pattern = r"\d{3}-\d{3}-\d{4}"
text = "Call me at 123-456-7890"
phone = re.search(pattern, text)
if phone:
    print("Phone:", phone.group())
```

### Remove Extra Spaces
```python
pattern = r"\s+"
text = "Hello    World    Python"
result = re.sub(pattern, " ", text)
print(result)  # Output: Hello World Python
```

## Summary

| Method | Purpose |
|--------|---------|
| `match()` | Match at beginning of string |
| `search()` | Find first match anywhere |
| `findall()` | Find all matches |
| `sub()` | Replace matches |
| `split()` | Split string by pattern |
| `finditer()` | Iterate through matches |
| `compile()` | Compile pattern for reuse |

Regular expressions are essential for advanced text processing and data validation in Python applications.