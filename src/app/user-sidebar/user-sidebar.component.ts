import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Config } from "../Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { DataService } from '../data.service';
import { PagerService } from '../pager.service';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare const $: any;

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
})

  export class UserSidebarComponent implements OnInit, AfterContentInit {
  eUsage;
  months;
  cUsage;
  message: string;
  localVar;
  renewable;
  model;
  // min;
  // max;
  // price;
  constructor(private https: HttpClient,private http: Http, private route: ActivatedRoute, private sg: SimpleGlobal, private data: DataService) {
  //    if (this.sg['gv']) {
  //      this.localVar = this.sg['gv'];
  // }
  }
  private allItems: any[];
  prod_loaded = false;
  prods_loaded = false;
  zip_code;
  items;
  title;
  mySelect;
  ngOnInit() {
  this.data.currentProducts.subscribe(products => this.sg['products'] = products)
  
  this.zip_code = this.sg['product_zipcode'];
  //this.months();
    

  }
  ngAfterContentInit() {
    // console.log(this.eUsage);
    // alert($("#mySelect").val());
    
  }
  
  onChange(e) {
    alert(e)
  }
  usage = [
  { value: 'building-0', viewValue: 'Building' },
  { value: 'restaurant-1', viewValue: 'Restaurant' },
  { value: 'store-2', viewValue: 'Store' },
  { value: 'manufacturing-plant-2', viewValue: 'Manufacturing Plant' },
  { value: 'office-2', viewValue: 'Office' },
  { value: 'other-2', viewValue: 'Other' }
  ];
  check(e) {
  // this.fetchitem();
  // this.route.params.subscribe(params => {
  // let headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + '/price_range/price_' + e + '_kwh/5.6/6.1/' + this.zip_code + '/', { headers: headers })
  //   .subscribe(Res => {
  //     this.sg['products'] = Res.json()['Results'];
  //     this.data.changeProducts(this.sg['products']);
  
  //   });
  //  });
  
  }
  //   fetchitem() {
  //     // this.route.params.subscribe(params => {
  //    //   let zip =  this.sg['product_zipcode'];
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json')
  //    this.http.get(Config.api + 'items_perpage/title/asc/' + this.items + '?page=1', { headers: headers })
  //   //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  //  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  //  //  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
  //       .subscribe(Res => {
  //         this.sg['products'] = Res.json()['Results'];
  //         this.data.changeProducts(this.sg['products']);
  //         this.allItems = this.sg['products'];
  //         for (let prod of this.sg['products']) {
  //           // console.log(prod["plan_information"])
  //           // console.log(prod["price_rate"])
  //           prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  //           prod["price_rate"] = prod["price_rate"].split('..', 3000);
  //         }
  //      });
  
  //     }
  
  fetchProducts() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
  
  fetchzip() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers })
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })
  
  //  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
 
  company() {
  // alert(this.premiseID.toString().length)
  //  alert('hello');
  // if(this.premiseID&&this.premiseID.toString().length===17) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.https.get(Config.api +'companytitle/',{ headers: headers })
  
  //  this.http.get(Config.api + 'signup/'+ this.zip_code +'', {headers: headers})
  .subscribe(Res => {
  console.log(Res);
  //     this.state= Res[0].state;
  //  Res[0].state=this.model;
  this.title = Res;
  
  
  // this.data.changeProducts(this.sg['products']);
  
  });
  }
  
  fetchmonth() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  this.http.get(Config.api + 'monthly/' + this.zip_code + '/'+ this.months+'',{ headers: headers })
  
  // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });}
  //    fetchprice() {
  //     // this.route.params.subscribe(params => {
  //    //   let zip =  this.sg['product_zipcode'];
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/json');
  //   // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //   this.http.get(Config.api + 'price_range/MIN/MAX/ZIPCODE/' + this.min +'/'+this.max+'/'+ this.zip_code +'/'+this.price,{ headers: headers })
  
  //  // this.http.post(Config.api + 'monthly/' + this.zip_code + '/' + this.months + '',{"month": this.months+" Month","custom":"['2','8']"},{ headers: headers })
  //       .subscribe(Res => {
  //         this.sg['products'] = Res.json()['Results'];
  //         this.data.changeProducts(this.sg['products']);
  //         for (let prod of this.sg['products']) {
  //           console.log(prod["plan_information"])
  //           console.log(prod["price_rate"])
  //           prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  //           prod["price_rate"] = prod["price_rate"].split('..', 3000);
  //         }
  //      });}
  fetchrenewable() {
  // this.route.params.subscribe(params => {
  //   let zip =  this.sg['product_zipcode'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
  //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
  
  this.http.get(Config.api + 'reneable/' + this.zip_code + '/',{ headers: headers })
  .subscribe(Res => {
  this.sg['products'] = Res.json()['Results'];
  this.data.changeProducts(this.sg['products']);
  this.allItems = this.sg['products'];
  for (let prod of this.sg['products']) {
  // console.log(prod["plan_information"])
  // console.log(prod["price_rate"])
  prod["plan_information"] = prod["plan_information"].split(',,', 3000);
  prod["price_rate"] = prod["price_rate"].split('..', 3000);
  }
  });
  
  }
  
  
  
  
  
  
  
  }
  