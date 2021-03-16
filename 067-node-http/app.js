const http = require("http")
const url = require("url")
const fs = require("fs")

const app = http.createServer(handleRequest)

const PORT = 8080

function handleRequest(request, response){

  function render(statusCode, content){
    response.writeHead(statusCode)
    response.write(content)
    response.end()
  }

  function renderHTML(path, queryObj = {}){
    console.log(queryObj)
    fs.readFile(path, 'utf8', (err, data) => {
      if(!err){
        //in data, replace {{firstName}} with queryObj.firstName
        Object.keys(queryObj).forEach(queryParam => {
          data = data.replace(`{{${queryParam}}}`, queryObj[queryParam])
        })
        render(200, data)
      } else {
        console.log("error reading file")
      }
    })
  }

  //first, can we isolate the query params?
  //can we take the data and put it in the HTML?
  //can be use readFile in any other way?
  
  let URL = url.parse(request.url)
  if(URL.pathname === "/"){
    renderHTML("./templates/home.html")
  } else if(URL.pathname === "/about"){
    let queryObj = url.parse(request.url, true).query
    renderHTML("./templates/about.html", queryObj)
  } else if(URL.pathname === "/greet"){
    let queryObj = url.parse(request.url, true).query
    renderHTML("./templates/greet.html", queryObj)
  } else {
    render(404, "Not Found")
  }
}

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})