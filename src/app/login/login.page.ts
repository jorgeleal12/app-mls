import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service"
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user;
  pass;

  constructor(private LoginServiceService: LoginServiceService, public toastController: ToastController, private router: Router) { }

  ngOnInit() {

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
        this.router.navigateByUrl('/menu');
      }


    }, error => {

    })
  }


}
