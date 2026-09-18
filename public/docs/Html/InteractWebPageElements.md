# Html Tags For Building Interactive Web Pages

> this section includes the html tags that you must know to make your web page interactive eg `<a>`

---

## 1. Links & Navigation

### Anchor Tag (`<a>`) Basics

> `<a>` tag-> it is used to go from one page to another or opening a differnent sites basically used for links
> to use this tag we have to pass an attribute href which equal to the link where we want to go example if your file is index.html and you have one more file name about.html then in index.html you can use anchor tag in it's attribute href we can pass the path of this about page when you click on that button you will navigate to about page that simple
> href=> hyper refrence
> if you pass href value to # it will do nothing like no navigation i mean it will not go to any page
> it will open the page in the same tab when you want to go to previous tab then you have to click back button

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Learning Achor Tag</h1>
    <a href="https://www.google.com/">Go To google</a>
    <br>
    <a href="about.html">Take me to About Page</a>
    <br>
    <a href="#">Comming soon</a>
</body>
</html>

```

---

### Open Links in a New Tab (`target="_blank"`)

> To opening a links or page into other tab we use one more attribute in anchor tag which is `targe="_blank"`
> now when we click on Go To google button it will open a new tab which opens a google.com

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Learning Achor Tag</h1>
    <a href="https://www.google.com/" target="_blank">Go To google</a>
</body>
</html>

```

---

### Email Links & Downloads

> i mean if you have like a file let say data.pdf you can pass the path of this pdf in anchor tag href when someone click on that button that pdf will be downloaded

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="mailto:hello@example.com?Subject=Hello&body=I%20love%20your%20website">Email Me</a>
    <a href="data.pdf">Download Data file</a>
</body>
</html>

```

---

## 2. Images in Html

> how to use image in webpages

* img tag-> to insert image and inside img tag we need to pass source src like path of image or links and one alternative text alt like when image is not avaiable or not laoded properly to show on the place of image

> src and alt two attribute in img tag must

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Image In Html</h1>
    <img src="favicon.svg" alt="site icon" title="Documentation Site">
</body>
</html>

```

---

## 3. Form In Html (`<form>` & Inputs)

> `<form>` tag-> creates a form section to collect data from users (like login screens, signup pages, or search bars)

---

### Form Container Basics
>
> **form attributes:**
> * `action` attribute-> specifies the URL or backend file where the form data should be sent after submission
> * `method` attribute-> specifies how data is sent:
> * `GET` attaches form data directly into the URL bar (used for simple site searches)
> * `POST` sends data hidden in the background request (used for passwords, logins, and sensitive data)
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Container</title>
</head>
<body>
    <form action="/submit-data" method="POST">
        <!-- Form elements go here -->
    </form>
</body>
</html>

```

---

### Text Input & Labels

> **form elements:**
> * `<label>` tag-> provides a readable label for an input box. the `for` attribute on the label must match the `id` attribute on the input box. clicking the label text focuses the cursor inside the input box automatically
> * `<input>` tag-> accepts user input. its behavior changes based on the `type` attribute:
> * `type="text"`-> single line input field for text like names
> * `placeholder` attribute-> displays light grey hint text inside the box before the user types
> * `required` attribute-> prevents form submission if the user leaves the input empty
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Input</title>
</head>
<body>
    <form>
        <!-- text input for full name -->
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" placeholder="John Doe" required>
    </form>
</body>
</html>

```

---

### Email Input

> * `type="email"`-> validates that the user typed a proper email address format (must contain `@` and `.`)
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Input</title>
</head>
<body>
    <form>
        <!-- email input for user email address -->
        <label for="useremail">Email Address:</label>
        <input type="email" id="useremail" name="useremail" placeholder="john@example.com" required>
    </form>
</body>
</html>

```

---

### Password Input


> * `type="password"`-> masks input characters with dots or asterisks for privacy so people nearby cannot see what is typed
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Input</title>
</head>
<body>
    <form>
        <!-- masked password input -->
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="password" required>
    </form>
</body>
</html>

```

---

### Number Input

> * `type="number"`-> restricts input to numerical values only and provides up/down arrows. `min` sets the lowest allowed number, and `max` sets the highest allowed number
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Input</title>
</head>
<body>
    <form>
        <!-- number input with minimum and maximum values -->
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="99">
    </form>
</body>
</html>

```

---

### Telephone Input

> * `type="tel"`-> input field optimized for telephone numbers
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telephone Input</title>
</head>
<body>
    <form>
        <!-- telephone number input -->
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890">
    </form>
</body>
</html>

```

---

### URL Input

> * `type="url"`-> requires the input to match a valid web link format (like `[https://www.example.com](https://www.example.com)`)
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Input</title>
</head>
<body>
    <form>
        <!-- website address input -->
        <label for="website">Portfolio URL:</label>
        <input type="url" id="website" name="website" placeholder="https://mywebsite.com">
    </form>
</body>
</html>

