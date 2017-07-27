const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

const authenticate = (request, response, next) => {
  if (request.query.username === 'foo' && request.query.password === 'foo') {
    next()
  } else {
    response.redirect('/login')
  }
}

app.get('/login', (request, response) => {
  response.render('login')
})

app.use(authenticate)

app.get('/', (request, response) => {
  response.render('index')
})

app.listen(3000, (request, response) => {
  console.log('Port is being listened')
})
