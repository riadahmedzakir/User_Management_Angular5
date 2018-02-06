import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class LoginService {
  userList: User[];

  constructor() {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', '[{ "id": "0", "userName": "Riad_Zakir", "firstName": "Riad", "lastName": "Zakir", "password": "1234", "userType": "admin" }, { "id": "1", "userName": "Zakir_Riad", "firstName": "Zakir", "lastName": "Riad", "password": "1234", "userType": "user" }]');
    } else {
      this.userList = JSON.parse(localStorage.getItem('users'));
    }
  }
  getUserList(userName: string, password: string): boolean {
    //console.log(userName, password);
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].userName === userName && this.userList[i].password === password) {
        return true;
      } else {
        return false;
      }
    }
  }

  addNewUser() {

  }
}