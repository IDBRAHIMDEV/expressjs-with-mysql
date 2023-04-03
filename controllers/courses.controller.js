const connection = require('../config/db')


const getAllCourses = async (req, res) => {
     // simple query

     try {
        
         const [result] = await connection.query('SELECT * FROM courses');
         res.status(200).json(result)

     } catch (error) {
        res.status(500).json({
            message: "server is down!"
        })
     }

}

const saveCourse = async (req, res) => {
    
    let { title, content } = req.body;

    try {
        
        const result = await connection.query("INSERT INTO courses (title, content) VALUES (?, ?)", [title, content]);
       
        res.status(201).send(result)

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

const oneCourse = async (req, res) => {

    const id = req.params.id;

    try {
        
        const [result] = await connection.query(`SELECT * FROM courses WHERE id = ?`, [id]);

        if(result.length == 0) {
            return res.status(404).json({
                message: "course is not found ! "
            })
        }
        res.status(200).json(result)

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

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