

export class Tarea{                  /*creamos y exportamos la clase tarea con el id y la descripcion de la tarea que vamos a realizar  */
    constructor (id,descripcion){
        this.id=id;
        this.descripcion=descripcion;
    }
 get getid(){                        /*realizamos los get y setter */
    return this.id;
 }
 get getdescripcion(){
    return this.descripcion;
 }

 set setid(id){
    this.id=id
 }
 set setdescripcion(descripcion){
    this.descripcion=descripcion
 }

}