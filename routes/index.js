const router = require("express").Router()

router.get("/", (req, res) => {
  res.render("/login.ejs")
})

router.post("/reg", (req, res) => {
  res.send('post successful')
})

module.exports = router