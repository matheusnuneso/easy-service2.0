import { PersonService } from './../../../services/person.service';
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
    userName: [''],
    password: [''],
    confirmPassword: [''],
  });

  constructor(
    private _location: Location,
    private formBuilder: NonNullableFormBuilder,
    private utilsService: UtilsService,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    var id = Number(this.utilsService.getParamUrl(2));

    this.personService.getPersonPerfil(id).subscribe((data) => {

        this.perfilForm.patchValue({
          fullName: data.fullName,
          email: data.email,
          cpf: data.cpf,
          userName: data.userName
        })

      })
  }

  onUpdate(){
    var id = this.utilsService.getParamUrl(2);
    this.personService.updatePerson(this.perfilForm.value, id).subscribe((data) => {
      console.log(data)
    })
  }

  onBack(){
    this._location.back();
  }

}
