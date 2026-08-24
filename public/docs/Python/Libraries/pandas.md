# Pandas - Data Manipulation Library for Python

## Introduction to Pandas

Pandas is one of the most powerful and widely-used libraries in Python for data analysis and manipulation. It provides easy-to-use data structures and data analysis tools designed to make working with structured data fast, simple, and intuitive.

## Why Pandas?

- **Efficient Data Handling**: Work with large datasets efficiently
- **Flexible Data Structures**: Series and DataFrames for different data types
- **Easy Data Cleaning**: Handle missing data, duplicates, and inconsistencies
- **Data Transformation**: Reshape, merge, and pivot data easily
- **Statistical Analysis**: Built-in functions for statistical operations
- **Time Series**: Excellent support for time-based data

## Core Data Structures

### 1. Series

A Series is a one-dimensional labeled array that can hold any data type.

```python
import pandas as pd

# Creating a Series
s = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
print(s)
# Output:
# a    1
# b    2
# c    3
# d    4
# e    5
```

### 2. DataFrame

A DataFrame is a two-dimensional labeled data structure with rows and columns, similar to a spreadsheet.

```python
import pandas as pd

# Creating a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'Salary': [50000, 60000, 75000]
}
df = pd.DataFrame(data)
print(df)
#        Name  Age  Salary
# 0    Alice   25   50000
# 1      Bob   30   60000
# 2  Charlie   35   75000
```

## Essential Methods

### Data Inspection Methods

```python
# Check first few rows
df.head()

# Check last few rows
df.tail()

# Get info about DataFrame
df.info()

# Get statistical summary
df.describe()

# Get shape (rows, columns)
print(df.shape)

# Get column names
print(df.columns)

# Get data types
print(df.dtypes)
```

### Data Selection Methods

```python
# Select single column (returns Series)
df['Name']

# Select multiple columns
df[['Name', 'Age']]

# Select by row index
df.loc[0]

# Select by position
df.iloc[0]

# Select with condition
df[df['Age'] > 25]
```

### Data Cleaning Methods

```python
# Check for missing values
df.isnull()

# Drop rows with missing values
df.dropna()

# Fill missing values
df.fillna(0)

# Remove duplicates
df.drop_duplicates()

# Rename columns
df.rename(columns={'Name': 'FullName'})
```

### Data Transformation Methods

```python
# Sort by column
df.sort_values(by='Age')

# Group by column
df.groupby('Age').sum()

# Merge DataFrames
pd.merge(df1, df2, on='key')

# Concatenate DataFrames
pd.concat([df1, df2])

# Apply custom function
df['Age'].apply(lambda x: x + 1)

# Pivot table
df.pivot_table(values='Salary', index='Name', columns='Age')
```

## Useful Functions

### Reading Data

```python
# Read CSV file
df = pd.read_csv('file.csv')

# Read Excel file
df = pd.read_excel('file.xlsx')

# Read JSON file
df = pd.read_json('file.json')

# Read from URL
df = pd.read_csv('http://example.com/data.csv')
```

### Writing Data

```python
# Write to CSV
df.to_csv('output.csv', index=False)

# Write to Excel
df.to_excel('output.xlsx', index=False)

# Write to JSON
df.to_json('output.json')

# Write to SQL database
df.to_sql('table_name', connection)
```

### Aggregation Functions

```python
# Sum
df['Salary'].sum()

# Mean
df['Age'].mean()

# Median
df['Salary'].median()

# Standard deviation
df['Age'].std()

# Count
df.count()

# Min/Max
df['Age'].min()
df['Salary'].max()
```

## Working Examples in Python

### Example 1: Basic Data Analysis

```python
import pandas as pd

# Create a DataFrame
data = {
    'Product': ['Laptop', 'Phone', 'Tablet', 'Monitor'],
    'Price': [1000, 800, 400, 300],
    'Quantity': [5, 10, 15, 8]
}
df = pd.DataFrame(data)

# Calculate total value
df['Total'] = df['Price'] * df['Quantity']
print(df)

# Find highest priced product
print(df.loc[df['Price'].idxmax()])
```

### Example 2: Cleaning and Filtering

```python
import pandas as pd

# Create DataFrame with missing values
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', None, 'David'],
    'Score': [85, None, 90, 95]
})

# Remove rows with missing values
clean_df = df.dropna()

# Or fill missing values
filled_df = df.fillna(0)

# Filter scores above 85
high_scores = df[df['Score'] > 85]
print(high_scores)
```

### Example 3: GroupBy and Aggregation

```python
import pandas as pd

# Sales data
df = pd.DataFrame({
    'Region': ['North', 'South', 'North', 'South', 'North'],
    'Sales': [1000, 1500, 1200, 1800, 900],
    'Month': ['Jan', 'Jan', 'Feb', 'Feb', 'Mar']
})

# Group by region and sum sales
regional_sales = df.groupby('Region')['Sales'].sum()
print(regional_sales)

# Group by multiple columns
monthly_regional = df.groupby(['Region', 'Month'])['Sales'].sum()
print(monthly_regional)
```

### Example 4: Merging DataFrames

```python
import pandas as pd

# First DataFrame
df1 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Name': ['Alice', 'Bob', 'Charlie']
})

# Second DataFrame
df2 = pd.DataFrame({
    'ID': [1, 2, 3],
    'Salary': [50000, 60000, 75000]
})

# Merge on ID column
merged_df = pd.merge(df1, df2, on='ID')
print(merged_df)
```

### Example 5: Time Series Data

```python
import pandas as pd

# Create time series data
dates = pd.date_range('2024-01-01', periods=5)
df = pd.DataFrame({
    'Date': dates,
    'Value': [10, 15, 12, 20, 18]
})

# Resample to weekly average
weekly_avg = df.set_index('Date')['Value'].resample('W').mean()
print(weekly_avg)
```

## Key Benefits for Learning

1. **Real-World Application**: Essential for data science and analytics
2. **Beginner-Friendly**: Intuitive syntax and comprehensive documentation
3. **Powerful**: Handle complex data operations with minimal code
4. **Integration**: Works seamlessly with other libraries like NumPy and Matplotlib
5. **Community**: Extensive resources and active community support

## Common Use Cases

- **Data Cleaning**: Prepare raw data for analysis
- **Exploratory Data Analysis**: Understand data patterns
- **Data Transformation**: Reshape and restructure data
- **Statistical Analysis**: Calculate metrics and insights
- **Time Series Analysis**: Work with time-based data
- **Reporting**: Generate summaries and visualizations

## Conclusion

Pandas is an indispensable library for anyone working with data in Python. Its rich set of methods and functions make data manipulation simple and efficient, making it a must-learn tool for Python developers and data scientists.