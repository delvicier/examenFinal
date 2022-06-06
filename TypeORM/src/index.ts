import "reflect-metadata";
import app from "./app";
import {AppDataSource} from './db'

async function main (){
    try {
        await AppDataSource.initialize();
        console.log("Base de datos conectada");
        app.listen(4200);
        console.log('Server listo en puerto ', 4200);
    } catch (error) {
        console.error(error)
    }
}
main();

