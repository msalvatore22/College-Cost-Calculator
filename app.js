const http = require('http')
const ejs = require('ejs')
const express = require('express')
const app = module.exports = express()
const bodyParser = require('body-parser')
const port = 3000
const college = require('./axios.js')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.listen(port, (err) => {
  if (err) {
    return console.log(`something bad happened`, err)
  }
  console.log(`server is listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
  var college_name_url = encodeURI(req.body.college_name)
  module.exports.college_name_url = college_name_url
  console.log(college_name_url)
})

app.get('/college', (req, res) => {
  college.myAxiosCall.then((result) => {
    res.render('college', {college: result})
  })
})

