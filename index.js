const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./routes/routes")
const connection = require("./database/db")
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(cors());



const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("server started on", PORT))

app.use(fileUpload({
    useTempFiles: true,
}))

app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json());

app.use("/", route)

// connecting to the dataBase
connection();
