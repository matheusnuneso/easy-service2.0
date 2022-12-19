import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { UtilsService } from './../../../services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hide = true;

  perfilForm = this.formBuilder.group({
    fullName: [''],
    email: [''],
    cpf: [''],
    password: [''],
    confirmPassword: [''],
  });

  constructor(
    private _location: Location,
    private formBuilder: NonNullableFormBuilder,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    var id = Number(this.utilsService.getParamUrl(2));


  }

  onUpdate(){
    console.log(this.perfilForm.value)
  }

  onBack(){
    this._location.back();
  }

}
