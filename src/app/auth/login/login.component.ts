import { LoginService } from './../../services/login.service';
import { Credentials } from './../../models/credentials';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    userName: [''],
    password: ['']
  });

  credentials: Credentials | undefined;

  hide = true;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {}

  onLogin(){
    this.credentials = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }

    this.loginService.userLogin(this.credentials)
  }

}
