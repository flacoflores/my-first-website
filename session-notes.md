# Session Notes - Learning Web Development

## What I Built
A multi-page website with dark/light theme toggle, navigation bar, footer, images, cards, responsive design, and dynamic content loaded from an API.

## Files in the Project
- `index.html` - Home page with hero section, cards, goals grid, quote section, and interactive buttons
- `about.html` - About page with personal sections
- `style.css` - Shared stylesheet used by both pages
- `script.js` - Shared JavaScript: theme toggle, click counter, dynamic goals, fetch API
- `learning-plan.md` - Roadmap for becoming a web developer

## Concepts Covered

### HTML Basics
- Page structure: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Headings: `<h1>`, `<h2>`, `<h3>`
- Paragraphs: `<p>`
- Images: `<img src="..." alt="...">`
- Links: `<a href="...">`
- Lists: `<ul>` (unordered), `<ol>` (ordered), `<li>` (list items)
- Buttons: `<button onclick="...">`
- Semantic elements: `<nav>`, `<footer>`
- HTML entities: `&copy;` renders as ©
- Multi-page sites: linking between `index.html` and `about.html`

### CSS Basics
- Inline styles vs `<style>` block vs external `.css` file
- Colors: hex codes like `#3498db`, `#ffffff`, `#000000`
- Fonts: `font-family`, `font-size`
- Spacing: `margin`, `padding`, `gap`
- Backgrounds: `background-color`
- Borders: `border-radius` for rounded corners
- `text-decoration: none` to remove link underlines
- Pseudo-elements: `::before` for custom list markers, `::marker` for list number styling
- Shared CSS: using `<link rel="stylesheet" href="style.css">` so multiple pages share one stylesheet

### CSS Positioning
- `position: static` - default, scrolls with the page
- `position: fixed` - stays in place when scrolling (used for nav bar)
- `top`, `left`, `width` to position fixed elements

### CSS Flexbox
- `display: flex` - makes children line up in a row
- `flex-wrap: wrap` - children wrap to next line when they don't fit
- `gap` - spacing between flex items
- `align-items: center` - vertical alignment
- `flex: 1 1 150px` - grow, shrink, and minimum size (responsive without media queries)
- `calc()` for calculating widths: `calc(50% - 6px)` for 2 per row, `calc(33.33% - 8px)` for 3 per row
- The gap math: total gaps = (number of items - 1) * gap size, divided equally among all items

### CSS Grid
- `display: grid` - defines a grid container
- `grid-template-columns: repeat(3, 1fr)` - 3 equal columns
- `1fr 2fr` - unequal columns (1/3 and 2/3)
- `fr` unit = fraction of available space
- **Flexbox vs Grid**: flexbox is 1D (row or column), grid is 2D (rows and columns)

### Responsive Design
- `<meta name="viewport">` in HTML head
- Media queries: `@media (max-width: 768px) { ... }`
- Common breakpoints: 768px (tablet), 480px (phone)
- Adjusting font sizes, padding, and grid columns at different screen sizes
- Testing: Chrome DevTools device simulator (Cmd + Option + I, then Cmd + Shift + M)

### JavaScript Basics
- `<script>` tag for inline JS, `<script src="script.js">` for external JS file
- `document.getElementById()` to select an element
- `.textContent` to change text
- `document.createElement()` to create new HTML elements
- `.className` to set CSS classes on elements
- `.appendChild()` to add elements to the page
- `classList.toggle()`, `classList.contains()` to add/remove/check CSS classes

### Variables & State
- `var count = 0` to track state between interactions
- Variables defined outside event listeners persist between calls

### Event Listeners
- `element.addEventListener('click', function)` - the proper way to handle events
- Keeps JavaScript separate from HTML (better than `onclick=""` in HTML)
- Can pass a named function: `addEventListener('click', getQuote)` (no parentheses)

### Arrays & Loops
- `var goals = ['...', '...']` - arrays store lists of values
- `goals.length` - how many items in the array
- `for (var i = 0; i < goals.length; i++)` - loop through each item
- Arrays start at index 0

### Conditionals
- `if / else if / else` for branching logic
- `===` for strict equality comparison

### Fetch API
- `fetch(url)` - makes an HTTP request to load data
- Returns a Promise (a value that arrives in the future)
- `.then(function (response) { return response.json(); })` - parse the response
- Chain `.then()` calls to process data step by step
- `.catch()` to handle errors (no internet, API down, etc.)
- Asynchronous - doesn't block the page while waiting

### Git & GitHub
- `git init` - start a repo
- `git add` - stage files
- `git commit -m "message"` - save a snapshot
- `git push` - upload to GitHub
- `gh repo create` - create a GitHub repo from the command line
- `gh` CLI requires `brew install gh` and `gh auth login`

### Tools
- `npx live-server` - serves your site locally with auto-reload on save
- Chrome DevTools - for debugging and testing responsive design
