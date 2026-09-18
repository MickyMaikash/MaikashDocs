# Html Tags For Building Interactive Web Pages

> this section includes the html tags that you must know to make your web page interactive eg `<a>`

## Anchor Tag
> `<a>` tag-> it is used to go from one page to another or opening a differnent sites basically used for links
>
> to use this tag we have to pass an attribute href which equal to the link where we want to go example if your file is index.html and you have one more file name about.html then in index.html you can use anchor tag in it's attribute href we can pass the path of this about page when you click on that button you will navigate to about page that simple
> 
>href=> hyper refrence
>
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
> To opening a links or page into other tab we use one more attribute in anchor tag which is `targe="_blank"`
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
    <br>
    
</body>
</html>
```
> now when we click on Go To google button it will open a new tab which opens a google.com

## using anchor tag for email links and also to give download link 
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

## Images in Html
> how to use image in webpages 
- img tag-> to insert image and inside img tag we need to pass source src like path of image or links and one alternative text alt like when image is not avaiable or not laoded properly to show on the place of image 
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
- i added the path of image i have like for favicon



## Form In Html (`<form>` & Inputs)

> `<form>` tag-> creates a form section to collect data from users (like login screens, signup pages, or search bars)
> 
> 

### Part 1: Form Basics and Text Inputs

> **form attributes explained:**
> * `action` attribute-> specifies the URL or backend file where the form data should be sent after submission
> 
> 
> * `method` attribute-> specifies how data is sent:
> 
> 
> * `GET` attaches form data directly into the URL bar (used for simple site searches)
> 
> 
> * `POST` sends data hidden in the background request (used for passwords, logins, and sensitive data)
> 
> 
> 
> 
> 
> 
> **form elements explained:**
> * `<label>` tag-> provides a readable label for an input box. the `for` attribute on the label must match the `id` attribute on the input box. clicking the label text focuses the cursor inside the input box automatically
> 
> 
> * `<input>` tag-> accepts user input. its behavior changes based on the `type` attribute:
> 
> 
> * `type="text"`-> single line input field for text like names
> 
> 
> * `type="email"`-> validates that the user typed a proper email address format (must contain `@` and `.`)
> 
> 
> * `placeholder` attribute-> displays light grey hint text inside the box before the user types
> 
> 
> * `required` attribute-> prevents form submission if the user leaves the input empty
> 
> 
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Form Inputs</title>
</head>
<body>
    <h1>User Registration</h1>

    <form action="/submit-data" method="POST">
        <!-- text input for full name -->
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" placeholder="John Doe" required>
        <br><br>

        <!-- email input for user email address -->
        <label for="useremail">Email Address:</label>
        <input type="email" id="useremail" name="useremail" placeholder="john@example.com" required>
    </form>
</body>
</html>

```

---

### Part 2: Passwords, Numbers, and Specialized Text Inputs

> **specialized input types explained:**
> * `type="password"`-> masks input characters with dots or asterisks for privacy so people nearby cannot see what is typed
> 
> 
> * `type="number"`-> restricts input to numerical values only and provides up/down arrows. `min` sets the lowest allowed number, and `max` sets the highest allowed number
> 
> 
> * `type="tel"`-> input field optimized for telephone numbers
> 
> 
> * `type="url"`-> requires the input to match a valid web link format (like `[https://www.example.com](https://www.example.com)`)
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specialized Form Inputs</title>
</head>
<body>
    <form>
        <!-- masked password input -->
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="password" required>
        <br><br>

        <!-- number input with minimum and maximum values -->
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="99">
        <br><br>

        <!-- telephone number input -->
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890">
        <br><br>

        <!-- website address input -->
        <label for="website">Portfolio URL:</label>
        <input type="url" id="website" name="website" placeholder="https://mywebsite.com">
    </form>
</body>
</html>

