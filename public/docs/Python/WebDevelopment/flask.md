# Flask — Quick Reference

Flask is a lightweight Python web framework for building web applications and APIs. It is simple, flexible, and easy to get started with.

## Installation

pip install flask

## Minimal app (Hello, World)

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
	return 'Hello, World!'

if __name__ == '__main__':
	app.run(debug=True)
```

## Key concepts

- Routing: use @app.route to map URLs to view functions.
- Request & Response: access request data via flask.request and return response strings, dicts (JSON), or Response objects.
- Templates: use Jinja2 templates (render_template) for HTML rendering.
- Static files: place under /static and link from templates.
- Blueprints: organize an app into reusable modules.
- Extensions: Flask has many extensions (Flask-SQLAlchemy, Flask-Migrate, Flask-Login) for common tasks.

## Example: template rendering

```python
from flask import render_template

@app.route('/user/<name>')
def user(name):
	return render_template('user.html', name=name)
```

## Running

Use `python app.py` or `flask run` (set FLASK_APP environment variable). Use `debug=True` only in development.

## Resources

- Official docs: https://flask.palletsprojects.com/
- Tutorials: Flask Mega-Tutorial by Miguel Grinberg

```
