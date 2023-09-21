require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const studentRouter = require("./src/routes/students");

app.use(express.json());

app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`App is listning on PORT ${PORT}`);
});
