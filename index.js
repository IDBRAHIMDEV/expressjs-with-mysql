const express = require('express')
var morgan = require('morgan')
const courseRoutes = require('./routes/courses.routes')
const articlesRoutes = require('./routes/articles.routes')
const categoriesRoutes = require('./routes/categories.routes')

const app = express();


app.use(express.json());

app.use(courseRoutes)
app.use(articlesRoutes)
app.use(categoriesRoutes)

app.get('/', (req, res) => res.send("welcome to my home page"))

app.use(morgan('tiny'))



app.listen(4000, () => {
    console.log("The serve is running")
})

