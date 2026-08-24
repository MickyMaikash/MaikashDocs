# BeautifulSoup Library - Web Scraping Guide

BeautifulSoup is a powerful Python library used for parsing HTML and XML documents. It's primarily used for web scraping, extracting data from websites, and parsing structured data efficiently.

## Installation

```bash
pip install beautifulsoup4
```

## Basic Usage

### Importing BeautifulSoup

```python
from bs4 import BeautifulSoup
import requests

# Fetch webpage
response = requests.get('https://example.com')
html_content = response.text

# Parse HTML
soup = BeautifulSoup(html_content, 'html.parser')
```

## Common Methods

### 1. **find()** - Find First Matching Element

```python
# Find first paragraph
first_p = soup.find('p')

# Find with attributes
div = soup.find('div', class_='container')

# Find with id
header = soup.find('div', id='header')
```

### 2. **find_all()** - Find All Matching Elements

```python
# Get all paragraphs
all_paragraphs = soup.find_all('p')

# Find with limit
first_three = soup.find_all('p', limit=3)

# Find by class
items = soup.find_all('div', class_='item')
```

### 3. **select()** - CSS Selectors

```python
# Select by tag
tags = soup.select('p')

# Select by class
classes = soup.select('.container')

# Select by id
element = soup.select('#header')

# Nested selectors
nested = soup.select('div.container > p')
```

### 4. **select_one()** - Select First Matching CSS Selector

```python
# Get first element matching selector
first_item = soup.select_one('.item')
```

## Navigation Methods

### Accessing Elements

```python
# Get parent element
parent = tag.parent

# Get children
children = tag.children  # Iterator
all_children = tag.contents  # List

# Get siblings
next_sibling = tag.next_sibling
previous_sibling = tag.previous_sibling

# Get next/previous elements
next_tag = tag.find_next_sibling()
```

### Getting Text and Attributes

```python
# Get text content
text = soup.get_text()
tag_text = tag.string

# Get attribute
href = tag.get('href')
class_name = tag['class']

# Get all attributes
attributes = tag.attrs
```

## Practical Web Scraping Example

```python
from bs4 import BeautifulSoup
import requests

# Fetch webpage
url = 'https://example.com/products'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Extract product information
products = soup.find_all('div', class_='product')

for product in products:
    # Get product name
    name = product.find('h2', class_='product-name').get_text()
    
    # Get product price
    price = product.find('span', class_='price').get_text()
    
    # Get product link
    link = product.find('a')['href']
    
    print(f"Name: {name}")
    print(f"Price: {price}")
    print(f"Link: {link}")
    print("---")
```

## Advanced Features

### Navigating the Parse Tree

```python
# Forward navigation
for element in soup.body.descendants:
    print(element.name)

# Backward navigation
current = soup.find('p')
while current:
    print(current.name)
    current = current.parent
```

### Filtering Results

```python
# Function-based filtering
def has_class_attr(tag):
    return tag.has_attr('class') and 'item' in tag['class']

results = soup.find_all(has_class_attr)

# Lambda filtering
items = soup.find_all('div', class_=lambda x: x and 'item' in x)
```

### Handling Multiple Parsers

```python
# html.parser - built-in, no dependencies
soup = BeautifulSoup(html, 'html.parser')

# lxml - faster, requires installation
soup = BeautifulSoup(html, 'lxml')

# html5lib - most lenient, requires installation
soup = BeautifulSoup(html, 'html5lib')
```

## Complete Web Scraping Workflow

```python
from bs4 import BeautifulSoup
import requests
import csv

def scrape_data(url):
    # 1. Fetch page
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    
    # 2. Parse HTML
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # 3. Extract data
    data = []
    for item in soup.select('.item'):
        title = item.select_one('.title').get_text(strip=True)
        description = item.select_one('.desc').get_text(strip=True)
        
        data.append({
            'title': title,
            'description': description
        })
    
    # 4. Save to CSV
    with open('output.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['title', 'description'])
        writer.writeheader()
        writer.writerows(data)
    
    return data

# Run scraper
results = scrape_data('https://example.com')
print(f"Scraped {len(results)} items")
```

## Key Functions Summary

| Function | Purpose |
|----------|---------|
| `find()` | Find first matching element |
| `find_all()` | Find all matching elements |
| `select()` | Find elements using CSS selectors |
| `select_one()` | Find first element using CSS selector |
| `get_text()` | Extract all text |
| `get()` or `[]` | Get attribute values |
| `parent` | Access parent element |
| `children` | Access child elements |

## Best Practices

1. **Add delays** between requests to avoid overloading servers
2. **Check robots.txt** before scraping a website
3. **Use headers** to identify your bot
4. **Handle errors** gracefully with try-except blocks
5. **Respect terms of service** of the website
6. **Use sessions** for multiple requests

## Tips for Learning

- Practice with simple websites first
- Inspect HTML structure before writing scraper
- Test selectors in browser console
- Use `.prettify()` to view parsed HTML clearly
- Handle missing elements with error checking

```python
# Safe way to handle missing elements
title = tag.find('h1')
if title:
    print(title.get_text())
else:
    print("Title not found")
```

BeautifulSoup is an essential library for web scraping, data extraction, and HTML/XML parsing in Python!
