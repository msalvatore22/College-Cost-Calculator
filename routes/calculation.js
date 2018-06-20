var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('calculation_form')
})

router.post('/', (req, res) => {
  var college_info = []
  var college_name = req.body.college_name
  var tuition_in = req.body.tuition_in
  var tuition_out = req.body.tuition_out

  college_info.push(college_name, tuition_in, tuition_out)
  res.render('calculation_form', {college_info: college_info})
})

module.exports = router;