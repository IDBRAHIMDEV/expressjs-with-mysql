const express = require('express')
const { getAllCourses, saveCourse, oneCourse, putCourse, patchCourse, deleteCourse } = require('../controllers/courses.controller')

const router = express.Router()

let myCourses = [
    {
        id: 1,
        title: "Learn Nodejs"
    },
    {
        id: 2,
        title: "Learn Angular"
    },
]

router.get('/courses', getAllCourses)

router.post('/courses', saveCourse)

router.get('/courses/:id', oneCourse)

router.put('/courses/:id', putCourse)

router.patch('/courses/:id', patchCourse)

router.delete('/courses/:id', deleteCourse)

module.exports = router