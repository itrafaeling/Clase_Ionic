import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TareasProvider } from '../../providers/tareas/tareas';

/**
 * Generated class for the TareasArchivadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tareas-archivadas',
  templateUrl: 'tareas-archivadas.html',
})
export class TareasArchivadasPage {

  tareasArchivadas=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private servicioTareas : TareasProvider
    
  ){

  }

  ionViewDidLoad() {
    this.tareasArchivadas = this.servicioTareas.obtenerTareasArchivadas();
    //console.log('ionViewDidLoad TareasArchivadasPage');
  }

}
