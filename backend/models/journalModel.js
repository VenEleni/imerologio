const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalSchema = new Schema(
  {
    author: String,
  },
  {
    timestamps: true,
  }
);

const JournalModel = mongoose.model("Journal", JournalSchema);

module.exports = JournalModel;
