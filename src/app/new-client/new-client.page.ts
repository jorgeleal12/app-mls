import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  imgUser = '../assets/iconos/network.svg'

  NewCliente: FormGroup;
  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController, ) {





    this.NewCliente = new FormGroup({
      idclient: new FormControl(''),
      name_cliente: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      state: new FormControl()
    });

  }

  ngOnInit() {
  }

  save() {
    if (this.NewCliente.value.name_cliente == '') {
    }
    console.log(2);
    const params = {
      idclient: this.NewCliente.value.idclient,
      name_client: this.NewCliente.value.name_cliente,
      phone: this.NewCliente.value.phone,
      id_client: this.NewCliente.value.identification,
      email: this.NewCliente.value.mail,
      state: this.NewCliente.value.state,
    }
    this.loginServiceService.SaveCliente(params).subscribe(result => {
      if (result.response == true) {
        this.presentToast('Se creo el Cliente')
        this.NewCliente.get('idclient').setValue(result.id);

      }
      if (result.response == false) {
        this.presentToast('Se creo el Actualizo')

      }
    }, error => {

    })
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  back() {
    this.modalController.dismiss({
      'dismissed': false,
    });
  }
}
