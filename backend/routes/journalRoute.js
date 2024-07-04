const express = require("express");
const router = express.Router();
const {getJournals, createNewJournal, updateJournal, deleteJournal} = require("../Controllers/journalController"); //imported each function separately
//we have to import middleware when it's done

//have to add middleware in each query
router.get("/", getJournals);
router.post("/create", createNewJournal);
router.put("/update/:id", updateJournal);
router.delete("/delete/:id", deleteJournal);
//for the above, I mention only the name of the function(controller) because of the way I imported them

module.exports = router;