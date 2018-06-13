const http = require('http')
const ejs = require('ejs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const getCollegeList = require('./axios.js')

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
  var college_name_url = encodeURI(req.body.college_name)
  
  getCollegeList.myAxiosCall(college_name_url).then((result) => {
    if(result == undefined){
      res.render('error')
    } else {
      res.render('college', {collegeList: result})
    }
  }).catch((error) => {
    console.log(error)
  })
})

app.get('/calculation', (req, res) => {
  res.render('calculation_form')
})

app.post('/calculation', (req, res) => {
  var college_info = []
  var college_name = req.body.college_name
  var tuition_in = req.body.tuition_in
  var tuition_out = req.body.tuition_out

  college_info.push(college_name, tuition_in, tuition_out)
  res.render('calculation_form', {college_info: college_info})
})

app.get('/result', (req, res) => {
  res.render('result')
})

app.post('/result', (req, res) => {
  var result = []
  var college_name = req.body.college_name
  var tuition = req.body.tuition
  var scholarship = req.body.scholarship
  var living_expenses = req.body.living_expenses
  var books = req.body.books
  var food = req.body.food

  function college_cost_calculator (tuition, scholarship, living_expenses, books, food){
    tuition = parseInt(tuition)
    scholarship = parseInt(scholarship)
    living_expenses = parseInt(living_expenses)
    books = parseInt(books)
    food = parseInt(food)

    total_owed = tuition + living_expenses + books + food
    total = total_owed - scholarship

    return result.push(total)
  }

  college_cost_calculator(tuition, scholarship, living_expenses, books, food)

  res.render('result', {result: result})
})

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
