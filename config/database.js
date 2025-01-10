const mongoose = require("mongoose");

const db = process.env.REACT_APP_DATABASE_URL;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;

// mongoose.connect(process.env.DATABASE_URL, {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('connected', function() {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });

