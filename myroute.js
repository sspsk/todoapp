const router = require('express').Router()
router.get('/',(req,res) => {
  res.send('<h1>hello world from my module</h1>')
})
module.exports = router
