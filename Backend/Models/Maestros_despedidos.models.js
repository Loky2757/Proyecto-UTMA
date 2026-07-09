import { Schema, Model } from "mongoose"
const esquema = new schema ({
    name=String,
    apepat=String,
    sueldo=Number,
    edad=Number,
    Materia=String})
export const tabla =new model("Tabla Maestros despedidos ",esquema)