import { Sequelize } from "sequelize";

const db = new Sequelize("curso_node", "root", "n0m3l0", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
