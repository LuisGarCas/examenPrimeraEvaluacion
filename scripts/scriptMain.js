
import {Tarea} from "./scriptClassTarea.js"       /*importamos la clase tarea del scriptClassTarea */

export let lista =document.getElementById(tasklist)

let tarea1=new Tarea("1","ir al GYM")                 /*creamos las tarea1 y tarea2 y el array tareas*/
let tarea2=new Tarea("2","ir al Mercadona")
export let tareas=[tarea1,tarea2]
localStorage.setItem("numTarea",1)