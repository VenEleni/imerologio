const express = require("express")
const cors = require("cors")
const db = require("./config/connection")
const JournalController = require("./Controllers/journalController")


const app = express();
const PORT = 8080;

app.use(cors({
    origin: '*',
  }));
  

app.get("/", JournalController.getJournals)



app.listen(PORT, ()=> {
    console.log(`Server is running on: http://localhost:${PORT}`)
})