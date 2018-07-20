import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {

  private tareas = [];
  private tareasArchivadas = [];
  private tareasEditadas = [];
  constructor() {
    console.log('Hello TareasProvider Provider');
  }

  obtenerTareas(){
    return this.tareas;
  }

  agregarTarea(tarea){
    this.tareas.push(tarea);
  }

  obtenerTareasArchivadas(){
    return this.tareasArchivadas;
  }

  obtenerTareasEditadas(){
    return this.tareasEditadas;
  }

  archivarTarea(indiceTarea){
    const tarea = this.tareas[indiceTarea];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indiceTarea,1);

  }

  editarTarea(indiceTarea, nuevaTarea){
    this.tareas[indiceTarea] = nuevaTarea;    
  }
}
