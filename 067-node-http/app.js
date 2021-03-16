const http = require("http")
const url = require("url")

const app = http.createServer(handleRequest)

const PORT = 8080

function handleRequest(request, response){

  function render(statusCode, content){
    response.writeHead(statusCode)
    response.write(content)
  }

  //parse the URL, check what is the path
  //either write "home page" or write "about page"
  
  //use request.url "/" or "/about"
  console.log(request.url)
  if(request.url === "/"){
    render(200, "<h1>Home Page</h1>")
  } else if(request.url === "/about"){
    render(200, '<h1>Welcome to the About page</h1>')
  } else if(request.url === "/picture"){
    render(200, '<div><img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/></div>')
  } else {
    render(404, "Not Found")
  }

  response.end()
}
/*
If the path is / => home page
If the path is /about => about page
*/

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})