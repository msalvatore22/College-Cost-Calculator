var express = require('express');
var router = express.Router();
const getCollegeList = require('../axios.js')

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/api/colleges', (req, res) => {
var college_name_url = encodeURI(req.body.collegeName)

getCollegeList.myAxiosCall(college_name_url).then((result) => {
  // if(result.all.length == 0){
  //   res.render('error')
  // } else {
  //   res.render('college', {collegeList: result})
  // }
  
  res.send(result)
}).catch((error) => {
  console.log(error)
})
})

module.exports = router;
