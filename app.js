const http = require('http')
const axios = require('axios')
const ejs = require('ejs')
const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('home')
})

axios.get("api.data.gov/ed/collegescorecard/v1/schools?school.name=boston%20college&api_key=GOV_DATA_API_KEY").then(response => {
  console.log(response.data);
}).catch((error) => {
  console.log(error)
})


app.listen(port, (err) => {
  if (err) {
    return console.log(`something bad happened`, err)
  }
  console.log(`server is listening on port ${port}`)
})



