# NumPy - Numerical Python Library

## Overview

NumPy (Numerical Python) is a powerful Python library used for numerical and scientific computing. It provides support for arrays, matrices, and a wide range of mathematical functions, making it essential for data analysis, machine learning, and scientific research.

## Why Use NumPy?

- **Fast Computation**: NumPy arrays are much faster than Python lists
- **Memory Efficient**: Uses less memory compared to traditional Python data structures
- **Convenient**: Simplifies mathematical and statistical operations
- **Foundation**: Many other libraries (Pandas, SciPy, Matplotlib) are built on NumPy

---

## Installation

```python
pip install numpy
```

---

## NumPy Arrays - Core Concept

### Creating Arrays

#### 1. From Python Lists
```python
import numpy as np

# 1D Array
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # Output: [1 2 3 4 5]

# 2D Array
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr_2d)
# [[1 2 3]
#  [4 5 6]]
```

#### 2. Using NumPy Functions
```python
# Array of zeros
zeros = np.zeros((3, 3))

# Array of ones
ones = np.ones((2, 4))

# Array with range of values
range_arr = np.arange(0, 10, 2)
print(range_arr)  # Output: [0 2 4 6 8]

# Array with evenly spaced values
linspace_arr = np.linspace(0, 10, 5)
print(linspace_arr)  # Output: [ 0.   2.5  5.   7.5 10. ]

# Array with random values
random_arr = np.random.rand(3, 3)
```

---

## Key NumPy Methods and Functions

### Array Properties

```python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)   # Output: (2, 3)
print(arr.size)    # Output: 6
print(arr.dtype)   # Output: int64
print(arr.ndim)    # Output: 2

# Reshape array
reshaped = arr.reshape(3, 2)
```

### Mathematical Operations

```python
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([5, 6, 7, 8])

print(np.add(arr1, arr2))       # Output: [ 6  8 10 12]
print(np.subtract(arr1, arr2))  # Output: [-4 -4 -4 -4]
print(np.multiply(arr1, arr2))  # Output: [ 5 12 21 32]
print(np.divide(arr1, arr2))    # Output: [0.2  0.33 0.43 0.5]
print(np.power(arr1, 2))        # Output: [ 1  4  9 16]
print(np.sqrt(arr1))            # Output: [1.    1.41 1.73 2.  ]
```

### Aggregation Functions

```python
arr = np.array([1, 2, 3, 4, 5])

print(np.sum(arr))      # Output: 15
print(np.mean(arr))     # Output: 3.0
print(np.median(arr))   # Output: 3.0
print(np.std(arr))      # Output: 1.41
print(np.min(arr))      # Output: 1
print(np.max(arr))      # Output: 5

# Sum along axis (for 2D arrays)
arr_2d = np.array([[1, 2, 3], [4, 5, 6]])
print(np.sum(arr_2d, axis=0))  # Sum columns: [5 7 9]
print(np.sum(arr_2d, axis=1))  # Sum rows: [6 15]
```

### Sorting and Searching

```python
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

print(np.sort(arr))     # Output: [1 1 2 3 4 5 6 9]
print(np.argsort(arr))  # Output: [1 3 6 0 2 4 7 5]
print(np.where(arr > 3))  # Returns indices where value > 3
```

### Linear Algebra

```python
# Matrix multiplication
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])

result = np.dot(matrix1, matrix2)
# [[19 22]
#  [43 50]]

# Transpose
print(matrix1.T)
# [[1 3]
#  [2 4]]

# Determinant and Inverse
print(np.linalg.det(matrix1))    # Output: -2.0
print(np.linalg.inv(matrix1))
```

### Array Indexing and Slicing

```python
arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

print(arr[0])      # Output: 0
print(arr[-1])     # Output: 9
print(arr[2:5])    # Output: [2 3 4]
print(arr[::2])    # Output: [0 2 4 6 8]
print(arr[::-1])   # Output: [9 8 7 6 5 4 3 2 1 0]

# 2D Array Indexing
arr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr_2d[0])      # Output: [1 2 3]
print(arr_2d[1, 2])   # Output: 6
print(arr_2d[:, 1])   # Output: [2 5 8]
```

### Boolean Indexing

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# Filter elements greater than 5
filtered = arr[arr > 5]
print(filtered)  # Output: [ 6  7  8  9 10]

# Multiple conditions
result = arr[(arr > 3) & (arr < 8)]
print(result)  # Output: [4 5 6 7]
```

---

## Practical Working Examples

### Example 1: Data Analysis

```python
import numpy as np

sales = np.array([100, 150, 120, 200, 180])

print(f"Total Sales: ${np.sum(sales)}")           # $750
print(f"Average Sales: ${np.mean(sales):.2f}")    # $150.00
print(f"Max Sales: ${np.max(sales)}")             # $200
print(f"Min Sales: ${np.min(sales)}")             # $100
print(f"Std Deviation: ${np.std(sales):.2f}")     # $38.07
```

### Example 2: Matrix Operations

```python
import numpy as np

student1 = np.array([85, 90, 88])
student2 = np.array([92, 88, 95])
student3 = np.array([78, 82, 80])

grades = np.array([student1, student2, student3])

avg_per_subject = np.mean(grades, axis=0)
avg_per_student = np.mean(grades, axis=1)

print(f"Average per subject: {avg_per_subject}")
print(f"Average per student: {avg_per_student}")
```

### Example 3: Random Data Generation

```python
import numpy as np

scores = np.random.randint(0, 101, 100)

print(f"Mean Score: {np.mean(scores):.2f}")
print(f"Median Score: {np.median(scores):.2f}")
print(f"Std Dev: {np.std(scores):.2f}")

high_scorers = np.sum(scores > 80)
print(f"Students scoring above 80: {high_scorers}")
```

### Example 4: Image Processing (as Matrices)

```python
import numpy as np

# Create simple grayscale image (10x10 pixels)
image = np.random.randint(0, 256, (10, 10))

# Normalize pixel values (0-1)
normalized = image / 255.0

# Increase brightness by 20%
brightened = np.clip(image * 1.2, 0, 255).astype(int)

print("Original shape:", image.shape)
print("Pixel values range:", np.min(image), "-", np.max(image))
```

---

## Common NumPy Functions Summary

| Function | Purpose |
|----------|---------|
| `np.array()` | Create array from list |
| `np.zeros()` | Create array filled with zeros |
| `np.ones()` | Create array filled with ones |
| `np.arange()` | Create array with range of values |
| `np.linspace()` | Create array with evenly spaced values |
| `np.random.rand()` | Create random array |
| `np.shape()` | Get array dimensions |
| `np.reshape()` | Change array shape |
| `np.sum()` | Sum all elements |
| `np.mean()` | Calculate average |
| `np.std()` | Calculate standard deviation |
| `np.max()` | Find maximum value |
| `np.min()` | Find minimum value |
| `np.sort()` | Sort array elements |
| `np.dot()` | Matrix multiplication |
| `np.transpose()` | Transpose array |
| `np.where()` | Find indices of elements |
| `np.clip()` | Clip values to range |

---

## Advantages of NumPy

✅ **Performance**: 50-100x faster than pure Python  
✅ **Convenience**: Vectorized operations reduce code complexity  
✅ **Compatibility**: Works seamlessly with other scientific libraries  
✅ **Memory**: More efficient memory usage  
✅ **Functionality**: Extensive mathematical and statistical functions

---

## Conclusion

NumPy is an essential library for anyone working with data, mathematics, or scientific computing in Python. Its powerful array operations and mathematical functions make it the foundation for advanced data analysis and machine learning tasks.
