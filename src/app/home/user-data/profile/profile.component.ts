import { MatSnackBar } from '@angular/material/snack-bar';
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
    private personService: PersonService,
    private _snackBar: MatSnackBar
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
    var perfilObject = this.perfilForm.value;

    if (
      perfilObject.fullName === '' ||
      perfilObject.email === '' ||
      perfilObject.cpf === '' ||
      perfilObject.userName === ''
    ) {
      this.openSnackBar('Todos os campos obrigatórios devem ser preenchidos.')

    } else if ( perfilObject.password != perfilObject.confirmPassword ) {
      this.openSnackBar('Senhas não coincidem.')

    } else {
      var id = this.utilsService.getParamUrl(2);
      this.personService.updatePerson(this.perfilForm.value, id)
        .subscribe({
          next: (n) => { this.updateSuccess() },
          error: (r) => { this.updateError(r.error) }
        })
    }

  }

  onBack(){
    this._location.back();
  }

  openSnackBar(message: string){
    this._snackBar.open(message, 'OK', { duration: 5000 })
  }

  updateSuccess(){
    this.openSnackBar('Usuário atualizado com sucesso.')
  }

  updateError(message: string){
    this.openSnackBar(message)
  }
}
