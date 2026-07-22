import { Schema, model } from "mongoose"
const esquema = new Schema ({
    name:String,
    apepat:String,
    sueldo:Number,
    edad:Number,
    Materia:String})
export const tabla = new model("Tabla Maestros despedidos ",esquema)