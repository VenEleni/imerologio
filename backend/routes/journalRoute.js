const express = require("express")
const router = express.Router()
const JournalController = require("../Controllers/journalController")


router.get("/create", JournalController.getJournals)



module.exports = router;