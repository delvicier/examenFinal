import { DataSource } from 'typeorm'
import { productos } from './entidades/Productos'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "",
    database: "typeormbd",
    entities: [productos],
    logging:true,
    synchronize: true
})