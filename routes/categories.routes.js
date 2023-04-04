const express = require('express')
const { getAllCategories, saveCategory, oneCategory, putCategory, patchCategory, deleteCategory } = require('../controllers/categories.controller')

const router = express.Router()

router.get('/categories', getAllCategories)

router.post('/categories', saveCategory)

router.get('/categories/:id', oneCategory)

router.put('/categories/:id', putCategory)

router.patch('/categories/:id', patchCategory)

router.delete('/categories/:id', deleteCategory)

module.exports = router