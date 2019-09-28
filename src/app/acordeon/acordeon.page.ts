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
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private launchNavigator: LaunchNavigator,
        private geolocation: Geolocation,
        private loginServiceService: LoginServiceService,
        public modalController: ModalController,
        public toastController: ToastController) {

        this.route.queryParams.subscribe(params => {

            if (this.router.getCurrentNavigation().extras.state) {

                this.data = this.router.getCurrentNavigation().extras
                this.div_service = false;
                this.div_hidden = true;
                this.Service = this.data
            } else {
                this.div_hidden = false;
                this.div_service = true;
                this.Service = new Service();
            }
        });

        this.coords();

    }

    ngOnInit(): void {

    }

    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
    async presentModal() {
        if (this.Service.material == null) {
            const modal: HTMLIonModalElement =
                await this.modalController.create({
                    component: MaterialsPage
                });

            modal.onDidDismiss().then((detail) => {
                if (detail.data.data !== undefined) {
                    this.Service.name_material = detail.data.data.name_materials
                    this.Service.material = detail.data.data.idmaterials
                    this.step.sectionName = 'expanded4';
                }
            });

            await modal.present();

        }
    }

    async  edit_material() {

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: MaterialsPage
            });

        modal.onDidDismiss().then((detail) => {
            if (detail.data.data !== undefined) {
                this.Service.name_material = detail.data.data.name_materials
                this.Service.material = detail.data.data.idmaterials
                this.step.sectionName = 'expanded4';
            }
        });

        await modal.present();
    }


    async ModalBuilder() {
        if (this.Service.construtor == undefined) {
            const modal: HTMLIonModalElement =
                await this.modalController.create({
                    component: BuilderPage
                });

            modal.onDidDismiss().then((detail) => {

                if (detail.data.data !== undefined) {
                    this.Service.construtor = detail.data.data.idbuilder
                    this.Service.name_construtor = detail.data.data.name_builder
                    this.step.sectionName = 'expanded5';
                }
            });

            await modal.present();
        }
    }

    async ModalCetificate() {

        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: CertificatePage,
                componentProps: {
                    'number_service': this.Service.idodi,
                    'type_network': this.Service.type_network_idtype_network,
                    'data': this.Service,

                }

            });

        modal.onDidDismiss().then((detail) => {

            // if (detail !== null) {
            //     this.idbuilder = detail.data.data.idbuilder
            //     this.name_builder = detail.data.data.name_builder
            //     this.state_builder = detail.data.data.name_state
            // }
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
                this.Service.construtor = detail.data.data.idbuilder
                this.Service.name_construtor = detail.data.data.name_builder
                this.step.sectionName = 'expanded5';
            }
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
        this.router.navigateByUrl('menu/menu/asignadas');
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

        this.loginServiceService.SaveService(this.Service).subscribe(result => {
            if (result.response == true) {
                this.presentToast('Se Guardo el Servicio')
            } else {
                this.presentToast('Hay Certificados sin Aprobar')
            }
        }, error => {

        })
    }

    DeleteMaterial() {
        this.Service.name_material = '';
        this.Service.material = null;
    }
    DeleteConstructor() {
        this.Service.name_construtor = '';
        this.Service.construtor = null;
    }

    type_red() {
        console.log('1')
        const params = {
            type: this.Service.type_service_idtype_service
        }
        this.loginServiceService.type_red(params).subscribe(result => {
            this.networks = result.response
        }, error => {

        })
    }
}
