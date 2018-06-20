var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.render('result')
})

router.post('/', (req, res) => {
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

    result.push(total)
    return result
  }

  college_cost_calculator(tuition, scholarship, living_expenses, books, food)

  res.render('result', {result: result})
})


module.exports = router;