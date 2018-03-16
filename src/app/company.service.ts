import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {

username:any[];
  
  constructor(private http: Http) { }

  searchProduct(username) {
  
    let headers = new Headers();
headers.append('Content-Type', 'application/json');
      return this.http.get(Config.api +'mydata/'+ username +'' ,{ headers: headers }).map((response: Response) => response.json());
  }
}


