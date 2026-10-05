const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/userRoute");
const connectDB = require("./config/dbConfig");
require("dotenv").config();


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Connected Successfully!");
});

app.use("/api/cards", router);

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, (error) => {
        if (error) console.log(error);
        console.log("This port is running at", process.env.PORT);
});
})

