import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { CityPage } from '../city/city.page';

@Component({
  selector: 'app-new-acount',
  templateUrl: './new-acount.page.html',
  styleUrls: ['./new-acount.page.scss'],
})
export class NewAcountPage implements OnInit {
  imgUser = '../assets/iconos/2075416.svg'
  hidden = true;
  hidden1 = true;
  NewAcount: FormGroup;
  idclient

  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams
  ) {

    this.NewAcount = new FormGroup({
      idclient_account: new FormControl(''),
      city: new FormControl(),
      address: new FormControl('', [Validators.required]),
      indications: new FormControl(),
      state: new FormControl(),
      idstate: new FormControl('', [Validators.required]),
      client_idclient: new FormControl(),
      number_acount: new FormControl('', [Validators.required]),
      name_city: new FormControl('', [Validators.required]),
    })

    const data = navParams.get('data');
    this.idclient = navParams.get('idclient');

    if (data != null) {
      this.NewAcount.get('idclient_account').setValue(data.idclient_account);
      this.NewAcount.get('city').setValue(data.city);
      this.NewAcount.get('name_city').setValue(data.name_city);
      this.NewAcount.get('address').setValue(data.address);
      this.NewAcount.get('indications').setValue(data.indications);
      this.NewAcount.get('idstate').setValue(data.idstate);
      this.NewAcount.get('client_idclient').setValue(data.client_idclient);
      this.NewAcount.get('number_acount').setValue(data.number_acount);
      this.NewAcount.get('state').setValue(data.state);
      this.hidden1 = false;

    } else {
      this.hidden = false;
    }


  }

  ngOnInit() {
  }

  save() {

    const params = {
      idclient_account: this.NewAcount.value.idclient_account,
      city: this.NewAcount.value.city,
      address: this.NewAcount.value.address,
      indications: this.NewAcount.value.indications,
      state: this.NewAcount.value.idstate,
      client_idclient: this.idclient,
      number_acount: this.NewAcount.value.number_acount,
    }
    this.loginServiceService.CreateAcount(params).subscribe(result => {
      if (result.response == true) {
        this.presentToast('Se creo la Cuenta')
        this.NewAcount.get('idclient_account').setValue(result.idaccount);
        this.hidden = true;
        this.hidden1 = false;

      }
      if (result.response == false) {
        this.presentToast('Se Actualizo la Cuenta')
        this.hidden = true;
        this.hidden1 = false;

      }
    }, error => {

    })
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }

  async  SearchCity() {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: CityPage,
        componentProps: {
        }
      });

    modal.onDidDismiss().then((detail) => {
      this.NewAcount.get('name_city').setValue(detail.data.data.name_municipality)
      this.NewAcount.get('city').setValue(detail.data.data.idmunicipality)
    });

    await modal.present();
  }

  edit() {
    this.hidden = false;
    this.hidden1 = true;
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
