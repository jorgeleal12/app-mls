import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service"
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FCM, NotificationData } from '@ionic-native/fcm/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user;
  pass;
  iduser;

  constructor(private LoginServiceService: LoginServiceService, public toastController: ToastController, private router: Router,
    private fcm: FCM) { }

  ngOnInit() {
    this.login();
  }
  ionViewCanEnter() {

    this.login();
  }

  login() {
    if (!localStorage.getItem("idusers")) {

    } else {
      this.router.navigateByUrl('/menu');

    }
  }

  async presentToast(mesajje) {
    const toast = await this.toastController.create({
      message: mesajje,
      duration: 2000
    });
    toast.present();
  }

  LoginUser() {

    if (this.user == undefined || this.pass == undefined) {
      this.presentToast('Campos Vacios')
      return
    }

    if (this.user == '' || this.pass == '') {
      this.presentToast('Campos Vacios')
      return
    }

    this.LoginServiceService.login({ user: this.user, pass: this.pass }).subscribe(result => {

      if (result.response == false) {
        this.presentToast('Usuario o Contraseña Invalido')
        return
      }

      if (result.response == true) {
        localStorage.setItem("idusers", result.data.idusers);
        localStorage.setItem("nombres", result.data.name + " " + result.data.last_name);
        localStorage.setItem("email", result.data.email);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("type", result.data.type);
        localStorage.setItem("idemployees", result.idemployees);
        this.router.navigateByUrl('/menu');
        this.iduser = localStorage.getItem("idusers")
        this.fcm.getToken().then((token: String) =>

          this.LoginServiceService.registerToken({ token: token, iduser: this.iduser }).subscribe(result => {

          }, error => {

          })
        ).catch(error => {
          console.log('error')

        });

      }


    }, error => {

    })
  }


}
