const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  text:{
    type: String,
  },
  emotion:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  },
  tag:{
    type : [String]
  },
  photoUrl:{
    type : String
  },
}, {
    timestamps: true
});
///have to connect journals with users

const JournalModel = mongoose.model("JournalModel", journalSchema);

module.exports = JournalModel;
