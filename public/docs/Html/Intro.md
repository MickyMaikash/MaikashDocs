# HTML
> Hyper Text Markup Link
- hyper text means the text that is clickable
- markup we can write things with help of special text characters like h1 h2 div p button 

- it is a foundation of any website
- it is not a programming language
- it helps to develop the structure of any website means what is going to be on the page like buttons heading forms and all
- it is not for design
- it is always evolving now current Html5 is used as modern version of it
- it is the skelton of the Web
- it has important role in Seo
- it runs in every browser

## Basic Structure(TAGs) of Html
- Html tag  (<html> </html>) -> here we put language name such as lang="en"
- Head tag  (<head> </head>) -> here we include metadata such as css links and title of page basically the information about the page
- Body tag  (<body> </body>) -> inside it we write our main whole structure of our site 

> `<!DOCTYPE html>` tells browser like this file is html and you have to render it on basis of modern rules not like earlier 1999 quirk 


```hmtl
<!DOCTYPE html>
<html lang='en'>
<head>
<meta charset="UTF-8">
<title>Basic Html</title>
</head>
<body>
<h1>Basic Structure of Html</h1>
</body>
</html>
```

## Tags of HTML
### Headings Tags 
> Html provides 6 heading tags
- H1 - Main Heading 
- H2 - Sub Heading
- H3 - smaller than subheading eg subtopic
- H4 - smaller than smaller sub heading
- H5 - tiny heading
- H6 - smallest heading

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Heading in Html</title>
    <meta charset="UTF-8">
</head>
<body>

    <h1>My Blog</h1>
    <h2>About me</h2>
    <h3>MY hobbies</h3>
    <h4>Drawing</h4>
    <h5>Gaming</h5>
    <h6>Pencil Drawing</h6>

</body>

<html>

```
> Always try to use only one h1 tag 

### Paragraph Tag
> p tag -> only generally use for writing content/Description or paragraph e.g
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Heading in Html</title>
    <meta charset="UTF-8">
</head>
<body>

    <h1>My Blog</h1>
    <h2>About me</h2>
    <h3>MY hobbies</h3>
    <h4>Drawing</h4>
    <h5>Gaming</h5>
    <h6>Pencil Drawing</h6>
    <p>Other Simple Hobiies ARe listed above</p>

</body>

<html>
```

### Line Break and Separators
- `<br>` tag -> it is used to create a new line i mean like when we want to write things in second line in the same tag without using extra tag or like we use this
- `<hr>` tag it is just used to create a line between things like a separator which separate above and below content
```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Heading in Html</title>
    <meta charset="UTF-8">
</head>
<body>

<p>Hello Bro I am micky <br> i am happy to tell you about hmtl <br> about it's basic structure tags and all</p>
<hr>
<p>Thanks For Reading this Documents <br> Hope this document helps you in learning html</p>
</body>

<html>

```

### Text Formatting
- b tag->use to make text Bold
- i tag -> use to make text italic
- u tag -> use to make text underline
- strong tag-> it is similar to bold but it tells the browser that thing inside this tag is important
- em tag-> it is similar to italic but it tells screen reader/browser to strech the word
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p>This is <b>Bold</b> Text</p>
   <p>This is <i>Italic</i> Text</p>
   <p>This is <u>underlined</u> Text</p>
   <p>Warning ! <strong>Don't Touch This Button</strong></p>
   <p>this is <em>very very</em> importnat</p>
</body>
</html>

```

### Comments in Html
> this is when used when we want to write things for understanding, explaination
>
> the browser /compiler ignores the things written in comment
>
> it is better for code understanding for people/coders
- to comment a line or something in html 
press Cntrl+/ 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- This is a Comment  -->
   <p>This is <b>Bold</b> Text</p>
   <p>This is <i>Italic</i> Text</p>
   <p>This is <u>underlined</u> Text</p>
   <p>Warning ! <strong>Don't Touch This Button</strong></p>
   <p>this is <em>very very</em> importnat</p>
</body>
</html>
```
---
# 🧠 Practice
> Write a about me page with the following tags you learnt from this page
