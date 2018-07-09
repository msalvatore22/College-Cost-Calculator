const http = require('http')
const ejs = require('ejs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const getCollegeList = require('./axios.js')

var indexRouter = require('./routes/index');
var calculationRouter = require('./routes/calculation')
var usersRouter = require('./routes/users');
var resultRouter = require('./routes/result')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use('/', indexRouter);
app.use('/calculation', calculationRouter);
app.use('/result', resultRouter)

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

app.listen(port, (err) => {
  if (err) {
    return console.log(`something bad happened`, err)
  }
  console.log(`server is listening on port ${port}`)
})



module.exports = app
