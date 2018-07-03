import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LanguageService {
  language: any;

  constructor(private http: HttpClient) {

  }

  getCommonLanguage(lankey) {
    var configUrl = '../assets/i18n/' + lankey + '.json';
    return this.http.get(configUrl);
  }
}