```

---

### Part 3: Date Pickers, Color Pickers, and File Uploads

> **special browser pickers explained:**
> * `type="date"`-> opens a built-in interactive calendar picker for selecting month, day, and year
> 
> 
> * `type="color"`-> opens a visual color wheel palette picker. the `value` attribute defines the default color in hexadecimal code
> 
> 
> * `type="file"`-> opens the user's operating system file browser to select documents or media files to upload. `accept` restricts which file extensions can be chosen (e.g., `.pdf`)
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pickers and Uploads</title>
</head>
<body>
    <form>
        <!-- interactive calendar date picker -->
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">
        <br><br>

        <!-- color wheel picker -->
        <label for="theme">Choose Theme Color:</label>
        <input type="color" id="theme" name="theme" value="#ff0000">
        <br><br>

        <!-- file upload browser input -->
        <label for="resume">Upload Resume (PDF only):</label>
        <input type="file" id="resume" name="resume" accept=".pdf">
    </form>
</body>
</html>

```

---

### Part 4: Radios, Checkboxes, Dropdowns, and Textareas

> **selection input types explained:**
> * `type="radio"`-> lets users select only ONE option from a set. all radio buttons belonging to the same group MUST share the exact same `name` attribute value. `checked` sets the default selected radio button
> 
> 
> * `type="checkbox"`-> creates a square box users can check or uncheck. multiple checkboxes can be selected at once
> 
> 
> 
> 
> **drop-down and text elements:**
> * `<select>` tag-> creates a collapsible drop-down menu list. inside it, `<option>` tags define each selectable choice
> 
> 
> * `<textarea>` tag-> creates a multi-line resizable text area for longer inputs like reviews, comments, or bios. `rows` sets vertical height in lines and `cols` sets horizontal width in characters
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selection Inputs</title>
</head>
<body>
    <form>
        <!-- radio button group sharing same name="gender" -->
        <p>Select Gender:</p>
        <input type="radio" id="male" name="gender" value="male" checked>
        <label for="male">Male</label>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br><br>

        <!-- independent checkboxes -->
        <p>Select Hobbies:</p>
        <input type="checkbox" id="coding" name="hobbies" value="coding">
        <label for="coding">Coding</label>

        <input type="checkbox" id="music" name="hobbies" value="music">
        <label for="music">Music</label>
        <br><br>

        <!-- drop down selection menu -->
        <label for="country">Select Country:</label>
        <select id="country" name="country">
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="in">India</option>
        </select>
        <br><br>

        <!-- multi-line text field -->
        <label for="bio">Short Bio:</label><br>
        <textarea id="bio" name="bio" rows="4" cols="30" placeholder="Tell us about yourself..."></textarea>
    </form>
</body>
</html>

```

---

### Part 5: Form Buttons and Hidden Inputs

> **form buttons and hidden elements explained:**
> * `<button>` tag-> creates interactive buttons for the form:
> 
> 
> * `type="submit"` sends all form data to the URL defined in the form's `action` attribute
> 
> 
> * `type="reset"` wipes clean all filled inputs back to default empty state
> 
> 
> * `type="button"` standard clickable button that does not submit data, used for triggering JavaScript actions
> 
> 
> 
> 
> * `type="hidden"`-> creates an invisible input field that stores data users cannot see or edit (like user IDs or session tokens) that still gets sent along with the form submission
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Buttons and Hidden Data</title>
</head>
<body>
    <form action="/submit-form" method="POST">
        <!-- hidden field holding user ID -->
        <input type="hidden" name="userID" value="98765">

        <label for="search">Search Query:</label>
        <input type="text" id="search" name="search">
        <br><br>

        <!-- form action buttons -->
        <button type="submit">Submit Form</button>
        <button type="reset">Reset Fields</button>
        <button type="button" onclick="alert('Custom Action!')">Click Me</button>
    </form>
</body>
</html>

```

---

## 2. Semantic Structural Tags

> semantic tags-> layout tags that clearly describe their purpose to browsers, search engines, and screen readers instead of using non-semantic `<div>` tags for everything
> 
> 

### Part A: Header and Navigation (`<header>`, `<nav>`)

