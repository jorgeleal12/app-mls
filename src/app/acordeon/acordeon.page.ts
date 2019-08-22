import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


    constructor(private route: ActivatedRoute, private router: Router) {

        this.route.queryParams.subscribe(params => {

            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras
                console.log(this.data)

                this.priority = this.data.Attention
                //     this.sede = this.data.
                //         this.programming = this.data.
                //             this.Attention = this.data.
                //                 this.gas_type = this.data.
                this.type_service = this.data.type
                this.type_network = this.data.type_network
            }
        });

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
}
