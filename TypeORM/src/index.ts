import "reflect-metadata";
import app from "./app";
import {AppDataSource} from './db'

async function main (){
    try {
        await AppDataSource.initialize();
        console.log("Base de datos conectada");
        app.listen(4201);
        console.log('Server listo en puerto ', 4201);
    } catch (error) {
        console.error(error)
    }
}
main();