const JournalModel = require("../models/journalModel")


const getJournals = async (req, res) => {
    res.status(200).send("You are now connected")
}


module.exports = {
    getJournals
}