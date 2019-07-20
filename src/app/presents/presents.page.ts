import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController, ModalController } from '@ionic/angular';

import { ModalPage } from './../modal/modal.page';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.page.html',
  styleUrls: ['./presents.page.scss'],
})
export class PresentsPage implements OnInit {

  constructor(
   private actionCtrl: ActionSheetController,
   private alertCtrl: AlertController,
   public toastCtrl: ToastController,
   public modalCtrl: ModalController
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

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Tus preferencias han sido salvadas.',
      duration: 2000,
      position: 'bottom',
      showCloseButton: true,
      // closeButtonText: 'cerrar'
    });
    await toast.present();

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage
    });

    await modal.present();

  }


}
