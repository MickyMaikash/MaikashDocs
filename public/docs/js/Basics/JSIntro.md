# Introduction to JavaScript

## What is JavaScript?

JavaScript is a **programming language** mainly used to make websites **interactive and dynamic**.

A website commonly uses three main technologies:

    HTML        → Structure
    CSS         → Styling
    JavaScript  → Behavior and Functionality

For example:

- **HTML** creates a button.
- **CSS** makes the button look good.
- **JavaScript** makes something happen when the button is clicked.

---

## What Can JavaScript Do?

JavaScript can be used to:

- Change the content of a webpage
- Change styles and HTML elements
- Respond to user actions such as clicks, typing, and scrolling
- Validate forms
- Create animations and interactive interfaces
- Perform calculations and logic
- Work with data
- Make API requests
- Store data in the browser
- Create games
- Build web applications

For example:

    console.log("Hello JavaScript!");

JavaScript can also change the content of a webpage:

    document.getElementById("message").textContent = "Hello JavaScript!";

---

## JavaScript with HTML and CSS

JavaScript works together with HTML and CSS to create interactive websites.

A simple way to remember their roles:

    HTML        → What is on the page?
    CSS         → How does it look?
    JavaScript  → What does it do?

For example, imagine a login button:

    HTML
     ↓
    Creates the Login button

    CSS
     ↓
    Styles the Login button

    JavaScript
     ↓
    Handles what happens when the button is clicked

---

## Where is JavaScript Used?

JavaScript is used in many different areas.

### Web Development

JavaScript is one of the main languages used for web development.

It can be used to create:

- Websites
- Interactive web pages
- Web applications
- Dashboards
- Online tools
- Browser games

Popular JavaScript technologies include:

    React
    Vue
    Angular
    Node.js

### Backend Development

JavaScript can also be used for backend development with **Node.js**.

This allows JavaScript to run outside the browser.

    Frontend
       ↓
    JavaScript
       ↓
    Backend
       ↓
    Database

### Mobile Applications

JavaScript can also be used to build mobile applications.

Examples:

    React Native
    Ionic

### Desktop Applications

JavaScript can be used to create desktop applications.

For example:

    Electron

### Games

JavaScript can be used to create games, especially games that run inside web browsers.

---

## Where Does JavaScript Run?

JavaScript can run in different environments.

### Browser

Web browsers such as Chrome, Firefox, and Edge have a **JavaScript engine** that executes JavaScript code.

For example:

    console.log("Hello JavaScript!");

This code can be executed from the browser's developer console.

### Node.js

JavaScript can also run outside the browser using **Node.js**.

Node.js allows JavaScript to be used for:

- Backend applications
- Server applications
- Scripts
- Command-line programs
- APIs

---

## JavaScript and Java

Despite their similar names, **JavaScript and Java are different programming languages**.

    Java        → Programming language
    JavaScript  → Programming language

They are not the same language.

---

## Why Learn JavaScript?

JavaScript is an important language for web development because it allows developers to create **interactive and dynamic applications**.

Learning JavaScript also provides a foundation for learning many other technologies.

For example:

    JavaScript
        ↓
     ┌───────┐
     ↓       ↓
    Frontend Backend
      ↓       ↓
    React   Node.js

---

## Simple Example

Here is a small example of JavaScript interacting with a webpage:

    <button onclick="changeMessage()">Click Me</button>

    <p id="message">Original Message</p>

    <script>
    function changeMessage() {
        document.getElementById("message").textContent = "Hello!";
    }
    </script>

When the button is clicked, JavaScript changes:

    Original Message

to:

    Hello!

This is one of the basic purposes of JavaScript:

> **JavaScript allows websites and applications to respond to actions, perform logic, and change dynamically.**

---

## Quick Summary

    JavaScript
        ↓
    Programming Language
        ↓
    Makes websites interactive and dynamic
        ↓
    Can run in browsers and outside browsers
        ↓
    Used for Web, Backend, Mobile, Desktop, Games, and more

## Console.log in javascript
> it is used to print something in browser console. it is used for debugging and checking the code variables working properly or not

*Examples:*
```js
console.log("Micky")
```

**Output**
```
Micky
```
