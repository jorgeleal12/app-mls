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
                    url: '/menu/home',
                    icon: 'home'
                },
            ]
        },
        {
            icon: 'home',
            section: 'Servicios',
            routes: [
                {
                    title: 'Acordeon',
                    url: '/menu/acordeon',
                    icon: 'apps'
                },
                {
                    title: 'Cuentas',
                    url: '/menu/home',
                    icon: 'briefcase'
                },
                {
                    title: 'Servicios',
                    url: '/menu/home',
                    icon: 'bookmark'
                },
                {
                    title: 'Certificados',
                    url: '/menu/home',
                    icon: 'document'
                }]
        },
        {
            section: 'Administración',
            routes: [
                {
                    title: 'Sedes',
                    url: '/menu/home',
                    icon: 'home'
                },
                {
                    title: 'Materiales',
                    url: '/menu/home',
                    icon: 'build'
                },
                {
                    title: 'Constructores',
                    url: '/menu/home',
                    icon: 'apps'
                }
                , {
                    title: 'Cerrar Sesión',
                    icon: 'apps',
                    url: ''
                    ,
                }]
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

