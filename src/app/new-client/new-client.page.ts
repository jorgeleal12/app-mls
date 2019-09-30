import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName } from "@angular/forms";
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  imgUser = '../assets/iconos/network.svg'

  NewCliente: FormGroup;
  constructor() {





    this.NewCliente = new FormGroup({
      name_cliente: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
  }

}
