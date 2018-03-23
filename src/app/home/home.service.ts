import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class HomeService {

  months:any[];
  constructor(private http: Http) { }

  searchProducts(id,page) {
<<<<<<< HEAD
      return this.http.get(Config.api+'data_against_zipcode/'+id+'?page='+page).map((response: Response) => response.json());
     // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
=======
     // return this.http.get(Config.api+'data_against_zipcode/'+id+'?page='+page).map((response: Response) => response.json());
      return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
>>>>>>> 15623c51ef3d13ae30e2731e1b5df9fc073ba7fc
  }
}
