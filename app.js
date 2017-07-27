const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

const authenticate = (request, response, next) => {
  if (request.body.username === 'foo' && request.body.password === 'foo') {
    next()
  } else {
    response.redirect('/login')
  }
}

app.get('/login', (request, response) => {
  response.render('login')
})

app.use(authenticate)

app.post('/', (request, response) => {
  console.log(request.body)
  response.render('index', request.body)
})

app.listen(3000, (request, response) => {
  console.log('Port is being listened')
})
