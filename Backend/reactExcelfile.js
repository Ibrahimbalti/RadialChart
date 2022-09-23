const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use("/publicfiles", express.static(__dirname + "/publicfiles"));
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/excelfileread", require("./routes/excelfile"));

app.listen(5000, function () {
  console.log("nod app is running on port 5000!!");
});
