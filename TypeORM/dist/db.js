"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Productos_1 = require("./entidades/Productos");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "",
    database: "typeormbd",
    entities: [Productos_1.productos],
    logging: true,
    synchronize: true
});
