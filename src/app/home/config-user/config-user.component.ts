import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.scss'],
})
export class ConfigUserComponent implements OnInit {
  private loading;

  constructor(public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  public image = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"

  async close(){
    console.log("Modal Fechado")
   
    this.loadingCtrl.create({message: 'Loading...'}).then((overlay)=> {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {
      this.loading.dismiss(); 
      window.location.reload(); 
    },1500)
  }

}
