const express = require('express')
const app = express()

const apiRouter = require('./server/router/main')
const editRouter = require('./server/router/edit')
const allRouter = require('./server/router/all')

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static('client'))

app.get('/list/:id', (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})
app.get('/all', (req, res)=> {
    res.sendFile(__dirname + "/all.html")
})


app.use('/api', apiRouter)
app.use('/api', allRouter)
app.use('/', editRouter)


app.listen(80, ()=> {
    console.log('connected')
})