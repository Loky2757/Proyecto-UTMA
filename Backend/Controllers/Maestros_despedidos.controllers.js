import { tabla } from "../Models/Maestros_despedidos.models.js";
tabla.create({name:"Eliza",
    apepat:"Capibara",
    sueldo:100,
    edad:30,
    materia:"nada"})
    //ES para mandar a llamar al controlador 
    export const test = (()=>{
console.log("Funciona el controlador");
    })