const mongoose = require('mongoose');
const URI = "mongodb+srv://oula:69NWds58r1S8qZ7R@firstcluster.woitwky.mongodb.net/imerologio";

async function main(){
    await mongoose.connect(URI);
}

main().then(()=>console.log("DB Connected!")).catch((err)=>console.log(err));

module.exports = main();