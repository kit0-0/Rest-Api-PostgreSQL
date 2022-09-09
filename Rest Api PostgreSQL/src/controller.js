const pool = require('../db')
const queries = require('./queries')

//fetching full data
const getstu = (req, res) => {
    pool.query(queries.getstu,
        (error, results) => {
            if (error) throw error
            res.status(200).json(results.rows)
        })
}
//fetching data from id
const getsbyid = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getsbyid, [id],
        (error, results) => {
            if (error) throw error
            res.status(200).json(results.rows)
        })
}

//insert a new row into the table

const poststu = (req, res) => {
    const { name, email, age, dob } = req.body;
    //check if the email already exists
    pool.query(queries.checkemail, [email],
        (error, results) => {
            if (results.rows.length) {
                res.send('email already in use')
            }
            //create a new row
            pool.query(queries.poststu,
                [name, email, age, dob],
                (error, results) => {
                    if (error) throw error
                    res.status(201).json('created')
                })
        })
}

//delete
const deletestu = (req, res) => {
    //check if the user already exists
    const id = parseInt(req.params.id)
    pool.query(queries.getsbyid, [id],
        (error, results) => {
            if (!results.rows.length) {
                res.send('does not exist');
            }
            //delete the row
            pool.query(queries.deletestu, [id],
                (error, results) => {
                    if (error) throw error
                    res.status(200).send('deleted')
                })
        })
}

//update the data
const putst = (req, res) => {
    //check if the user already exists
    const id = parseInt(req.params.id)
    const { name } = req.body

    pool.query(queries.getsbyid, [id],
        (error, results) => {
            if (!results.rows.length) {
                res.send('does not exist');
            }

            pool.query(queries.putst, [name, id],
                (error, results) => {
                    if (error) throw error
                    res.status(200).send('updated')
                })
        })
}



module.exports = {
    getstu,
    getsbyid,
    poststu,
    deletestu,
    putst,
}