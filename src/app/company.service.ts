import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {


username;
  constructor(private https: Http) {}


  searchProduct(username) {
  let headers = new Headers();
   
  headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Headers', 'Content-Type');
  // headers.append('Access-Control-Allow-Methods', 'GET');
    return this.https.get(Config.api +'mydata/'+ username +'', { headers: headers } ) .map((response: Response)  => response.json());
  // return this.https.get('http://192.168.30.189:9000/choice/mydata/' + username +'', { headers: headers }).map((response: Response) => response.json());

    }
}


