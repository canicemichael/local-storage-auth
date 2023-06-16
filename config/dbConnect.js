const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect(process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('Connected to mongoDB');
      }).catch(error => {
        console.log('Error connecting to DB: ', error);
      })
}

module.exports = {connectDb};