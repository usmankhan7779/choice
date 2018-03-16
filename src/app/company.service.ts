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
<<<<<<< HEAD
      return this.http.get('http://127.0.0.1:8000/choice/mydata/' + this.username +'/', { headers: headers }).map((response: Response) => response.json());
=======
      return this.http.get(Config.api +'mydata/'+ username +'' ,{ headers: headers }).map((response: Response) => response.json());
>>>>>>> c764f652eb2d7e1972a3017ec14b5e4fb6252fb0
  }
}


