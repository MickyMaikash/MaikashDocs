# REST API in Python

## What is REST API?

REST (Representational State Transfer) is an architectural style for building web services that use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources. It's a lightweight, stateless approach to communication between client and server.

### Key Principles of REST:

1. **Client-Server Architecture** - Client and server are independent and communicate via HTTP
2. **Statelessness** - Each request contains all information needed; server doesn't store client context
3. **Uniform Interface** - Consistent API design with standard HTTP methods
4. **Resource-Based URLs** - Resources are identified by URLs (e.g., `/api/users/123`)
5. **Standard HTTP Methods**:
   - `GET` - Retrieve data
   - `POST` - Create new data
   - `PUT` - Update existing data
   - `DELETE` - Remove data
   - `PATCH` - Partial update

## How REST APIs are Used in Python

### 1. **Creating REST APIs with Flask**

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
users = [
    {'id': 1, 'name': 'John'},
    {'id': 2, 'name': 'Jane'}
]

# GET - Retrieve all users
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

# GET - Retrieve single user
@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    return jsonify(user) if user else ('Not Found', 404)

# POST - Create new user
@app.route('/api/users', methods=['POST'])
def create_user():
    new_user = request.json
    users.append(new_user)
    return jsonify(new_user), 201

# PUT - Update user
@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = next((u for u in users if u['id'] == user_id), None)
    if user:
        user.update(request.json)
        return jsonify(user)
    return ('Not Found', 404)

# DELETE - Remove user
@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    global users
    users = [u for u in users if u['id'] != user_id]
    return ('', 204)

if __name__ == '__main__':
    app.run(debug=True)
```

### 2. **Creating REST APIs with Django REST Framework**

```python
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

### 3. **Consuming REST APIs**

```python
import requests

# GET request
response = requests.get('https://api.example.com/users')
users = response.json()

# POST request
new_user = {'name': 'Alice', 'email': 'alice@example.com'}
response = requests.post('https://api.example.com/users', json=new_user)
created_user = response.json()

# PUT request
updated_data = {'name': 'Alice Smith'}
response = requests.put('https://api.example.com/users/1', json=updated_data)

# DELETE request
response = requests.delete('https://api.example.com/users/1')
```

## Why Use REST APIs?

### Advantages:

1. **Simplicity** - Built on standard HTTP, easy to understand and implement
2. **Scalability** - Stateless design allows horizontal scaling
3. **Flexibility** - Can be consumed by any platform (web, mobile, IoT)
4. **Cacheability** - HTTP caching improves performance
5. **Standard Protocol** - Uses familiar HTTP methods and status codes
6. **Language Agnostic** - Works with any programming language
7. **Loose Coupling** - Client and server are independent
8. **Easy Maintenance** - Clear separation of concerns

### Use Cases:

- Building backend services for web/mobile applications
- Third-party integrations (Twitter API, GitHub API, etc.)
- Microservices architecture
- Real-time data synchronization
- IoT device communication

## Best Practices for Python REST APIs

1. **Use versioning** - `/api/v1/users`, `/api/v2/users`
2. **Implement authentication** - JWT, OAuth2
3. **Use appropriate HTTP status codes** - 200, 201, 400, 404, 500
4. **Add error handling** - Return meaningful error messages
5. **Use database ORMs** - SQLAlchemy, Django ORM
6. **Validate input data** - Prevent invalid requests
7. **Use pagination** - Limit response size for large datasets
8. **Add logging** - Track API usage and errors
9. **Write tests** - Unit and integration tests
10. **Document API** - Use tools like Swagger/OpenAPI

## Popular Python Frameworks for REST APIs

| Framework | Features | Best For |
|-----------|----------|----------|
| **Flask** | Lightweight, flexible | Small to medium projects |
| **Django REST Framework** | Full-featured, batteries-included | Large projects, rapid development |
| **FastAPI** | Modern, fast, async support | High-performance APIs |
| **Falcon** | Minimalist, high-performance | Microservices |

## Conclusion

REST APIs are the standard way to build web services in modern applications. Python provides excellent frameworks like Flask and Django REST Framework to create robust, scalable APIs. Understanding REST principles and Python implementation is essential for any full-stack developer.