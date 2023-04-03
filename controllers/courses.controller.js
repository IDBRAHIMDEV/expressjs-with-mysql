
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


const getAllCourses = (req, res) => res.send(myCourses)

const saveCourse = (req, res) => res.send({
    message: "Course is saved",
    course: {
        id: 3,
        title: "learn Vue 3"
    }
})

const oneCourse = (req, res) => res.send({
    message: "retreive one Course",
    course: {
        id: 3,
        title: "learn Vue 3"
    }
})

const putCourse = (req, res) => res.send({
    message: "Course is updated",
    course: {
        id: 3,
        title: "learn Vue 3"
    }
})

const patchCourse = (req, res) => res.send({
    message: "Course is updated (partial)",
    course: {
        id: 3,
        title: "learn Vue 3"
    }
})

const deleteCourse = (req, res) => res.send({
    message: "Course is deleted",
    course: {}
})

exports.getAllCourses = getAllCourses
exports.oneCourse = oneCourse
exports.putCourse = putCourse
exports.saveCourse =saveCourse
exports.patchCourse =patchCourse
exports.deleteCourse =deleteCourse