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

  hide = true;

  constructor(
    private formBuilder: NonNullableFormBuilder
  ) { }

  ngOnInit(): void {}

  onLogin(){

  }

}
