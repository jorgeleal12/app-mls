import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';
import { TasksService } from '../Services/tasks-service';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    selectedPath = '';
    user
    mail
    idusers
    id


    imgUser = 'https://lh3.googleusercontent.com/-DaZt67ZiMLo/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdcKnHPzSdvF_8nGuW5dbdDc18_iw.CMID/s32-c/photo.jpg';
    pages = [
        {
            section: null,
            routes: [
                {
                    title: 'Inicio',
                    url: '/menu/menu/home',
                    icon: 'home'
                },
            ]
        },
        {
            icon: 'home',
            section: 'Servicios',
            routes: [

                {
                    title: 'Cliente',
                    url: '/menu/menu/client',
                    icon: 'person-add'
                },]
        },
        {
            section: 'Administración',
            routes: [
                {
                    title: 'Materiales',
                    url: '/menu/menu/list-material',
                    icon: 'hammer'
                },
                {
                    title: 'Constructores',
                    url: '/menu/menu/list-builder',
                    icon: 'apps'
                },


            ]
        }
    ];



    constructor(private router: Router, private loginServiceService: LoginServiceService, private tasksService: TasksService, public toastController: ToastController,) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.selectedPath = event.url;
        });
    }

    ngOnInit() {

        this.user = localStorage.getItem("nombres")
        this.mail = localStorage.getItem("email")
        this.idusers = localStorage.getItem("idusers")
        this.id = localStorage.getItem("id")


    }
    close() {
        localStorage.clear();
        this.router.navigate(['/']);
    }


    async presentToast(message) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
    Download() {

        this.presentToast('Guardando Datos')
        this.loginServiceService.search_builder().subscribe(result => {

            this.tasksService.DeleteBuilde(1);
            result.response.forEach(element => {
                this.tasksService.insert_builder(element.idbuilder, element.name_builder, element.identification, element.state, element.name_state, 1);

            });
        }, error => {

        })

        this.loginServiceService.search_materials().subscribe(result => {
            this.tasksService.DeleteMaterial(1);
            result.response.forEach(element => {
                this.tasksService.insert_material(element.idmaterials, element.name_materials, element.name_state, element.state, 1)
            });
        }, error => {

        })

        this.loginServiceService.search_client().subscribe(result => {
            this.tasksService.DeleteCliente(1);
            result.response.forEach(element => {
                this.tasksService.insert_client(element.idclient, element.name_client, element.id_client, element.email, element.phone, element.state, 1, 2).then(tasks => {

                })
                    .catch(error => {
                        console.error(error);
                    });
            });
        }, error => {

        })

        this.loginServiceService.search_account().subscribe(result => {
            this.tasksService.DeleteCliente_account(1);
            result.response.forEach(element => {
                this.tasksService.insert_client_account(element.idclient_account, element.city, element.indications, element.state, element.client_idclient, element.number_acount, element.address, 1, 2)
            });

        }, error => {

        })

        this.loginServiceService.city().subscribe(result => {
            this.tasksService.DeleteCity();
            result.response.forEach(element => {

                this.tasksService.InsertCity(element.departments_dane, element.id_dane, element.id_departament, element.id_departments, element.idmunicipality, element.name_departments, element.name_municipality, element.region, 1)
            });

        }, error => {

        })

        const params = {
            idusers: this.id
        }

        this.loginServiceService.number(params).subscribe(result => {
            this.tasksService.DeleteNumber();
            this.tasksService.insert_number(result.response.idemployees, result.response.number_, result.response.number_end, result.response.number_ini, result.response.idcounter_certificate, result.response.idNumber_cetificate, result.response.Number_cetificate_idNumber_cetificate, 1)


        }, error => {

        })

        this.loginServiceService.imageoffline().subscribe(result => {
            this.tasksService.DeleteImageoffline();

            result.response.forEach(element => {
                this.tasksService.InsertImageoffline(element.idphotos, element.idphotos_service, element.min, element.name_photo, element.photos_idphotos, element.quantity, element.type_network_idtype_network)
            });


        }, error => {

        })


        // this.tasksService.SelectClient().then(tasks => {
        //     console.log(tasks);
        // })
        //     .catch(error => {
        //         console.error(error);
        //     });

        let params1
        this.loginServiceService.inspectores(params1).subscribe(result => {
            // this.tasksService.DeleteCity();
            result.response.forEach(element => {

                this.tasksService.Insert_inspetor(element.id, element.idemployees, element.last_name, element.name)

            });

        }, error => {

        })
    }

    delete_table() {
        this.tasksService.delete_table()
        this.presentToast('Borrando Datos')
    }

}

