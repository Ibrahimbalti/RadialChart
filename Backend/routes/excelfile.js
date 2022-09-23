const express = require("express");
const router = express.Router();
const xlsx = require("xlsx");
router.get("/", (req, res) => {
  var wb = xlsx.readFile("./routes/samplefile.xlsx");
  try {
    var wb = xlsx.readFile("./routes/samplefile.xlsx");
    var ws = wb.Sheets["Sheet1"];
    var datas = xlsx.utils.sheet_to_json(ws);
    res.send(datas);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
