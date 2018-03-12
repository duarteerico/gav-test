import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(cpf){
    let user = localStorage.getItem(cpf);

    if (user && user != "undefined" && user != "null") {
      return JSON.parse(user);
    }
  }

  addUser(user){
    return localStorage.setItem(user.cpf, JSON.stringify(user));
  }

  updateUser(user){
    let value = localStorage.getItem(user.cpf);

    localStorage.removeItem(value)

    return localStorage.setItem(user.cpf, JSON.stringify(user));
  }

  deleteUser(cpf){
    let value = localStorage.getItem(cpf);

    return localStorage.removeItem(value)
  }

}
