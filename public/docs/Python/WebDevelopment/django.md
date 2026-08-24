# Django

## What is Django?
Django is a high-level Python web framework that makes it easy to build web applications quickly. It follows the model-view-template (MVT) architecture and includes tools for routing, database management, templates, forms, authentication, and more.

## How Django is used in Python
- Django is written in Python and uses Python code for models, views, URLs, and configuration.
- You install Django with `pip install django`.
- You create a Django project and apps, define models in Python, and write view functions or classes to handle requests.
- Django uses templates to generate HTML and connects to databases like SQLite, PostgreSQL, or MySQL.

## How to build a website with Django (step by step)
1. Install Django:
   ```bash
   pip install django
   ```
2. Create a new Django project:
   ```bash
   django-admin startproject mysite
   ```
3. Change into the project folder:
   ```bash
   cd mysite
   ```
4. Create a new app inside the project:
   ```bash
   python manage.py startapp blog
   ```
5. Add the app to `INSTALLED_APPS` in `mysite/settings.py`:
   ```python
   INSTALLED_APPS = [
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
       'blog',
   ]
   ```
6. Define a model in `blog/models.py`:
   ```python
   from django.db import models

   class Post(models.Model):
       title = models.CharField(max_length=200)
       content = models.TextField()
       created_at = models.DateTimeField(auto_now_add=True)
   ```
7. Create database tables:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
8. Create a view in `blog/views.py`:
   ```python
   from django.shortcuts import render
   from .models import Post

   def home(request):
       posts = Post.objects.all()
       return render(request, 'blog/home.html', {'posts': posts})
   ```
9. Add a URL route in `blog/urls.py`:
   ```python
   from django.urls import path
   from . import views

   urlpatterns = [
       path('', views.home, name='home'),
   ]
   ```
10. Include the app URLs in `mysite/urls.py`:
    ```python
    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('blog.urls')),
    ]
    ```
11. Create a template file `blog/templates/blog/home.html`:
    ```html
    <h1>My Django Blog</h1>
    {% for post in posts %}
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    {% endfor %}
    ```
12. Run the development server:
    ```bash
    python manage.py runserver
    ```
13. Open `http://127.0.0.1:8000/` in your browser to see the site.

## Learning Journey Tips
- Start with small apps, like a blog or to-do list.
- Learn models, views, templates, and URL routing.
- Use the Django admin site to add and edit data.
- Practice by adding forms, authentication, and static files.
- Read Django documentation and follow tutorials step by step.