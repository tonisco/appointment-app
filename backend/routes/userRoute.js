const { Router } = require("express")
const { login, register, allLawyers } = require("../controllers/userController")

const router = Router()

router.post("/login", login)

router.post("/register", register)

router.get("/lawyers", allLawyers)

module.exports = router
