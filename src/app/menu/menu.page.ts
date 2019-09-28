import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

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
                    title: 'Servicios',
                    url: '/menu/home',
                    icon: 'bookmark'
                }]
        },
        {
            section: 'Administración',
            routes: [
                {
                    title: 'Materiales',
                    url: '/menu/home',
                    icon: 'build'
                },
                {
                    title: 'Constructores',
                    url: '/menu/home',
                    icon: 'apps'
                },
                {
                    title: 'Cliente',
                    url: '/menu/home',
                    icon: 'person-add'
                },
                {
                    title: 'Cuentas',
                    url: '/menu/home',
                    icon: 'briefcase'
                },
            ]
        }
    ];



    constructor(private router: Router) {
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

}