```

---

### Date Pickers

> * `type="date"`-> opens a built-in interactive calendar picker for selecting month, day, and year
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Picker</title>
</head>
<body>
    <form>
        <!-- interactive calendar date picker -->
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">
    </form>
</body>
</html>

```

---

### Color Pickers

> * `type="color"`-> opens a visual color wheel palette picker. the `value` attribute defines the default color in hexadecimal code
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Picker</title>
</head>
<body>
    <form>
        <!-- color wheel picker -->
        <label for="theme">Choose Theme Color:</label>
        <input type="color" id="theme" name="theme" value="#ff0000">
    </form>
</body>
</html>

```

---

### File Uploads

> * `type="file"`-> opens the user's operating system file browser to select documents or media files to upload. `accept` restricts which file extensions can be chosen (e.g., `.pdf`)
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <form>
        <!-- file upload browser input -->
        <label for="resume">Upload Resume (PDF only):</label>
        <input type="file" id="resume" name="resume" accept=".pdf">
    </form>
</body>
</html>

```

---

### Radio Buttons

> **selection input types :**
> * `type="radio"`-> lets users select only ONE option from a set. all radio buttons belonging to the same group MUST share the exact same `name` attribute value. `checked` sets the default selected radio button
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radio Buttons</title>
</head>
<body>
    <form>
        <!-- radio button group sharing same name="gender" -->
        <p>Select Gender:</p>
        <input type="radio" id="male" name="gender" value="male" checked>
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </form>
</body>
</html>

```

---

### Checkboxes

> * `type="checkbox"`-> creates a square box users can check or uncheck. multiple checkboxes can be selected at once
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkboxes</title>
</head>
<body>
    <form>
        <!-- independent checkboxes -->
        <p>Select Hobbies:</p>
        <input type="checkbox" id="coding" name="hobbies" value="coding">
        <label for="coding">Coding</label>

        <input type="checkbox" id="music" name="hobbies" value="music">
        <label for="music">Music</label>
    </form>
</body>
</html>

```

---

### Dropdowns (`<select>`)

> **drop-down and text elements:**
> * `<select>` tag-> creates a collapsible drop-down menu list. inside it, `<option>` tags define each selectable choice
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Menu</title>
</head>
<body>
    <form>
        <!-- drop down selection menu -->
        <label for="country">Select Country:</label>
        <select id="country" name="country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
        </select>
    </form>
</body>
</html>

```

---

### Textareas

> * `<textarea>` tag-> creates a multi-line resizable text area for longer inputs like reviews, comments, or bios. `rows` sets vertical height in lines and `cols` sets horizontal width in characters
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Textarea</title>
</head>
<body>
    <form>
        <!-- multi-line text field -->
        <label for="bio">Short Bio:</label><br>
        <textarea id="bio" name="bio" rows="4" cols="30" placeholder="Tell us about yourself..."></textarea>
    </form>
</body>
</html>

```

---

### Hidden Inputs

> **form buttons and hidden elements :**
> * `type="hidden"`-> creates an invisible input field that stores data users cannot see or edit (like user IDs or session tokens) that still gets sent along with the form submission
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hidden Input</title>
</head>
<body>
    <form action="/submit-form" method="POST">
        <!-- hidden field holding user ID -->
        <input type="hidden" name="userID" value="98765">
    </form>
</body>
</html>

```

---

### Form Buttons

> * `<button>` tag-> creates interactive buttons for the form:
> * `type="submit"` sends all form data to the URL defined in the form's `action` attribute
> * `type="reset"` wipes clean all filled inputs back to default empty state
> * `type="button"` standard clickable button that does not submit data, used for triggering JavaScript actions
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Buttons</title>
</head>
<body>
    <form action="/submit-form" method="POST">
        <!-- form action buttons -->
        <button type="submit">Submit Form</button>
        <button type="reset">Reset Fields</button>
        <button type="button" onclick="alert('Custom Action!')">Click Me</button>
    </form>
</body>
</html>

```

---

## 4. Semantic Structural Tags

> semantic tags-> layout tags that clearly describe their purpose to browsers, search engines, and screen readers instead of using non-semantic `<div>` tags for everything

---

### Header and Navigation (`<header>`, `<nav>`)

> **top layout tags :**
> * `<header>` tag-> represents the top banner of a webpage. contains page title, site logo, or top navigation bar
> * `<nav>` tag-> wraps main navigation link sections specifically meant for moving around the website
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header and Nav</title>
</head>
<body>
    <!-- top header section -->
    <header>
        <h1>Developer Knowledge Base</h1>

        <!-- top navigation links bar -->
        <nav>
            <a href="#home">Home</a> | 
            <a href="#docs">Documentation</a> | 
            <a href="#contact">Contact</a>
        </nav>
    </header>
</body>
</html>

