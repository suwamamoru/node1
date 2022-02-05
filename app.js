const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.engine('ejs', ejs.renderFile)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('reg.ejs', {
    link: {href: '/login'}
  })
})

app.get('/login', (req, res) => {
  res.render('login.ejs', {
    link: {href: '/'}
  })
})

app.listen(port, () => {
  console.log(`app.js listening on port ${port}`)
})