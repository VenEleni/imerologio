const express = require("express")
const router = express.Router()
const UserController = require("../Controllers/userController")


router.post("/register", UserController.register)
router.get("/allusers", UserController.getUsers)
router.post("/login", UserController.login)
router.delete("/delete/:id", UserController.deleteUser)

//Update User Details
router.put("/update", UserController.updateName)
router.put("/update/changepassword", UserController.changePassword)



module.exports = router;