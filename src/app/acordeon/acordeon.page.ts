import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoginServiceService } from '../Services/login-service.service';

import { NgForm } from '@angular/forms'; @Component({
    selector: 'app-acordeon',
    templateUrl: './acordeon.page.html',
    styleUrls: ['./acordeon.page.scss'],
})
export class AcordeonPage implements OnInit {
    step = { sectionName: null };
    data: any;

    priority
    sede
    programming
    Attention
    gas_type
    type_service
    type_network
    address
    addrees_ini
    photos_services


    constructor(private route: ActivatedRoute, private router: Router, private launchNavigator: LaunchNavigator, private geolocation: Geolocation, private loginServiceService: LoginServiceService) {

        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras
                this.priority = this.data.Attention
                //     this.sede = this.data.
                this.programming = this.data.date_programming
                this.Attention = this.data.Attention
                //                 this.gas_type = this.data.
                this.type_service = this.data.type
                this.type_network = this.data.type_network
                this.address = this.data.address
            }
        });

        this.coords();
        //this.photo_service();
    }

    ngOnInit(): void {

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

        this.launchNavigator.navigate(this.address, options)
            .then(
                success => console.log('Launched navigator'),
                error => console.log('Error launching navigator', error)
            );
    }

    photo_service() {
        let params = {
            type_network: this.type_network
        }
        this.loginServiceService.photos_service(params).subscribe(result => {
            this.photos_services = result.response
        }, error => {

        })
    }

    photos_add(photos_service) {

        this.router.navigate(['menu/menu/fotografias'], photos_service);
    }
}
