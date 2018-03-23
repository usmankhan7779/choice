
import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


import { Config } from '../../Config';
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
// import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent implements OnInit {
  state;
  city;
  signupForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;

  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  //constructor() { }
  
  ngOnInit() {
    // this.company();
    
    this.signupForm = this.fb.group({
      'zipcode': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'utilityarea': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'title': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'profileurl': ['', Validators.compose([Validators.required])],
      'profile_logo': ['', Validators.compose([Validators.required])],
      'rating_logo': ['', Validators.compose([Validators.required])],
      'plan_information': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_rate': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'cancelation_fee': ['', Validators.compose([Validators.required])],
      'fact_sheet': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'terms_of_service': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'phone': ['', Validators.compose([Validators.required])],
      'sign_up': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'minimum_usage_fee': ['', Validators.compose([Validators.required])],
      // 'specialterms':['', Validators.compose([Validators.required])],
      'renewable': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'specialterms': ['', Validators.compose([Validators.required])],
      'price_1000_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_500_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_2000_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],


    });
  }
  check(e){}
  // sweetalertsignup1() {s
  //   swal({
  //       text: "Register Successflluy!",
  //       title: "Choice Genie",
  //       type: "success",
  //       showConfirmButton: false,
  //       //     confirmButtonColor: "#DD6B55",
  //       timer: 1200,
  //       confirmButtonText: "OK",


  //   })
  //   // . then

  //   // window.location.reload();
  // }

  onSubmit(f) {
    f.resetForm();
  }
  signupuserdata() {
    //alert('hello');
    console.log("CHOICE GENIE", this.model);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post('http://192.168.30.189:9000/choice/addproduct/', this.model, { headers: headers })
      .subscribe(Res => {
        console.log(Res);
        // this.next = Res[0].next;
        console.log(this.model);
        // swal({
        // text: "Register Successflluy!",
        // title: "Choice Genie",
        // type: "success",
        // showConfirmButton: false,
        // //     confirmButtonColor: "#DD6B55",
        // timer: 1200,
        // confirmButtonText: "OK",

        // })
        console.log(this.model);
        //  this.router.navigate(['/pages/login'])
      },

        error => {
          // console.log(error);
          // this.toastr.error(error, null, {toastLife: 5000});
          // swal(
          // 'Invalid',
          // 'Please Try Again!',
          // 'error'
          // )

          //     //    this.state = Res[0].state;
          //     //this.sg['products'] = Res.json()['Results'];
          //     //this.data.changeProducts(this.sg['products']);
          //   f.resetForm();
        });
    //}

    //    this.state = Res[0].state;
    //this.sg['products'] = Res.json()['Results'];
    //this.data.changeProducts(this.sg['products']);


    //}


  }




  //     //    this.state = Res[0].state;
  //     //this.sg['products'] = Res.json()['Results'];
  //     //this.data.changeProducts(this.sg['products']);



  title;
  company() {
    // alert(this.premiseID.toString().length)
    //  alert('hello');
    // if(this.premiseID&&this.premiseID.toString().length===17) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.get(Config.api +'companytitle/', { headers: headers })

      //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
      .subscribe(Res => {
        console.log(Res);
        //     this.state= Res[0].state;
        //  Res[0].state=this.model;
        this.title = Res;


        // this.data.changeProducts(this.sg['products']);

      });
  }


}