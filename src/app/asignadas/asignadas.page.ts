import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-asignadas',
  templateUrl: './asignadas.page.html',
  styleUrls: ['./asignadas.page.scss'],
})
export class AsignadasPage implements OnInit {

  constructor(private LoginServiceService: LoginServiceService, private router: Router) { }


  cars
  ngOnInit() {
    this.search_asignadas()
  }

  search_asignadas() {
    let params = { user: localStorage.getItem("id") }
    this.LoginServiceService.seach_asignadas(params).subscribe(result => {
      this.cars = result.data
    }, error => {

    })

  }

  servicio(car) {

    this.router.navigate(['menu/menu/servicio'], car);
  }

}
