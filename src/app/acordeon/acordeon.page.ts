import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-acordeon',
    templateUrl: './acordeon.page.html',
    styleUrls: ['./acordeon.page.scss'],
})
export class AcordeonPage implements OnInit {
    informationItems = [
        {
            id: 0,
            img: '',
            title: 'Servicio',
            subtitle: 'Información general de la Orden',
            text: '',
            open: false
        },
        {
            id: 1,
            img: '',
            title: 'Ubicación',
            subtitle: 'Información general de la Ubicación',
            text: 'No se ha seleccionado ningun cliente',
            open: false
        }
    ];

    automaticClose = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleSection(index) {
        this.informationItems[index].open = !this.informationItems[index].open;

        if (this.automaticClose && this.informationItems[index].open) {
            this.informationItems.filter((item, itemIndex) => itemIndex !== index)
                .map(item => item.open = false);
        }
    }

}