```

---

### Main Container (`<main>`)

> **central container tag :**
> * `<main>` tag-> wraps the central, primary content of the page that is unique to that specific document
> 
> 
> **important rule:**
> * there should only be ONE `<main>` tag per HTML document, and it must not contain repetitive content like headers, footers, or global sidebars
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Container</title>
</head>
<body>
    <!-- central primary page content -->
    <main>
        <h2>Welcome to the Portal</h2>
        <p>This is the core content area unique to this specific page.</p>
    </main>
</body>
</html>

```

---

### Structuring Topics (`<section>`, `<article>`)

> **content grouping tags:**
> * `<section>` tag-> groups related content together into a distinct section or thematic chapter on the page
> * `<article>` tag-> represents a standalone, self-contained piece of content that could exist independently, like a blog post, news story, or review card
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sections and Articles</title>
</head>
<body>
    <main>
        <!-- thematic grouped section -->
        <section id="tutorials">
            <h2>Web Development Tutorials</h2>

            <!-- independent article card 1 -->
            <article>
                <h3>HTML Basics</h3>
                <p>Learn how to structure web pages using semantic tags.</p>
            </article>

            <!-- independent article card 2 -->
            <article>
                <h3>CSS Basics</h3>
                <p>Learn how to style HTML elements with colors and layouts.</p>
            </article>
        </section>
    </main>
</body>
</html>

```

---

### Sidebars and Footer (`<aside>`, `<footer>`)

> **secondary layout tags:**
> * `<aside>` tag-> holds secondary sidebar content like extra links, author info, related articles, or ads placed off to the side
> * `<footer>` tag-> represents the bottom footer section of your page or section. holds copyright info, terms of service, or contact links
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aside and Footer</title>
</head>
<body>
    <main>
        <!-- sidebar content area -->
        <aside>
            <h3>Quick Tip</h3>
            <p>Always save your HTML files with a .html extension!</p>
        </aside>
    </main>

    <!-- bottom footer section -->
    <footer>
        <p>&copy; 2026 Interactive Web Tutorial. All rights reserved.</p>
    </footer>
</body>
</html>

```

---

## 5. Media and Embedding Tags (`<video>`, `<audio>`, `<iframe>`)

### Video Tag (`<video>`)

> **media tags :**
> * `<video>` tag-> embeds a video player on your webpage
> * `controls` attribute-> adds video controls like play, pause, seek bar, and volume sliders
> * `poster` attribute-> defines a thumbnail image displayed before the user hits play
> * `<source>` tag-> placed inside `<video>` or `<audio>` tags to specify the media file location (`src`) and file format (`type="video/mp4"`)
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Tag</title>
</head>
<body>
    <!-- video player with thumbnail and controls -->
    <video width="320" height="240" controls poster="thumbnail.jpg">
        <source src="movie.mp4" type="video/mp4">
        Your browser does not support video element.
    </video>
</body>
</html>

```

---

### Audio Tag (`<audio>`)

> * `<audio>` tag-> embeds a sound player on your webpage. uses `controls` attribute to enable audio playback buttons
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Tag</title>
</head>
<body>
    <!-- audio player with playback controls -->
    <audio controls>
        <source src="music.mp3" type="audio/mpeg">
        Your browser does not support audio element.
    </audio>
</body>
</html>

```

---

### Iframe Tag (`<iframe>`)

> * `<iframe>` tag (inline frame)-> embeds an entire external webpage, interactive map, or youtube video directly inside a frame on your webpage
> * `src` attribute-> holds the link to the embedded website
> * `width` and `height` attributes-> control iframe box size
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iframe Tag</title>
</head>
<body>
    <!-- embedded website frame -->
    <iframe src="https://www.wikipedia.org" width="100%" height="250" title="Wikipedia Frame"></iframe>
</body>
</html>

```

---

## 6. Formatting and Lists (`<ul>`, `<ol>`)

### Unordered Lists (`<ul>`)

> **list tags :**
> * `<ul>` tag (unordered list)-> creates a bulleted list of items where order does not matter
> * `<li>` tag (list item)-> placed inside `<ul>` or `<ol>` tags to represent each individual item on the list
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unordered List</title>
</head>
<body>
    <!-- bullet point list -->
    <h3>Frontend Stack (Unordered List)</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</body>
</html>

```

---

### Ordered Lists (`<ol>`)

> * `<ol>` tag (ordered list)-> creates a numbered list (1, 2, 3...) where order matters
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordered List</title>
</head>
<body>
    <!-- numbered step list -->
    <h3>Steps to Run Page (Ordered List)</h3>
    <ol>
        <li>Create index.html</li>
        <li>Write HTML markup</li>
        <li>Open in Web Browser</li>
    </ol>
</body>
</html>

```

---

### Code Text Formatting (`<code>`)

> **code text formatting tags :**
> * `<code>` tag-> formats text using a monospaced code font so HTML tags and code snippets stand out from regular paragraph text
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Formatting</title>
</head>
<body>
    <!-- Code text formatting -->
    <p>
        <code>cout&lt;&lt;"Hello world";</code> for hyperlinks.
    </p>
</body>
</html>

```