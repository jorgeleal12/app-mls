import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  asignada = 0;
  rechazadas = 0;
  constructor(private LoginServiceService: LoginServiceService, private router: Router) {


  }

  ngOnInit() {

    this.total_asignadas();
  }
  total_asignadas() {

    this.LoginServiceService.totalasignadas({ user: localStorage.getItem("id") }).subscribe(result => {


      if (result.search_rech != null) {
        this.rechazadas = result.search_rech.total
      }

      if (result.data != null) {
        this.asignada = result.data.total - this.rechazadas
      }
    }, error => {

    })
  }

  asignadas() {

    this.router.navigateByUrl('menu/menu/asignadas');
  }

}
