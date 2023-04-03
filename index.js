const express = require('express')
var morgan = require('morgan')
const courseRoutes = require('./routes/courses.routes')

const app = express();


app.use(express.json());

app.use(courseRoutes)

morgan('tiny')

app.get('/', (req, res) => res.send("welcome to my home page"))



app.listen(4000, () => {
    console.log("The serve is running")
})

