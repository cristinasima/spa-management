import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {

  private jsonUrl: string;


  constructor(private http: HttpClient) {
    this.jsonUrl = './assets/to-do-list.json';
  }


  getList() {
    //TODO add type for json data
    return this.http.get<any>(this.jsonUrl);
  }

}
