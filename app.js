const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// const authenticate = (request, response, next) => {
//   if (request.query.username === 'fooberrylover' && request.query.password === 'fooberries') {
//     next()
//   } else {
//     response.redirect('/login')
//   }
// }
// app.get('/', (request, response) => {
//   response.send('/login')
// })

// app.use(authenticate)

app.get('/', (request, response) => {
  response.render('login')
})

// app.post('/', (request, response) => {
//   response.render('/')
// })

app.listen(3000, (request, response) => {
  console.log('Port is being listened')
})
