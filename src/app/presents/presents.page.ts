import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.page.html',
  styleUrls: ['./presents.page.scss'],
})
export class PresentsPage implements OnInit {

  constructor(
   private actionCtrl: ActionSheetController,
   private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const action = await this.actionCtrl.create({
      header: 'opciones',
      buttons: [
        {
          text: 'compartir',
          icon: 'share'
        },
        {
          role: 'destructive',
          text: 'eliminar'

        },
        {
          role: 'cancel',
          text: 'Cancel'
        }

      ]
    });

    // imprescinble presentar al usuario, toast, alert, actionSheet
    await action.present();
  }


  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Se borrará un archivo',
      subHeader: '¿Está seguro que quiere borrar?',
      message: 'lorem ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: () => {
            console.log('dijo si');
          }
        }

      ]
    });

    await alert.present();
  }
}
