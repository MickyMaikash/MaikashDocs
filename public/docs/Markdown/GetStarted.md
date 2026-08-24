# Markdown Cheatsheet

## 1. Headings
- for writing heading we use **#** at start and space and then content 
- more no of **#** less the size of heading/content 

**Write:**

`# Main Heading`

**Result:**

# Main Heading

**try this :**
```markdown
## subheading
```
**Result:**
## subheading


**try this also :**
```markdown
### subtext
```
**Result:**
### subtext

---

## 2. Bold
- for Making any text Bold we use `**` at start and end of that text

**Write:**

`**Bold Text**`

**Result:**

**Bold Text**

---

## 3. Italic
- for Making any text Italic we use *(single) at start and end of that text

**Write:**

```markdown
*Italic Text*
```

**Result:**

*Italic Text*

---

## 4. Bold & Italic
- for writing text in bold and italic  then we use `***` at start and end of the text

**Write:**
```md
***This is bold and italic***
```
**Result:**

***This is bold and italic***

---

## 5.Paragraphs and line breaks
- for paragraph Simply write normal text:
- The blank line creates a new paragraph.

*write this lines:*
```md
This is my first paragraph.

This is my second paragraph.
```
*Results:*

This is my first paragraph.

This is my second paragraph.


- for line break we can also use `<br>` just like below

**write this:**
```md
First Paragraph<br> second paragraph
```
**Result:**

First Paragraph <br>
second paragraph

---

## 6. Lists

### Unorder List
- Use `-` , `*` , or `+` and then space and then content

*write: use for (-)*
```md
- Html 
- css
- Js
+ Python
* Java
* Kotlin
```
**Result:**

- Html 
- css
- Js
+ Python
* Java
* Kotlin

### Nested list
*write:*
```markdown
- Frontend
  - HTML
  - CSS
  - JavaScript
- Backend
  - Python
  - Django
```
*Result:*
- Frontend
  - HTML
  - CSS
  - JavaScript
- Backend
  - Python
  - Django

### NumberedList(Order LIst)
**write**
```markdown
1. Html 
2. Css
3. Js
4. Python
5. Kotlin
```
**result:**
1. Html 
2. Css
3. Js
4. Python
5. Kotlin

---

## 7. Links 🔗
> for links we first write title inside [] and then in () this we write link

**example:**
```md
[Google](https://www.google.com)
```
*result:*

[Google](https://www.google.com)

---

## 8. Images 🖼️
> for image we write image tille inside `![ ]` and in small bracket() we write it's location and all maybe it could be url and also static file location

- here i used my image url you should use yours 

**Example:**
```md
![Hero Image](./../../../src/assets/hero.png)
```
**Result:**
![Hero Image](./../../../src/assets/hero.png)

---

## 9. Use Image as links
> by making image clickable and link attached to it 

*Example:*
- for this we wrote link md syntax and inside that [] we wrote image link that make image clickable
```md
[![TitleImage](./../../../src/assets/react.svg)](https://www.google.com)
```
**Result:**

[![TitleImage](./../../../src/assets/react.svg)](https://www.google.com)

---

## 10. Code blocks
- use **three BackTics** and just after write the name of language  for s yntax higligiting 

*Example:*
````md
```python
 
x=10
y=10
print(x+y)
```
````
*Result:*
```python
 
x = 10
y = 10
print(x+y)
```
