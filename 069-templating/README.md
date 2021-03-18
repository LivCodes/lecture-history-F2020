# HTML Templating
- Templates allows us to render dynamic content in an otherwise static view
- `npm install ejs`

### Embedded JavaScript (ES6)
- `app.set('view engine', 'ejs')`
- create a folder called "views" and create files with a `.ejs` extention 
- `res.render('index', {time: currentTime})`

### Building Reddit
- Put as much logic as possible in your server code
- Put as little logic as possible in your templates

## Redirects
- `res.redirect(301, "/")`

## 404 Pages
```js
app.get("*", (req, res) => {
  res.status(404)
  res.send("Not Found")
})
```

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
- We can server other static files like images and JavaScript files.

### Layouts (Partials)
- Layout tags `<%-`
- headers
- footers
- any part of your layout that is repeated across pages

