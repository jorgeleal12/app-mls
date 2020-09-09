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
  selector: 'app-new-material',
  templateUrl: './new-material.page.html',
  styleUrls: ['./new-material.page.scss'],
})
export class NewMaterialPage implements OnInit {
  step = { sectionName: null };
  imgUser = '../assets/iconos/1683018.svg'
  hidden = true;
  hidden1 = true;
  NewMaterial: FormGroup;
  idmaterial
  certificates = [];
  public data1;

  constructor(private loginServiceService: LoginServiceService,
    public toastController: ToastController,
    public modalController: ModalController,
    private navParams: NavParams, private networkService: NetworkService, private tasksService: TasksService) {


    this.NewMaterial = new FormGroup({
      idmaterials: new FormControl(''),
      name_materials: new FormControl('', [Validators.required]),
      state: new FormControl(),
      idstate: new FormControl(),
      id: new FormControl(),
      codigo: new FormControl(),
      date_expiration: new FormControl(),
      idmaterial_certificate: new FormControl(),
    })

    const data = navParams.get('data');
    this.idmaterial = navParams.get('idmaterial');

    if (data != null) {
      this.NewMaterial.get('idmaterials').setValue(data.idmaterials);
      this.NewMaterial.get('id').setValue(data.id);
      this.NewMaterial.get('name_materials').setValue(data.name_materials);
      this.NewMaterial.get('state').setValue(data.state);
      this.NewMaterial.get('idstate').setValue(data.idstate);
      this.NewMaterial.get('codigo').setValue(data.codigo);
      this.NewMaterial.get('date_expiration').setValue(data.date_expiration);
      this.NewMaterial.get('idmaterial_certificate').setValue(data.idmaterial_certificate);

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


  save() {

    const params = {
      idmaterials: this.NewMaterial.value.idmaterials,
      name_materials: this.NewMaterial.value.name_materials,
      state_one_idstate_one: 3,
    }

    let name_state = ''
    if (this.networkService.getCurrentNetworkStatus() == ConnectionStatus.Offline) {


      if (this.NewMaterial.value.idstate == 1) {
        name_state = 'Activo';

      }


      if (this.NewMaterial.value.idstate == 2) {
        name_state = 'Inactivo';

      }


      if (this.NewMaterial.value.idstate == 3) {
        name_state = 'Por confirmar';

      }



      if (this.NewMaterial.value.id) {

        this.tasksService.UpdateMaterial(this.NewMaterial.value.id, this.NewMaterial.value.name_materials, name_state, this.NewMaterial.value.idstate, 2)
          .then(tasks => {

            this.presentToast('Se Actualizo el Material')
            this.hidden = true;
            this.hidden1 = false;
            console.log(tasks)

          })
          .catch(error => {
            console.error(error);
          });

      } else {
        this.tasksService.insert_material(null, this.NewMaterial.value.name_materials, name_state, 2, 2)
          .then(tasks => {

            this.presentToast('Se creo el Material')
            this.NewMaterial.get('state').setValue('Por Confirmar');
            this.hidden = true;
            this.hidden1 = false;
            console.log(tasks)

          })
          .catch(error => {
            console.error(error);
          });

      }

    } else {
      this.loginServiceService.CreateMaterial(params).subscribe(result => {
        if (result.response == true) {
          this.presentToast('Se creo el Material')
          this.NewMaterial.get('idmaterials').setValue(result.idmaterials);
          this.NewMaterial.get('state').setValue('Por Confirmar');
          this.hidden = true;
          this.hidden1 = false;

        }
        if (result.response == false) {
          this.presentToast('Se Actualizo el Material')
          this.hidden = true;
          this.hidden1 = false;

        }
      }, error => {

      })
    }



  }
  ViewCertificates(certificate) {

    const params = {
      idmaterial_certificate: certificate.idmaterial_certificate
    }
    this.loginServiceService.certificate_material(params).subscribe(result => {
      this.data1 = result.response;
      this.ModalView(result.response)
    }, error => {


    })

  }

  async ModalView(result) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: ViewDocumentPage,
        componentProps: {
          'url': result.url,
          'name': result.name_document
        }
      });

    modal.onDidDismiss().then((detail) => {

    });

    await modal.present();
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

  listmaterial() {
    this.loginServiceService.MaterialCertificate(this.NewMaterial.value.idmaterials).subscribe(result => {
      this.certificates = result.response;
    }, error => {

    })
  }
}
