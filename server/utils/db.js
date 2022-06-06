const mongoose = require("mongoose");
const url =
  "mongodb+srv://SchoolManagement:schoolapp123@cluster0.nm8l37f.mongodb.net/SchoolManagement?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(eror);
  });
