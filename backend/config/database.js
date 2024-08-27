const mongoose = require("mongoose");
const connectDatabase = () => {
    mongoose
  .connect(process.env.DB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true, no longer needed afer mongoose 6 update
  })
  .then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  })
   
}

module.exports = connectDatabase
