const express = require("express");
const router = express.Router();
const xlsx = require("xlsx");
router.get("/", (req, res) => {
  var wb = xlsx.readFile("./routes/samplefile.xlsx");
  try {
    var wb = xlsx.readFile("./routes/samplefile.xlsx");
    var ws = wb.Sheets["Sheet1"];
    var datas = xlsx.utils.sheet_to_json(ws);
    const total = datas.length;

    let uniquefruits = [
      ...new Map(datas.map((item) => [item["Fruit"], item])).values(),
    ];
    let uniquestatus = [
      ...new Map(datas.map((item) => [item["Status"], item])).values(),
    ];

    for (let i = 0; i < uniquefruits.length; i++) {
      for (let j = 0; j < uniquestatus.length; j++) {
        uniquefruits[i][`${uniquestatus[j].Status}`] = 0;
      }
      uniquefruits[i]["fruits_Count"] = 0;
    }

    for (let j = 0; j < datas.length; j++) {
      for (let i = 0; i < uniquefruits.length; i++) {
        if (uniquefruits[i].Fruit == datas[j].Fruit) {
          uniquefruits[i]["fruits_Count"] = Number(
            uniquefruits[i]["fruits_Count"] + 1
          );
          uniquefruits[i][`${datas[j].Status}`] = Number(
            uniquefruits[i][`${datas[j].Status}`] + 1
          );
        }
      }
    }

    for (let i = 0; i < uniquefruits.length; i++) {
      delete uniquefruits[i]["Status"];
      delete uniquefruits[i]["Actionby"];
    }

    res.send(uniquefruits);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
