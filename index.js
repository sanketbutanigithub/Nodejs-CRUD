const express = require("express");
const app = express();
const db = require("./db");
const routes = require("./Controller/empolyee.contoller");
const PORT = 3000;
const bodyParcer = require("body-parser");

app.use(bodyParcer.json());
app.use("/api/test", routes);

db.query("select 1")
  .then((data) => {
    console.log("Connection success");
    app.listen(PORT, () => {
      console.log(`Server runing in port ${PORT}`);
    });
  })
  .catch((err) => console.log("Connection fail" + err));
