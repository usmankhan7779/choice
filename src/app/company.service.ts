import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "./Config";
@Injectable()
export class CompanyService {


username;
  constructor(private https: Http) {}
id;

  searchProduct(username) {
  // let headers = new Headers();
   
  // headers.append('Content-Type', 'application/json');
  // headers.append('Access-Control-Allow-Headers', 'Content-Type');
  // headers.append('Access-Control-Allow-Methods', 'GET');
    return this.https.get(Config.api +'mydata/'+ username +'/' ) .map((response: Response)  => response.json() );
 // return this.https.get('http://192.168.30.52:9000/choice/mydata/'+ username + '/').map((response: Response) => response.json());

    }
}


