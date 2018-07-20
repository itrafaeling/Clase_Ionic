import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  habilitarOrden = false;

  constructor(
    public navCtrl: NavController,
    private alertController: AlertController,
    private servicioTareas: TareasProvider
  ) {
    this.tareas = this.servicioTareas.obtenerTareas();
  }
  toogleOrdenar(){
    this.habilitarOrden = !this.habilitarOrden;
  }

  ordenarLista(evento){
    reorderArray(this.tareas,evento);
    // console.log(evento);
  }

  agregarTarea(){
    let alerta = this.alertController.create({
      title: "Agregar tarea",
      inputs: [
        {
          name: "tareaInput",
          placeholder: "Agregar tarea"
        }
      ],
      buttons:[
        {
          text: "Cancelar"
        },
        {
          text: "Agregar",
          handler: datos => {
            // this.tareas.push(datos.tareaInput);
            this.servicioTareas.agregarTarea(datos.tareaInput);
            console.log(this.tareas);
          }
        }
      ]
    });
    alerta.present();
  }

  irPaginaTareasArchivadas()
  {
   this.navCtrl.push(TareasArchivadasPage);    
  }
  
  archivarTarea(indiceTarea){
    this.servicioTareas.archivarTarea(indiceTarea);
  }

  editarTarea(indiceTarea){
    let  alerta = this.alertController.create({
      title: "Editar tarea",
      message: "Por favor ingrese la nueva tarea",
      cssClass: 'action-sheets-basic-page',
      inputs:[
        {
          name: "editarTareaInput",
          value: this.tareas[indiceTarea]
        }
      ],
      buttons:[
        {
          text: "Cancelar"
        },
        {
          text: "Listo",
          handler: data => {
            this.servicioTareas.editarTarea(indiceTarea,data.editarTareaInput);
          }
        }
      ]
    });
    alerta.present();
    //this.servicioTareas.editarTarea(indiceTarea);
  }
}
