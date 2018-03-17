import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {


username:any[];
  constructor(private http: Http) { }

  searchProduct(username) {
    const headers = new Headers();
headers.append('Content-Type', 'application/json');
      return this.http.get(Config.api +'mydata/'+ username +'' ,{ headers: headers }).map((response: Response)  => response.json());
     // return this.http.get('http://127.0.0.1:8000/choice/mydata/' + username +'', { headers: headers }).map((response: Response) => response.json());
    
    }
}


