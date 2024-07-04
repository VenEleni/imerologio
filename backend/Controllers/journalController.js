const JournalModel = require("../models/journalModel");

//Have to add user.ids to each function once we have complete user controllers and middleware

//function to get all the Journals of a user
const getJournals = async (req, res) => {
  try {
    const journals = await JournalModel.find();
    res.status(200).send(journals);
    console.log("got them!!")
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

//function to create a new journal
const createNewJournal = async (req, res) => {
  try {
    const newJournal = await JournalModel.create(req.body);
    res.status(201).send(newJournal);
    console.log("created!!!");
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

//function to do changes in a journal -- we find it by it's id
const updateJournal = async (req, res) => {
  try {
    const updatedJournal = await JournalModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedJournal);
    console.log("updated!!!");
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

//function to delete a journal -- we find it by it's id
const deleteJournal = async (req, res) => {
  try {
    const deletedJournal = await JournalModel.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedJournal);
    console.log("deleted!!!");
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

module.exports = {
  getJournals,
  createNewJournal,
  updateJournal,
  deleteJournal
};
