const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config();
// const URI = "mongodb+srv://oula:69NWds58r1S8qZ7R@firstcluster.woitwky.mongodb.net/imerologio";
const MONGO_URI = process.env.MONGO_URI;

async function main(){
    await mongoose.connect(MONGO_URI);
}

main().then(()=>console.log("DB Connected!")).catch((err)=>console.log(err));

module.exports = main();