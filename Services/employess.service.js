const db = require("../db");

module.exports.getAllData = async () => {
  const [data] = await db.query("select * from test");
  return data;
};

module.exports.getDataByName = async (name) => {
  const [data] = await db.query(`select * from test where name=?`, [name]);
  return data;
};

module.exports.deleteData = async (name) => {
  const [data] = await db.query(`delete from test where name=?`, [name]);
  return data.affectedRows;
};

module.exports.insertData = async (name, age) => {
  const [data] = await db.query(`insert into test(name,age) values(?,?)`, [
    name,
    age,
  ]);
  return data.affectedRows;
};
