const { application } = require('express')
const stuRouters = require('./src/routes')
const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send('hello')
})


app.use('/api/v1/students', stuRouters)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})