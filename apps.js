import mongoose, { Mongoose } from "mongoose";//mongoose libreria para conectar a una base de datos
import {cors} from "cors";//Libreria para dar seguridad al proyecto
import {dotenv} from "dotenv";//Libreria para las variables de entorno
import { express } from "express";//Libreria para crear servidores 
mongoose.connect(process.env.url_DB)//conectamos la base de datos

.then(()=>{
    console.log("funciona chingon la base de datos")
})//muestra que si jala comprobando la conexion
.catch ((error)=>{
    console.long("esta madre no jalo",error)
})//muestra que no jalo comprueba conexion
//aparecen en la terminal de abajo 
const app=express();//genera un servidor local
app.lisen(4000,()=>{
    console.long("no escucha borroso")
})