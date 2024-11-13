const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoutes");
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware"); 

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", apiKeyMiddleware, enquiryRoutes);


app.get("/", (req, res) => {
  res.send("Welcome to the local server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});