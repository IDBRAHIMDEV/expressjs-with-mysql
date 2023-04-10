const express = require('express')
var morgan = require('morgan')
const courseRoutes = require('./routes/courses.routes')
const articlesRoutes = require('./routes/articles.routes')
const categoriesRoutes = require('./routes/categories.routes')

const app = express();


app.use(express.json());

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'templates')

app.use(courseRoutes)
app.use(articlesRoutes)
app.use(categoriesRoutes)

let title = "New formaion About MEAN Stack";

app.get('/', (req, res) => res.render("home.pug", {
    myTitle: title
}))

app.use(morgan('tiny'))



app.listen(4000, () => {
    console.log("The serve is running")
})

