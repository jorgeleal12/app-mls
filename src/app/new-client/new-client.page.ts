import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ListAcountPage } from '../list-acount/list-acount.page';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  imgUser = '../assets/iconos/network.svg'
  hidden = true;
  hidden1 = true;
  NewCliente: FormGroup;
  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) {

    this.NewCliente = new FormGroup({
      idclient: new FormControl(''),
      name_cliente: new FormControl('', [Validators.required]),
      phone: new FormControl(null),
      identification: new FormControl(null),
      mail: new FormControl(''),
      state: new FormControl(),
      idstate: new FormControl(),
      id: new FormControl()
    });

    const data = navParams.get('data');


    if (data != null) {
      this.NewCliente.get('id').setValue(data.id);
      this.NewCliente.get('idclient').setValue(data.idclient);
      this.NewCliente.get('name_cliente').setValue(data.name_client);
      this.NewCliente.get('phone').setValue(data.phone);
      this.NewCliente.get('identification').setValue(data.id_client);
      this.NewCliente.get('mail').setValue(data.email);
      this.NewCliente.get('idstate').setValue(data.idstate);
      this.NewCliente.get('state').setValue(data.state);
      this.hidden1 = false;
    } else {
      this.hidden = false;
    }



  }

  ngOnInit() {
  }

  save() {
    if (this.NewCliente.value.name_cliente == '') {
    }

    const params = {
      idclient: this.NewCliente.value.idclient,
      name_client: this.NewCliente.value.name_cliente,
      phone: this.NewCliente.value.phone,
      id_client: this.NewCliente.value.identification,
      email: this.NewCliente.value.mail,
      state: this.NewCliente.value.idstate,
    }

    // let name_state = ''
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      if (this.NewCliente.value.idstate == 1) {
        this.NewCliente.get('state').setValue('Activo')
      }


      if (this.NewCliente.value.idstate == 2) {
        this.NewCliente.get('state').setValue('Inactivo')
      }


      if (this.NewCliente.value.idstate == 3) {
        this.NewCliente.get('state').setValue('Por confirmar')

      }

      if (this.NewCliente.value.id) {

        this.tasksService.UpdateCliente(this.NewCliente.value.id, this.NewCliente.value.name_cliente, this.NewCliente.value.identification,
          this.NewCliente.value.mail,
          this.NewCliente.value.phone,
          this.NewCliente.value.idstate,
          this.NewCliente.value.idclient)
          .then(tasks => {
            this.presentToast('Se Actualizo el Cliente')
            this.hidden = true;
            this.hidden1 = false;

          })
          .catch(error => {
            console.error(error);
          });

      } else {
        this.tasksService.insert_client(null, this.NewCliente.value.name_cliente, this.NewCliente.value.identification,
          this.NewCliente.value.mail,
          this.NewCliente.value.phone,
          this.NewCliente.value.idstate, 2, 1)
          .then(tasks => {
            this.presentToast('Se creo el Cliente')

            this.hidden = true;
            this.hidden1 = false;
            this.NewCliente.get('idclient').setValue(tasks.insertId)
            // console.log('id', this.NewCliente.value.idclient)

            this.tasksService.UpdateCliente_id(this.NewCliente.value.idclient)
              .then(tasks => {
                // console.log('update', tasks)
              })
              .catch(error => {
                console.error(error);
              });

          })
          .catch(error => {
            console.error(error.message);
          });
      }

    } else {

      this.loginServiceService.SaveCliente(params).subscribe(result => {
        if (result.response == true) {
          this.presentToast('Se creo el Cliente')
          this.NewCliente.get('idclient').setValue(result.id);
          this.hidden = true;
          this.hidden1 = false;

        }
        if (result.response == false) {
          this.presentToast('Se Actualizo el Cliente')
          this.hidden = true;
          this.hidden1 = false;

        }
      }, error => {

      })
    }



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

  edit() {
    this.hidden = false;
    this.hidden1 = true;
  }

  async ModalAcount() {
    let idcliente;
    let offline

    if (!this.NewCliente.value.idclient) {
      idcliente = this.NewCliente.value.id
      offline = 1;

    } else {
      idcliente = this.NewCliente.value.idclient
      offline = 2;
    }

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ListAcountPage,
        componentProps: {
          'idclient': idcliente,
          'offline': offline,
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
  }
}
