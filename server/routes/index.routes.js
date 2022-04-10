const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("All good in here")
})

router.use('/auth', require('./auth.routes'))
router.use('/products', require('./products.routes'))

module.exports = router
