import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-acordeon',
    templateUrl: './acordeon.page.html',
    styleUrls: ['./acordeon.page.scss'],
})
export class AcordeonPage implements OnInit {
    step = {sectionName: null};

    constructor() {
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

}
