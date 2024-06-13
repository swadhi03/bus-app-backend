const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./models/user")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://swathi:swathi2609@cluster0.em0miqo.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup", (req, res) => {
    let input = req.body
    let user = new usermodel(input)
    user.save()
    console.log(user)
    res.json({ "status": "success" })
})

app.post("/signin", (req, res) => {
    let input = req.body
    let user = new usermodel(input)
    user.save()
    console.log(user)
    res.json({ "status": "success" })
})



app.listen(8080, () => {
    console.log("server started")
}
)