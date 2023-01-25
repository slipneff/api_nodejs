const db = require('../db')
class BookController{
     async markBook(req,res){
         const {title,mark,userId} = req.body
         const newMark = await db.query(`INSERT INTO book (title, mark, user_id) VALUES ($1, $2, $3) RETURNING *`,[title,mark,userId])
         res.json(newMark.rows[0])
     }
    async getBooksByUser(req,res){
        const id = req.query.id
        const books = await db.query(`SELECT * FROM book WHERE user_id = $1`,[id])
        res.json(books.rows)
    }
}

module.exports = new BookController()