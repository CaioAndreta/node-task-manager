require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middleware/not-found");

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = process.env.PORT || 5000;
console.log(port)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 5000, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
