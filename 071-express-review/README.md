# Lab Review
- Goal: get more practice building out CRUD and RESTful applications

## Deploy App
- Heroku is another git remote
- Deploying to Heroku
    * `const PORT = process.env.PORT || 3000`
    * You need to have an npm `start` script of `node <file.js>`
    * Your Heroku server will definitely have node installed, but maybe not nodemon

## Review basic structure 
- Express
- EJS and Styling
- [Restful Routes](https://medium.com/@shubhangirajagrawal/the-7-restful-routes-a8e84201f206)

## Read
- `app.get()`
- RESTful routes
  * GET /blogs        => index page
  * GET /blogs/:id    => show page

## Create
- `app.post()`  
- RESTful routes
  * GET  /blogs/new   => form to create
  * POST /blogs       => create a blog

## Forms
- In HTML5, forms can only have one of two methods: get and post
- `npm install method-override`

## Update (update the content of our task; make it as complete)
- `app.patch()`
- `app.put()`
- RESTful routes
  * GET   /blogs/:id/edit   => form to edit
  * PUT   /blogs/:id        => replace the blog
  * PATCH /blogs/:id        => update part of the blog

## Delete
- `app.delete()`
- RESTful routes
  * DELETE /blogs/:id   => delete a blog