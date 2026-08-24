# Matplotlib

Matplotlib is a popular Python library for creating plots and visualizations. It is widely used for data analysis, scientific computing, and learning resources.

## Why use Matplotlib?
- It works with Python and NumPy.
- It can create line plots, scatter plots, bar charts, histograms, and more.
- It helps make data easier to understand.
- It is useful for learning data visualization in Python.

## How Matplotlib is used in Python
The main Matplotlib module is `matplotlib.pyplot`, which is commonly imported as `plt`.

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y)
plt.title('Simple Line Plot')
plt.xlabel('x values')
plt.ylabel('y values')
plt.show()
```

This example creates a simple line plot using:
- `plt.plot()` to draw the data
- `plt.title()` to set the title
- `plt.xlabel()` and `plt.ylabel()` for axis labels
- `plt.show()` to display the plot

## Common Matplotlib functions
- `plt.plot(x, y)` - line plot
- `plt.scatter(x, y)` - scatter plot
- `plt.bar(labels, values)` - bar chart
- `plt.hist(data)` - histogram
- `plt.title('text')` - title
- `plt.xlabel('text')` and `plt.ylabel('text')` - axis labels
- `plt.legend()` - show legend
- `plt.show()` - display the figure

## Matplotlib methods and object-oriented style
Matplotlib also supports an object-oriented approach using `Figure` and `Axes` objects.

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [4, 5, 6], label='line')
ax.set_title('Plot with Axes methods')
ax.set_xlabel('x axis')
ax.set_ylabel('y axis')
ax.legend()
plt.show()
```

In this style:
- `fig, ax = plt.subplots()` creates a figure and axes
- `ax.plot()` is a method of the axes object
- `ax.set_title()`, `ax.set_xlabel()`, and `ax.set_ylabel()` are axes methods

## Working example with multiple plots

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4]
y1 = [0, 1, 4, 9, 16]
y2 = [0, 1, 8, 27, 64]

plt.plot(x, y1, label='y = x^2')
plt.plot(x, y2, label='y = x^3')
plt.legend()
plt.title('Multiple lines')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()
```

## Summary
Matplotlib is a useful Python library for plotting data. It provides simple functions and a more advanced object-oriented interface. Use it to create clear visuals and learn how to display data in Python.