> **top layout tags explained:**
> * `<header>` tag-> represents the top banner of a webpage. contains page title, site logo, or top navigation bar
> 
> 
> * `<nav>` tag-> wraps main navigation link sections specifically meant for moving around the website
> 
> 
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

### Part B: Main Container (`<main>`)

> **central container tag explained:**
> * `<main>` tag-> wraps the central, primary content of the page that is unique to that specific document
> 
> 
> 
> 
> **important rule:**
> * there should only be ONE `<main>` tag per HTML document, and it must not contain repetitive content like headers, footers, or global sidebars
> 
> 
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

### Part C: Structuring Topics (`<section>`, `<article>`)

> **content grouping tags explained:**
> * `<section>` tag-> groups related content together into a distinct section or thematic chapter on the page
> 
> 
> * `<article>` tag-> represents a standalone, self-contained piece of content that could exist independently, like a blog post, news story, or review card
> 
> 
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

### Part D: Sidebars and Footer (`<aside>`, `<footer>`)

> **secondary layout tags explained:**
> * `<aside>` tag-> holds secondary sidebar content like extra links, author info, related articles, or ads placed off to the side
> 
> 
> * `<footer>` tag-> represents the bottom footer section of your page or section. holds copyright info, terms of service, or contact links
> 
> 
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

## Media and Embedding Tags (`<video>`, `<audio>`, `<iframe>`)

> **media tags explained:**
> * `<video>` tag-> embeds a video player on your webpage
> 
> 
> * `controls` attribute-> adds video controls like play, pause, seek bar, and volume sliders
> 
> 
> * `poster` attribute-> defines a thumbnail image displayed before the user hits play
> 
> 
> * `<source>` tag-> placed inside `<video>` or `<audio>` tags to specify the media file location (`src`) and file format (`type="video/mp4"`)
> 
> 
> 
> 
> * `<audio>` tag-> embeds a sound player on your webpage. uses `controls` attribute to enable audio playback buttons
> 
> 
> * `<iframe>` tag (inline frame)-> embeds an entire external webpage, interactive map, or youtube video directly inside a frame on your webpage
> 
> 
> * `src` attribute-> holds the link to the embedded website
> 
> 
> * `width` and `height` attributes-> control iframe box size
> 
> 
> 
> 
> 
> 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Tags</title>
</head>
<body>
    <h1>Media Player Examples</h1>

    <!-- video player with thumbnail and controls -->
    <video width="320" height="240" controls poster="thumbnail.jpg">
        <source src="movie.mp4" type="video/mp4">
        Your browser does not support video element.
    </video>
    <br><br>

    <!-- audio player with playback controls -->
    <audio controls>
        <source src="music.mp3" type="audio/mpeg">
        Your browser does not support audio element.
    </audio>
    <br><br>

    <!-- embedded website frame -->
    <iframe src="https://www.wikipedia.org" width="100%" height="250" title="Wikipedia Frame"></iframe>
</body>
</html>

```

---

## Formatting and Lists (`<ul>`, `<ol>`)

> **list tags explained:**
> * `<ul>` tag (unordered list)-> creates a bulleted list of items where order does not matter
> 
> 
> * `<ol>` tag (ordered list)-> creates a numbered list (1, 2, 3...) where order matters
> 
> 
> * `<li>` tag (list item)-> placed inside `<ul>` or `<ol>` tags to represent each individual item on the list
> 
> 
> 
> 
> **code text formatting tags explained:**
> * `<code>` tag-> formats text using a monospaced code font so HTML tags and code snippets stand out from regular paragraph text
> 
> 
> 
> 



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lists and Formatting</title>
</head>
<body>
    <h1>Formatting and Lists</h1>

    <!-- bullet point list -->
    <h3>Frontend Stack (Unordered List)</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <!-- numbered step list -->
    <h3>Steps to Run Page (Ordered List)</h3>
    <ol>
        <li>Create index.html</li>
        <li>Write HTML markup</li>
        <li>Open in Web Browser</li>
    </ol>

    <!-- Code text formatting -->
    <p>
        <code>cout<<""Hello world";</code> for hyperlinks.
    </p>
</body>
</html>

```
































