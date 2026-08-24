# Python Requests Library - Complete Guide

## Overview

The **Requests** library is one of the most popular and useful Python libraries for making HTTP requests. It simplifies working with APIs and web services by providing a clean, intuitive interface for sending HTTP requests and handling responses.

### Why Use Requests?

- Simple and beginner-friendly syntax
- Handles automatic URL encoding of query strings
- Built-in JSON support
- Automatic content decoding
- Session management for persistent connections
- Excellent documentation and community support

---

## Installation

```bash
pip install requests
```

---

## Main Methods

### 1. **GET Request**

Used to retrieve data from a server.

```python
import requests

# Simple GET request
response = requests.get('https://api.github.com')
print(response.status_code)  # Output: 200
print(response.text)  # Response content as text
```

**With Parameters:**

```python
# GET with query parameters
params = {'key': 'value', 'param': 'data'}
response = requests.get('https://api.example.com/endpoint', params=params)
print(response.json())  # Response as JSON
```

---

### 2. **POST Request**

Used to send data to a server.

```python
import requests

# Simple POST request
data = {'name': 'John', 'age': 30}
response = requests.post('https://api.example.com/users', data=data)
print(response.status_code)
```

**With JSON Data:**

```python
# POST with JSON
json_data = {'username': 'john_doe', 'email': 'john@example.com'}
response = requests.post('https://api.example.com/users', json=json_data)
print(response.json())
```

**With Headers:**

```python
headers = {'Authorization': 'Bearer YOUR_TOKEN', 'Content-Type': 'application/json'}
response = requests.post('https://api.example.com/users', json=json_data, headers=headers)
```

---

### 3. **PUT Request**

Used to update existing resources.

```python
import requests

# Update a resource
data = {'name': 'Jane Doe', 'age': 25}
response = requests.put('https://api.example.com/users/1', json=data)
print(response.status_code)
```

---

### 4. **DELETE Request**

Used to delete resources.

```python
import requests

# Delete a resource
response = requests.delete('https://api.example.com/users/1')
print(response.status_code)  # Usually 200 or 204 for success
```

---

### 5. **PATCH Request**

Used to partially update resources.

```python
import requests

# Partial update
data = {'age': 26}
response = requests.patch('https://api.example.com/users/1', json=data)
print(response.json())
```

---

## Important Functions & Attributes

### Response Object Methods

```python
response = requests.get('https://api.example.com/users')

# Get status code
print(response.status_code)  # e.g., 200, 404, 500

# Get response as text
print(response.text)

# Get response as JSON
print(response.json())

# Get response headers
print(response.headers)

# Check if request was successful
print(response.ok)  # True if status_code < 400

# Get raw bytes
print(response.content)

# Get response URL
print(response.url)

# Get request method
print(response.request.method)
```

---

### Session Object

For making multiple requests with persistent settings:

```python
import requests

# Create a session
session = requests.Session()

# Set default headers
session.headers.update({'Authorization': 'Bearer YOUR_TOKEN'})

# Make requests (headers are automatically included)
response1 = session.get('https://api.example.com/users')
response2 = session.get('https://api.example.com/posts')

# Close session
session.close()
```

---

### Timeout

Prevent hanging requests:

```python
import requests

# 5 seconds timeout
response = requests.get('https://api.example.com/users', timeout=5)
```

---

### Error Handling

```python
import requests
from requests.exceptions import RequestException, Timeout, ConnectionError

try:
    response = requests.get('https://api.example.com/users', timeout=5)
    response.raise_for_status()  # Raise exception for bad status codes
except Timeout:
    print("Request timed out")
except ConnectionError:
    print("Connection error")
except RequestException as e:
    print(f"Error: {e}")
```

---

## Complete Working Example

```python
import requests
import json

# Base URL
BASE_URL = 'https://jsonplaceholder.typicode.com'

# 1. GET Request - Fetch all users
print("=== GET Request ===")
response = requests.get(f'{BASE_URL}/users')
users = response.json()
print(f"Found {len(users)} users")
print(f"First user: {users[0]['name']}")

# 2. GET Request with parameters - Fetch specific post
print("\n=== GET with Parameters ===")
params = {'userId': 1, '_limit': 2}
response = requests.get(f'{BASE_URL}/posts', params=params)
posts = response.json()
print(f"Posts by user 1: {len(posts)} posts")

# 3. POST Request - Create new post
print("\n=== POST Request ===")
new_post = {
    'title': 'My New Post',
    'body': 'This is a test post',
    'userId': 1
}
response = requests.post(f'{BASE_URL}/posts', json=new_post)
print(f"Status: {response.status_code}")
print(f"Created post: {response.json()}")

# 4. PUT Request - Update post
print("\n=== PUT Request ===")
updated_post = {
    'id': 1,
    'title': 'Updated Title',
    'body': 'Updated content',
    'userId': 1
}
response = requests.put(f'{BASE_URL}/posts/1', json=updated_post)
print(f"Status: {response.status_code}")

# 5. DELETE Request - Delete post
print("\n=== DELETE Request ===")
response = requests.delete(f'{BASE_URL}/posts/1')
print(f"Status: {response.status_code}")

# 6. Using Session for multiple requests
print("\n=== Using Session ===")
session = requests.Session()
session.headers.update({'User-Agent': 'MyApp/1.0'})

for user_id in range(1, 4):
    response = session.get(f'{BASE_URL}/users/{user_id}')
    user = response.json()
    print(f"User {user_id}: {user['name']}")

session.close()
```

---

## Common Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request succeeded |
| 201 | Created - Resource created successfully |
| 204 | No Content - Success but no response body |
| 400 | Bad Request - Invalid request |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Access denied |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Server error occurred |

---

## Key Takeaways

✅ Use `requests.get()` to fetch data
✅ Use `requests.post()` to send data
✅ Use `response.json()` for JSON responses
✅ Always handle exceptions with try-except
✅ Use `Session()` for multiple requests to same server
✅ Always set appropriate timeouts
✅ Check `response.status_code` to verify success

---

**Requests is an essential library for Python developers working with APIs and web services!**