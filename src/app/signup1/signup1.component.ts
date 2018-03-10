import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor,FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import swal from 'sweetalert2'; 
import {MatSelect} from '@angular/material';
import { PasswordValidation } from './password-validator.component';

//import { FormControl, FormGroup } from '@angular/forms';
//import { signupdataService } from '../signup1/signupdata.service';
//import { signupuserdata } from "./signup1data.service";
// import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
// import { TOUCHEND_HIDE_DELAY } from '@angular/material';

//import {signupuserdata} from './signup1data.service';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})

export class Signup1Component implements OnInit {
 state;
  city;
 
  confirmpassword;
  signupForm: FormGroup;
 private next:any;
  model:any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
  
  flag = true;
  date = new FormControl(new Date());

  emailexist :boolean =false ;

 
  constructor(public router: Router,private fb: FormBuilder, private http: HttpClient,private route: ActivatedRoute, private sg: SimpleGlobal) { }

  ngOnInit() {
    this.states();
  // this.city();
    this.signupForm = this.fb.group({
      'fname': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
     'lname': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
     'email': ['', Validators.compose([Validators.required, Validators.pattern(this.email)])],
       'username': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/)])],
       'phone':['', Validators.compose([Validators.required, Validators.pattern(this.digitsOnly)])],
       'dob': ['', Validators.compose([Validators.required])],
       'state': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
       'country': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
       'city': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
     'confirmpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    
    });
  }
  sweetalertsignup1() {
    swal({
        text: "Register Successflluy!",
        title: "Choice Genie",
        type: "success",
        showConfirmButton: false,
        //     confirmButtonColor: "#DD6B55",
        timer: 1200,
        confirmButtonText: "OK",

    })
        this.router.navigate(['/pages/login'])
    {

        // swal("Login Successflluy!", "Choice Genie", "success", ).then(function () {
        //     this.router.navigate(['/home'])
        // });


        // this.router.navigate(['/home'])  

    };
}
  onChange(e) {
    alert(e)
  }
  check(e) {
    console.log(this.model)
}
emailauthentication() {
  // alert(this.premiseID.toString().length)
  //  alert('hello');
  // if(this.premiseID&&this.premiseID.toString().length===17) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.get(Config.api +'authenticade_code/'+'',{ headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
          console.log(Res);
        //     this.state= Res[0].state;
        //  Res[0].state=this.model;
       // this.model.email = Res;
         

          // this.data.changeProducts(this.sg['products']);

      });
}
  states() {
    // alert(this.premiseID.toString().length)
    //  alert('hello');
    // if(this.premiseID&&this.premiseID.toString().length===17) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get(Config.api + 'state/',{ headers: headers })

        //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
        .subscribe(Res => {
            console.log(Res);
          //     this.state= Res[0].state;
          //  Res[0].state=this.model;
            this.state = Res;
           

            // this.data.changeProducts(this.sg['products']);

        });
}
cities() {
  // alert(this.premiseID.toString().length)
  //  alert('hello');
 

  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.get(Config.api +'city/'+ this.model.state + '',{ headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
          console.log(Res);
          //  this.sQuestion = Res[0].sQuestion;
          // this.state = Res[0].state;
          this.city = Res;


          // this.data.changeProducts(this.sg['products']);

      });
}
Email() {
  // alert(this.premiseID.toString().length)
  //  alert('hello');
  console.log("CHOICE GENIE",this.model);

  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.put('https:/127.0.0.1:8000/authenticade_code/'+ this.model.state + '',{ headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
          console.log(Res);
          console.log(this.model);
          //  this.sQuestion = Res[0].sQuestion;
          // this.state = Res[0].state;
         


          // this.data.changeProducts(this.sg['products']);

      });

}
  signupuserdata() {
    //alert('hello');
    console.log("CHOICE GENIE",this.model);

    let headers = new HttpHeaders(); 


        headers.append('Content-Type', 'application/json');
        // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
        this.http.post(Config.api + 'signup1/', this.model, { headers: headers })


        //   // this.http.post(Config.api + 'signup/'+ this.zip_code +'', {"premiseid": this.premiseID +'', {headers: headers})
          .subscribe(Res => {
            console.log(Res);
           // this.next = Res[0].next;
           
           console.log(this.model);
        //     //    this.state = Res[0].state;
        //     //this.sg['products'] = Res.json()['Results'];
        //     //this.data.changeProducts(this.sg['products']);

          });
        //}

        //    this.state = Res[0].state;
        //this.sg['products'] = Res.json()['Results'];
        //this.data.changeProducts(this.sg['products']);

      
    //}


  }

}


