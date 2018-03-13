import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {

username;
  months:any[];
  constructor(private http: Http) { }

  searchProduct(username) {
      return this.http.get('http://127.0.0.1:8000/choice/mydata/' + this.username +'/').map((response: Response) => response.json());
  }
}


