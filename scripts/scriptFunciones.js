import { lista } from "./scriptMain.js"               /*importamos la lista y el array tareas*/
import { tareas } from "./scriptMain.js"

export function addTask() {                           /*creamos y exportamos las funciones addTask y cleanAll*/

    const a = document.createAttribute("type")
    a.value = "text"

    let n = localStorage.numTarea

    const caja = document.createElement("input")
    caja.setAttributeNode(a)
    caja.value = tareas[n]
    n++
    localStorage.setItem("numTarea", n)
    const item = document.createElement("li")
    item.appendChild(caja)
    lista = document.getElementById("tasklist")
    lista.appendChild(item)

}

export function cleanAll() {

    const itemstareas=document.querySelectorAll("li")
    for(let i=0;i<itemstareas.length;i++){
        lista.removeChild(itemstareas[i])
    };

}