const express = require('express')
const { getAllArticles, saveArticle, oneArticle, putArticle, patchArticle, deleteArticle } = require('../controllers/articles.controller')

const router = express.Router()


router.get('/articles', getAllArticles)

router.post('/articles', saveArticle)

router.get('/articles/:id', oneArticle)

router.put('/articles/:id', putArticle)

router.patch('/articles/:id', patchArticle)

router.delete('/articles/:id', deleteArticle)

module.exports = router