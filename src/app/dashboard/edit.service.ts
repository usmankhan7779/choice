import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Config} from "../Config";
@Injectable()
export class EditService {

  constructor(private http: Http) { }
  

editTodoList(id) {
  console.log('mmmmmmmmmmmmmmmmmmmmm');
  console.log(id)
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put(Config.api + 'dataup/'+ id ,
  {headers: headers}).map((response: Response) => response.json());
  }

}
