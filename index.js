const express = require('express');
const courseRoutes = require('./routes/courses.routes')

const app = express();

app.use(courseRoutes)

app.get('/', (req, res) => res.send("welcome to my home page"))



app.listen(4000, () => {
    console.log("The serve is running")
})

