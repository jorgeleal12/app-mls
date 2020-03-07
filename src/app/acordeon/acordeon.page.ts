import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoginServiceService } from '../Services/login-service.service';
import { MaterialsPage } from '../materials/materials.page';
import { ModalController } from '@ionic/angular';
import { BuilderPage } from '../builder/builder.page';
import { Service } from '../model/Service.model';
import { ToastController } from '@ionic/angular';
import { CertificatePage } from '../certificate/certificate.page';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
import { ClientServicePage } from '../client-service/client-service.page';
import { AcountServicePage } from '../acount-service/acount-service.page';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SendImagePage } from '../send-image/send-image.page';
import { ViewImageSPage } from '../view-image-s/view-image-s.page';



@Component({
    selector: 'app-acordeon',
    templateUrl: './acordeon.page.html',
    styleUrls: ['./acordeon.page.scss'],
})
export class AcordeonPage implements OnInit {
    step = { sectionName: null };
    public data: any;


    addrees_ini
    div_hidden = true;
    div_service = true;
    Service = new Service();
    photos_services
    networks
    NewService: FormGroup;
    hidden;
    type2
    type3
    materials = [];


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private launchNavigator: LaunchNavigator,
        private geolocation: Geolocation,
        private loginServiceService: LoginServiceService,
        public modalController: ModalController,
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController, ) {


        this.NewService = new FormGroup({
            number_service: new FormControl(),
            name_priority: new FormControl(),
            date_programming: new FormControl(),
            Attention: new FormControl(),
            name_atencion: new FormControl(),
            name_gas: new FormControl(),
            name_type: new FormControl(),
            name_network: new FormControl(),
            contract_name: new FormControl(),
            client: new FormControl(null),
            name_client: new FormControl(),
            identifacation: new FormControl(),
            phone: new FormControl(),
            type_service_idtype_service: new FormControl(),
            type_network_idtype_network: new FormControl(),
            address: new FormControl(),
            idodi: new FormControl(),
            name_state: new FormControl(),
            state: new FormControl(),
            name_material: new FormControl(),
            name_construtor: new FormControl(),
            priority: new FormControl(),
            material: new FormControl(),
            construtor: new FormControl(),
            service_type_idservice_type: new FormControl(),
            name_address: new FormControl(),
            number_acount: new FormControl(),
            indications: new FormControl(),
            user: new FormControl(),
            user_type: new FormControl(),
            department_iddepartment: new FormControl(),
            city: new FormControl(),
            id: new FormControl(),
            type_gas: new FormControl(),
        })





        this.route.queryParams.subscribe(params => {

            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras
                this.div_service = false;
                this.div_hidden = true;
                this.NewService.get('number_service').setValue(this.data.idodi);
                this.NewService.get('name_priority').setValue(this.data.name_priority);
                this.NewService.get('date_programming').setValue(this.data.date_programming);
                this.NewService.get('Attention').setValue(this.data.Attention);
                this.NewService.get('name_atencion').setValue(this.data.name_atencion);
                this.NewService.get('name_gas').setValue(this.data.name_gas);
                this.NewService.get('type_gas').setValue(this.data.type_gas);
                this.NewService.get('name_type').setValue(this.data.name_type);
                this.NewService.get('name_network').setValue(this.data.name_network);
                this.NewService.get('contract_name').setValue(this.data.contract_name);
                this.NewService.get('client').setValue(this.data.client);
                this.NewService.get('name_client').setValue(this.data.name_client);
                this.NewService.get('identifacation').setValue(this.data.identifacation);
                this.NewService.get('phone').setValue(this.data.phone);
                this.NewService.get('type_service_idtype_service').setValue(this.data.type_service_idtype_service);

                this.NewService.get('address').setValue(this.data.address);
                this.NewService.get('idodi').setValue(this.data.idodi);
                this.NewService.get('name_state').setValue(this.data.name_state);
                this.NewService.get('state').setValue(this.data.state);
                this.NewService.get('name_material').setValue(this.data.name_material);
                this.NewService.get('name_construtor').setValue(this.data.name_construtor);
                this.NewService.get('priority').setValue(this.data.priority);
                // this.NewService.get('material').setValue(this.materials);
                this.NewService.get('construtor').setValue(this.data.construtor);
                this.NewService.get('service_type_idservice_type').setValue(this.data.service_type_idservice_type);

                this.search_address();
                this.hidden = true;
                this.type_red()

            } else {

                this.data = this.router.getCurrentNavigation().extras


                this.div_hidden = false;
                this.div_service = true;
                this.NewService.reset();
                this.hidden = false;
            }
        });

        this.coords();

    }

    ngOnInit(): void {
        this.NewService.get('user').setValue(localStorage.getItem("idemployees"));
        this.NewService.get('user_type').setValue(localStorage.getItem("type"));
        this.NewService.get('id').setValue(this.data.id);

        if (this.NewService.value.user_type == 2) {
            this.type2 = false;
        }

        if (this.NewService.value.user_type == 3) {
            this.type3 = false;
        }

        if (this.NewService.value.idodi) {
            this.loginServiceService.SearchMaterial(this.NewService.value).subscribe(result => {
                this.materials = result.response;
            }, err => {

            })
        }
    }
    edit() {
        this.hidden = false;
        this.div_hidden = false;
        this.div_service = true;
        this.search_address();
        this.NewService.get('type_network_idtype_network').setValue(this.data.type_network_idtype_network);
    }
    search_address() {
        this.loginServiceService.search_address(this.NewService.value.address).subscribe(result => {
            this.NewService.get('name_address').setValue(result.response.address);
            this.NewService.get('number_acount').setValue(result.response.number_acount);
            this.NewService.get('indications').setValue(result.response.indications);
            this.NewService.get('city').setValue(result.response.city);

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


    //modal para los materiales
    async presentModal() {

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: MaterialsPage
            });

        modal.onDidDismiss().then((detail) => {

            if (detail.data.data !== undefined) {
                this.materials.push({
                    materials_idmaterials: detail.data.data.idmaterials,
                    name_materials: detail.data.data.name_materials

                })
                this.step.sectionName = 'expanded4';
            }
        });

        await modal.present();

    }

    async  edit_material(i, material) {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: MaterialsPage
            });

        modal.onDidDismiss().then((detail) => {
            if (detail.data.data !== undefined) {
                material.name_materials = detail.data.data.name_materials
                material.materials_idmaterials = detail.data.data.idmaterials
                this.step.sectionName = 'expanded4';
            }
        });

        await modal.present();
    }



    async client() {
        if (this.NewService.value.client == undefined) {
            const modal: HTMLIonModalElement =
                await this.modalController.create({
                    component: ClientServicePage,
                });

            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('client').setValue(detail.data.data.idclient)
                    this.NewService.get('name_client').setValue(detail.data.data.name_client)
                    this.NewService.get('identifacation').setValue(detail.data.data.id_client)
                    this.NewService.get('phone').setValue(detail.data.data.phone)
                    this.step.sectionName = 'expanded3';
                }
            });
            await modal.present();
        }
    }

    async edit_client() {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ClientServicePage,
            });

        modal.onDidDismiss().then((detail) => {
            if (detail.data.data !== undefined) {
                this.NewService.get('client').setValue(detail.data.data.idclient)
                this.NewService.get('name_client').setValue(detail.data.data.name_client)
                this.NewService.get('identifacation').setValue(detail.data.data.id_client)
                this.NewService.get('phone').setValue(detail.data.data.phone)
                this.step.sectionName = 'expanded3';
            }
        });

        await modal.present();
    }

    DeleClient() {
        this.NewService.get('client').setValue(null)
        this.NewService.get('name_client').setValue('')
        this.NewService.get('identifacation').setValue('')
        this.NewService.get('phone').setValue('')
        this.step.sectionName = 'expanded3';
    }

    async acount() {
        if (this.NewService.value.client == null) {
            this.presentToast('Seleccione Primero un Cliente')
            return;
        }
        if (this.NewService.value.address == undefined) {
            const modal: HTMLIonModalElement =
                await this.modalController.create({
                    component: AcountServicePage,
                    componentProps: {
                        'idclient': this.NewService.value.client,
                    }
                });

            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('address').setValue(detail.data.data.idclient_account)
                    this.NewService.get('name_address').setValue(detail.data.data.address)
                    this.NewService.get('number_acount').setValue(detail.data.data.number_acount)
                    this.NewService.get('indications').setValue(detail.data.data.indications)
                    this.NewService.get('city').setValue(detail.data.data.city)
                    this.step.sectionName = 'expanded2';
                }
            });

            await modal.present();
        }
    }

    async edit_acount() {
        if (this.NewService.value.client == null) {
            this.presentToast('Seleccione Primero un Cliente')
            return;
        }

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: AcountServicePage,
                componentProps: {
                    'idclient': this.NewService.value.client,
                }
            });

        modal.onDidDismiss().then((detail) => {
            if (detail.data.data !== undefined) {
                this.NewService.get('address').setValue(detail.data.data.idclient_account)
                this.NewService.get('name_address').setValue(detail.data.data.address)
                this.NewService.get('number_acount').setValue(detail.data.data.number_acount)
                this.NewService.get('indications').setValue(detail.data.data.indications)
                this.NewService.get('city').setValue(detail.data.data.city)
                this.step.sectionName = 'expanded2';
            }
        });

        await modal.present();
    }


    async ModalBuilder() {
        if (this.NewService.value.construtor == undefined) {
            const modal: HTMLIonModalElement =
                await this.modalController.create({
                    component: BuilderPage
                });

            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.NewService.get('construtor').setValue(detail.data.data.idbuilder)
                    this.NewService.get('name_construtor').setValue(detail.data.data.name_builder)
                    this.step.sectionName = 'expanded5';
                }
            });

            await modal.present();
        }
    }

    async ModalCetificate() {
        if (this.NewService.value.idodi == null) {
            this.presentToast('Guarde Primero')
            return;
        }

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: CertificatePage,
                componentProps: {
                    'number_service': this.NewService.value.idodi,
                    'type_network': this.data.type_network_idtype_network,
                    'data': this.NewService.value,

                }

            });

        modal.onDidDismiss().then((detail) => {
        });

        await modal.present();
    }

    async  edit_builder() {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: BuilderPage
            });
        modal.onDidDismiss().then((detail) => {
            if (detail.data.data !== undefined) {
                this.NewService.get('construtor').setValue(detail.data.data.idbuilder)
                this.NewService.get('name_construtor').setValue(detail.data.data.name_builder)
                this.step.sectionName = 'expanded5';
            }
        });

        await modal.present();
    }

    async ModalImage() {

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: SendImagePage,
                componentProps: {
                    data: this.NewService.value
                }
            });
        modal.onDidDismiss().then((data) => {

        });
        await modal.present();
    }

    async ModalViewImage() {

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: ViewImageSPage,
                componentProps: {
                    data: this.NewService.value
                }
            });
        modal.onDidDismiss().then((data) => {

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
    back() {
        // this.router.navigateByUrl('menu/menu/asignadas');
        // console.log(this.NewService.value.id)
        this.router.navigate(['menu/menu/asignadas'], this.NewService.value.id);
    }


    coords() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.addrees_ini = resp.coords.latitude + "," + resp.coords.longitude

        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }
    send_address() {
        let options: LaunchNavigatorOptions = {
            start: this.addrees_ini,
            app: this.launchNavigator.APP.GOOGLE_MAPS
        }

        this.launchNavigator.navigate(this.Service.address, options)
            .then(
                success => console.log('Launched navigator'),
                error => console.log('Error launching navigator', error)
            );
    }
    save() {
        if (this.NewService.value.client == null) {
            this.presentToast('Seleccione Un cliente')
            return;
        }
        if (this.NewService.value.address == null) {
            this.presentToast('Seleccione Una Dirección')
            return;
        }
        this.NewService.get('material').setValue(this.materials)
        this.loginServiceService.SaveService(this.NewService.value).subscribe(result => {
            if (result.response == true) {
                this.NewService.get('idodi').setValue(result.idodi)
                this.NewService.get('number_service').setValue(result.idodi)
                this.NewService.get('state').setValue(result.state)
                this.presentToast('Se Guardo el Servicio')
                this.view(result.search)
            } else {
                console.log(1)
                this.div_hidden = true;
                this.div_service = false;
                this.hidden = true
                this.presentToast('Se Actualizo el Servicio')
            }
        }, error => {

        })
    }


    view(data) {
        this.NewService.get('number_service').setValue(data.idodi);
        this.NewService.get('name_priority').setValue(data.name_priority);
        this.NewService.get('date_programming').setValue(data.date_programming);
        this.NewService.get('Attention').setValue(data.Attention);
        this.NewService.get('name_atencion').setValue(data.name_atencion);
        this.NewService.get('name_gas').setValue(data.name_gas);
        this.NewService.get('type_gas').setValue(data.type_gas);
        this.NewService.get('name_type').setValue(data.name_type);
        this.NewService.get('name_network').setValue(data.name_network);
        this.NewService.get('contract_name').setValue(data.contract_name);
        this.NewService.get('client').setValue(data.client);
        this.NewService.get('name_client').setValue(data.name_client);
        this.NewService.get('identifacation').setValue(data.identifacation);
        this.NewService.get('phone').setValue(data.phone);
        this.NewService.get('type_service_idtype_service').setValue(data.type_service_idtype_service);

        this.NewService.get('address').setValue(data.address);
        this.NewService.get('idodi').setValue(data.idodi);
        this.NewService.get('name_state').setValue(data.name_state);
        this.NewService.get('state').setValue(data.state);
        this.NewService.get('name_material').setValue(data.name_material);
        this.NewService.get('name_construtor').setValue(data.name_construtor);
        this.NewService.get('priority').setValue(data.priority);
        // this.NewService.get('material').setValue(this.materials);
        this.NewService.get('construtor').setValue(data.construtor);
        this.NewService.get('service_type_idservice_type').setValue(data.service_type_idservice_type);
    }

    DeleteMaterial(i: any, material: any): void {

        this.materials.splice(i, 1);


        // this.materials = this.materials.filter(d => d.i !== i);
        // console.log(this.materials)
        // if (data.idactivities_obr != null) {
        //   this.ActivitiesService.delete_activities(data).subscribe(result => {

        //   }, error => {

        //   })
        // }
    }


    DeleteConstructor() {
        this.NewService.get('name_construtor').setValue('')
        this.NewService.get('construtor').setValue(null)
    }

    type_red() {
        const params = {
            type: this.NewService.value.type_service_idtype_service
        }
        this.loginServiceService.type_red(params).subscribe(result => {
            this.networks = result.response
        }, error => {

        })
    }

    async atendido() {

        const alert = await this.alertController.create({
            header: 'Confirmación!',
            message: 'Desea Cambiar  El Estado a Atendido',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {

                    }
                }, {
                    text: 'Si',
                    handler: () => {
                        let number = 5
                        this.change_active();
                    }
                }
            ]
        });

        await alert.present();
    }

    change_active() {
        this.loginServiceService.change_active_service(this.NewService.value).subscribe(result => {

            if (result.response == true) {
                this.presentToast('Se Cambio el estado del Servicio')
            } else {
                this.presentToast('Se encuentran Certificados Activos')
            }
        }, error => {

        })
    }
}
