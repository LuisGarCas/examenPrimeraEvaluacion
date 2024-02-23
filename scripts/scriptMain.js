
import {tarea} from "./scriptClassTarea.js"

let lista =document.getElementById(tasklist)

let tarea1=new tarea("1","ir al GYM")
let tarea2=new tarea("2","ir al Mercadona")
export let tareas=[tarea1,tarea2]
localStorage.setItem=("numTarea",1)