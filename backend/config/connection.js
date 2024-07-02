const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wiseteam:7VRjyOay2GkYTGst@imerologio.r5lz090.mongodb.net/?retryWrites=true&w=majority&appName=imerologio')
  .then(() => console.log('Connected!'));