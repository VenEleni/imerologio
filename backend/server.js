const express = require("express")
const cors = require("cors")
const db = require("./config/connection")
const journalRouter = require("./routes/journalRoute")
const userRouter = require("./routes/userRoute")



const app = express();
const PORT = 8080;
app.use(express.json());

app.use(cors({
    origin: '*',
  }));
  

app.use("/journal", journalRouter)
app.use("/user", userRouter)



app.listen(PORT, ()=> {
    console.log(`Server is running on: http://localhost:${PORT}`)
})