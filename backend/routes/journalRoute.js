const express = require("express");
const router = express.Router();
const {getJournals, createNewJournal, updateJournal, deleteJournal} = require("../Controllers/journalController"); //imported each function separately
//we have to import middleware when it's done -- DONE
const authMiddleware = require("../middlewares/jwtVerify")

//have to add middleware in each query -- DONE
router.get("/", authMiddleware, getJournals);
router.post("/create",authMiddleware, createNewJournal);
router.put("/update/:id",authMiddleware, updateJournal);
router.delete("/delete/:id",authMiddleware, deleteJournal);
//for the above, I mention only the name of the function(controller) because of the way I imported them

module.exports = router;