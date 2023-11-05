const express = require("express");
const router = express.Router();
const db = require("../db");
const service = require("../Services/employess.service");

router.get("/getalldata", async (req, res) => {
  try {
    const data = await service.getAllData();
    res.send(data);
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: `Something went wrong ${err}` });
  }
});

router.get("/getdatabyname/:name", async (req, res) => {
  try {
    const data = await service.getDataByName(req.params.name);
    res.send(data);
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: `Something went wrong ${err}` });
  }
});

router.delete("/deletebyname/:name", async (req, res) => {
  try {
    const effectedRow = await service.deleteData(req.params.name);
    if (effectedRow == 0) {
      res
        .status(404)
        .json({ message: "No data found with name " + req.params.name });
    } else {
      res.send({ message: "Record deleted with name " + req.params.name });
    }
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: `Something went wrong ${err}` });
  }
});

router.post("/insertdata", async (req, res) => {
  try {
    const obj = req.body;
    const data = await service.insertData(obj.name, obj.age);
    console.log(data);
    if (data == 0) {
      res.status(404).json({ message: "Something went wrong" });
    } else {
      res.send({ message: "Data inserted successfully" });
    }
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: `Something went wrong ${err}` });
  }
});

module.exports = router;
