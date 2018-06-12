const http = require('http')
const ejs = require('ejs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const getCollegeList = require('./axios.js')

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
  
  getCollegeList.myAxiosCall(college_name_url).then((result) => {

    res.render('college', {collegeList: result})
  })
})

app.get('/calculation', (req, res) => {
  res.render('calculation')
})

