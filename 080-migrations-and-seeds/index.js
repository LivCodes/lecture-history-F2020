const express = require("express")
const appController = require("./controllers/appController")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get("/users", appController.getUsers)

app.get("/users/:id", appController.getUser)

app.get("/pets", appController.getPets)

app.get("/pets/:id", appController.getPet)

app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`)})