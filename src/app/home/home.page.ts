import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from "../Services/login-service.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  total
  constructor(private LoginServiceService: LoginServiceService) {


  }

  ngOnInit() {

    this.total_asignadas();
  }
  total_asignadas() {

    this.LoginServiceService.totalasignadas({ user: localStorage.getItem("id") }).subscribe(result => {
      this.total = result.data.total
    }, error => {

    })
  }

}
