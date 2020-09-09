import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { LoginServiceService } from '../Services/login-service.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ViewDocumentPage } from '../view-document/view-document.page';
import { NetworkService, ConnectionStatus } from '../Services/network.service';
import { TasksService } from '../Services/tasks-service';

@Component({
  selector: 'app-new-builder',
  templateUrl: './new-builder.page.html',
  styleUrls: ['./new-builder.page.scss'],
})
export class NewBuilderPage implements OnInit {
  step = { sectionName: null };
  imgUser = '../assets/iconos/2092076.svg'
  hidden = true;
  hidden1 = true;
  NewBuilder: FormGroup;
  idmaterial
  sic = [];
  competencias = [];
  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) {
    this.NewBuilder = new FormGroup({
      idbuilder: new FormControl(''),
      name_builder: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      state: new FormControl(''),
      idstate: new FormControl(3),
      id: new FormControl(null),
    })

    const data = navParams.get('data');
    this.idmaterial = navParams.get('idmaterial');

    if (data != null) {
      this.NewBuilder.get('idbuilder').setValue(data.idbuilder);
      this.NewBuilder.get('id').setValue(data.id);
      this.NewBuilder.get('name_builder').setValue(data.name_builder);
      this.NewBuilder.get('identification').setValue(data.identification);
      this.NewBuilder.get('state').setValue(data.state);
      this.NewBuilder.get('idstate').setValue(data.idstate);
      this.hidden1 = false;

    } else {
      this.hidden = false;
    }
  }

  ngOnInit() {
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
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  getNameValid(sectionName) {

    return this.step.sectionName === sectionName;
  }

  setStep(sectionName) {

    this.step.sectionName = sectionName !== this.step.sectionName ? sectionName : null;

  }

  getIconName(sectionName) {
    return this.getNameValid(sectionName) ? 'arrow-down' : 'arrow-forward';
  }

  listsic() {
    this.loginServiceService.listsic(this.NewBuilder.value.idbuilder).subscribe(result => {
      this.sic = result.response;
    }, error => {

    })
  }

  listcom() {
    this.loginServiceService.listcom(this.NewBuilder.value.idbuilder).subscribe(result => {
      this.competencias = result.response;
    }, error => {

    })
  }

  save() {

    const params = {
      idbuilder: this.NewBuilder.value.idbuilder,
      name_builder: this.NewBuilder.value.name_builder,
      identification: this.NewBuilder.value.identification,
      state: this.NewBuilder.value.idstate,
    }

    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {

      let name_state = ''
      if (this.NewBuilder.value.idstate == 1) {
        name_state = 'Activo';

      }


      if (this.NewBuilder.value.idstate == 2) {
        name_state = 'Inactivo';

      }


      if (this.NewBuilder.value.idstate == 3) {
        name_state = 'Por confirmar';

      }

      if (this.NewBuilder.value.id) {

        this.tasksService.UpdateBuilder(this.NewBuilder.value.id, this.NewBuilder.value.name_builder, this.NewBuilder.value.identification, this.NewBuilder.value.idstate, name_state, 2)
          .then(tasks => {
            this.presentToast('Se Actualizo el Constructor')
            this.hidden = true;
            this.hidden1 = false;
            // console.log(tasks)

          })
          .catch(error => {
            console.error(error);
          });

      } else {
        this.tasksService.insert_builder(null, this.NewBuilder.value.name_builder, this.NewBuilder.value.identification, this.NewBuilder.value.idstate, name_state, 2)
          .then(tasks => {
            this.presentToast('Se creo el Constructor')
            this.NewBuilder.get('state').setValue('Por Confirmar');
            this.hidden = true;
            this.hidden1 = false;
            // console.log(tasks)

          })
          .catch(error => {
            console.error(error);
          });

      }


    } else {
      this.loginServiceService.SevaBuilder(params).subscribe(result => {
        if (result.response == true) {
          this.presentToast('Se creo el Constructor')
          this.NewBuilder.get('idbuilder').setValue(result.result);
          this.NewBuilder.get('state').setValue('Por Confirmar');
          this.hidden = true;
          this.hidden1 = false;

        }
        if (result.response == false) {
          this.presentToast('Se Actualizo el Constructor')
          this.hidden = true;
          this.hidden1 = false;

        }
      }, error => {

      })
    }


  }

  SicImage(sic) {
    // console.log(sic)
    const params = {
      builder_idbuilder: sic.idsic_builder
    }
    this.loginServiceService.sic_builder(params).subscribe(result => {
      this.ModalView(result.response)
    }, error => {


    })
  }


  ComImage(competencia) {
    // console.log(competencia)
    const params = {
      builder_idbuilder: competencia.idsic_builder
    }
    this.loginServiceService.com_builder(params).subscribe(result => {
      this.ModalView(result.response)
    }, error => {


    })
  }


  async ModalView(result) {
    if (result == null) {
      this.presentToast('No Hay Documentos Adjuntos')
      return
    }
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ViewDocumentPage,
        componentProps: {
          'url': result.url,
          'name': result.name
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
  }
}
