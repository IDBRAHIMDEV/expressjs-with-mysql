const connection = require('../config/db')


const createArticle = async (req, res) => {
    res.render('article/create.ejs')
}

const getAllArticles = async (req, res) => {
     // simple query

     try {
        
         const [result] = await connection.query('SELECT * FROM articles');
         console.log(result)
         res.render('article/index.ejs', {articles: result})

     } catch (error) {
        res.status(500).json({
            message: "server is down!"
        })
     }

}

const saveArticle = async (req, res) => {
    
    let { title, content, url, category_id } = req.body;

    try {
        
        const result = await connection.query("INSERT INTO articles (title, content, url, category_id) VALUES (?, ?, ?, ?)", [title, content, url, category_id]);
       
        res.status(201).send(result)

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

const oneArticle = async (req, res) => {

    const id = req.params.id;

    try {
        
        const [result] = await connection.query(`SELECT * FROM articles WHERE id = ?`, [id]);

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

const putArticle = async (req, res) => {

    let id = req.params.id;
    let { title, content, url, category_id } = req.body

    if( title == '' || content == '') {

        return res.status(400).send({
            message: "Bad request"
        })
    }

    try {
        
        const [result] = await connection.query("UPDATE articles SET title = ?, content = ?, url = ?, category_id = ? WHERE id = ?", [title, content, url, category_id, id]);
       
        if(result.affectedRows == 0) {
            return res.status(400).send({
                message: "Bad request"
            })
        }

        res.status(200).send(result)

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

const patchArticle = async (req, res) => {
    let id = req.params.id;
    let { title, content, url, category_id } = req.body

    try {
        
        const [result] = await connection.query("UPDATE articles SET title = IFNULL(?, title), content = IFNULL(?, content), url = IFNULL(?, url), category_id = IFNULL(?, category_id) WHERE id = ?", [title, content, url, category_id, id]);
       
        if(result.affectedRows == 0) {
            return res.status(400).send({
                message: "Bad request"
            })
        }

        res.status(200).send(result)

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

const deleteArticle = async (req, res) => {
    let id = req.params.id;
    
    try {
        
        const [result] = await connection.query("DELETE FROM articles WHERE id = ?", [id]);
       
        res.status(204).send({})

    } catch (error) {
       res.status(500).json({
           message: "server is down!"
       })
    }
}

exports.getAllArticles = getAllArticles
exports.oneArticle = oneArticle
exports.createArticle = createArticle
exports.putArticle = putArticle
exports.saveArticle =saveArticle
exports.patchArticle =patchArticle
exports.deleteArticle =deleteArticle