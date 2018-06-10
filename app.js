const http = require('http')
const ejs = require('ejs')
const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000
const college = require('./axios.js').myAxiosCall

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.listen(port, (err) => {
  if (err) {
    return console.log(`something bad happened`, err)
  }
  console.log(`server is listening on port ${port}`)
})

app.get('/', (req, res) => {
  college.then((result) => {
    res.render('home', {college: result})
  })
})
