const db = require('../db')
class UserController {
    async createUser(req,res) {
        const {nickname} = req.body
        const newPerson = await db.query(`INSERT INTO person (nickname) VALUES ($1) RETURNING *`, [nickname])
        console.log(nickname)
        res.json(newPerson.rows[0])
        //res.json('ok')
    }
    async getUsers(req,res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }
    async getOneUser(req,res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person WHERE id = $1`,[id])
        res.json(user.rows[0])
    }
    async updateUser(req,res) {
        const {id,nickname} = req.body
        const user = db.query(`UPDATE person SET nickname = $1 WHERE id = $2`,[nickname,id])
        res.json(user.rows)
    }
    async deleteUser(req,res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person WHERE id = $1`,[id])
        res.json(user.rows)
    }
}

module.exports = new UserController()