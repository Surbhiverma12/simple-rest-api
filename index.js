const express = require("express")
const app = express()
const port = 8080;

app.listen(port, () => {
    console.log(`server is running on post: ${port}`)
})

app.get("/", (req, res) => {
    res.send("This is the root route of our server")
})