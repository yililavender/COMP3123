const express = require("express")
const app = express()
// const SERVER_PORT = "8081"
const SERVER_PORT = process.env.PORT || 8081
let user ={
     "first_name":"Pritesh",
     "last_name": "Patel"
}

// http://localhost:8081/hello

app.get("/hello", (req,res)=>{
    res.send("<h1>Hello, Express JS</h1>")
})

// http://localhost:8081/user?firstName=Pritesh&lastName=Patel

app.get("/user", (req,res) => {
    const first_name = req.query.firstName
    const last_name = req.query.lastName
    res.send({
        first_name,
        last_name
    })
})

// http://localhost:8081/user/Pritesh/Patel

app.post("/user/:fname/:lname", (req,res) => {
    const first_name = req.params.fname
    const last_name = req.params.lname
    res.send({
        first_name,
        last_name
    })
})


const server = app.listen(SERVER_PORT, ()=>{console.log(`The App is listening at http://localhost:${SERVER_PORT}`)})