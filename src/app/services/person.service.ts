import { PersonDto } from './../models/personDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { globalUrlApi } from 'src/assets/global-variables';
import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly APIurl = `${globalUrlApi}person`;

  constructor(private httpClient: HttpClient) { }

  getPersonPerfil(id: number) : Observable<PersonDto> {
    return this.httpClient.get<PersonDto>(`${this.APIurl}/${id}`);
  }

  updatePerson(person: Partial<Person>, id: string){
    var personDto = {
      fullName: person.fullName,
      email: person.email,
      cpf: person.cpf,
      userName: person.userName,
      password: person.password
    }

    return this.httpClient.put(`${this.APIurl}/${id}`, personDto, { observe: 'response' })
  }
}
