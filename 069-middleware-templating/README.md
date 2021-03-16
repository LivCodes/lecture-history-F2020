# Middleware and HTML Templating

## What is Middleware?

## Examples of Middleware

## HTML Templating
- `npm install ejs`

### Embedded JavaScript (ES6)
- `app.set('view engine', 'ejs')`
- create a folder called "views" and create files with a `.ejs` extention 
- `res.render('index', {time: currentTime})`

### Buildling Reddit
- Put as much logic as possible in your server code
- Pput as little logic as possible in your templates

### Tags
- Output tags `<%=`
- Control Flow tags (no output) `<%`

### Conditional
- Rendering
- Styling `<h1 style="color: purple">`

### Stylesheets and static files
- What if we create a `style.css` and link it in our ejs file? 
- We need to create a `public` folder for our static files
- `app.use(express.static("public"))`

### Layouts (Partials)
- Layout tags `<%-`
- headers
- footers
- any part of your layout that is repeated across pages

