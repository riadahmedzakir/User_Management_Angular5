import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { LanguageService } from './../language.service';
import { User } from './../user.model';
import * as $ from 'jquery';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Login Page";
  titleStatus: boolean = true;
  isValid: boolean = true;
  loggedUser: string;
  localizationObj: any;
  error: boolean = false;
  //activateModal: boolean = false;
  //userList: User[];
  userModel = {
    id: '',
    userName: '',
    firstName: '',
    lastName: '',
    password: '',
    userType: ''
  }

  constructor(private loginService: LoginService, private modalService: NgbModal, private languageService: LanguageService) {
    //this.userList = loginService.getUserList();
  }

  getLocalizationData() {
    var promise = new Promise((resolve, reject) => {
      if (this.error) {
        reject();
      } else {
        this.languageService.getCommonLanguage('en-US')
          .subscribe((data) => {
            this.localizationObj = data;
            // console.log(this.language);
          }, err => console.log(err), () => {
            resolve();
          });
      }
    });
    return promise;
  }

  ngOnInit() {
    // debugger;
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
    this.getLocalizationData().then(
      () => {
        console.log(this.localizationObj);
      }
    );
    // console.log(this.localizationObj);
  }

  changeTitle() {
    if (this.titleStatus) {
      this.title = "Registration Page";
      this.titleStatus = false;
    } else {
      this.title = "Login Page";
      this.titleStatus = true;
    }
  }

  onRegistrationSubmit() {
    console.log("Registration Submit Works");
  }

  onLoginSubmit(content) {
    this.isValid = this.loginService.getUserList(this.userModel.userName, this.userModel.password);

    if (this.isValid) {
      //this.activateModal = true;
      //this.modalService.open(content);
      this.loggedUser = this.userModel.userName;
      this.modalService.open(content);
    }
    // console.log(this.userModel.userName, this.userModel.password);
    // console.log(this.isValid);
  }
}
