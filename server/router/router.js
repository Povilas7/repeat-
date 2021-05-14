const express = require('express')
const router = express.Router()
const valid = require('../middleware/validator')
const create = require('../controllers/main')


router.post("/upload", valid.check, create.upload)
router.get("/getPost", create.getPost)
router.get("/minusQuantity/:id", create.minus)
router.get("/add/:id", create.add)
router.get("/delete/:id", create.deleteItem)




module.exports = router