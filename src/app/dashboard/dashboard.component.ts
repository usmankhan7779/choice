import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from "@angular/router";
import {  CompanyService } from "../company.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { NgForm, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
import * as _ from 'underscore';
import { PagerService } from '../pager.service';
import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';

// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { StarRating } from 'angular-star-rating/star-rating';
import { StarRatingModule, StarRatingConfig, StarRatingComponent } from 'angular-star-rating';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
// import { SSL_OP_NO_TICKET } from 'constants';




declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

declare const $: any;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }


}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
    pageSizeOptions;
    public dataTable: DataTable;
    private sub: Subscription;
    private zip: any;
    prod_loaded = false;
    prods_loaded = false;
    localVar;
    public products: any;
    rating;
    closeResult: string;

    //    setPage;
    constructor(private http: Http, private pagerService: PagerService, private companyService:CompanyService , private route: ActivatedRoute, private sg: SimpleGlobal, private obj:CompanyService, private router: Router, private dialog: MatDialog, private data: DataService) {

    }

    // array of all items to be paged
    // pager object
    private allItems: any[];
    pager: any = {};
    home: any = {};
    private id: any[];
    page: any[];
    // paged items
    pagedItems: any[];
username;

    ngOnInit() {
      
        // this.fetchitem();
        // this.  fetchitem();
        // const Results = {}
        // onclick = function (rating) {
        //     console.log(rating);
        // }

        this.data.currentProducts.subscribe(products => this.sg['products'] = products)
        this.data.currentProducts

        this.sub = this.route.params.subscribe(params => {
            this.zip = +params['zipCode'];
            this.obj.searchProduct(this.username).subscribe(response => {
                // localStorage.setItem('products',response['Results']);
    
    
                this.sg['products'] = response['Results'];
                // console.log(this.sg['products']);
                // for (let prod of this.sg['products']) {
                //     //console.log(prod["plan_information"])
                //     //console.log(prod["price_rate"])
                //     prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                //     prod["price_rate"] = prod["price_rate"].split('..', 3000);
    
                // }
    
                this.data.changeProducts(this.sg['products']);
                this.prod_loaded = true;
                this.prods_loaded = true;
                //  this.allItems = this.sg['products'];
                //console.clear()
                // console.log(response['Total Result']);
               // this.pager = this.pagerService.getPager(response['Total Result'], page, 10);
    
                //this.setPage(1);
                // initialize to page 1
                // console.log(this.sg['products']);
    
            }
        );

        });
           
          // this.data.changeProducts(this.sg['products']);
          // this.prod_loaded = true;
          // this.prods_loaded = true;

    





    }

    // check(e) {
    //     this.fetchitem();
    // }
    // fetchitem() {

    //     // this.route.params.subscribe(params => {
    //     //   let zip =  this.sg['product_zipcode'];
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json')
    //     this.http.get(Config.api + 'items_perpage/title/asc/' + this.pageSizeOptions + '?page=1', { headers: headers })
    //         //this.http.get(Config.api + 'monthly/' + this.zip_code + '',{ headers: headers })
    //         // this.http.get(Config.api + 'filter/' + this.zip_code + '',{ headers: headers })

    //         //  this.http.post(Config.api + 'filter/' + this.zip_code + '', {"month": this.months+" Month", "custom":"['2','8']"},{ headers: headers })
    //         .subscribe(Res => {
    //             this.sg['products'] = Res.json()['Results'];
    //             this.data.changeProducts(this.sg['products']);
    //             this.allItems = this.sg['products'];
    //             for (let prod of this.sg['products']) {
    //                 console.log(prod["plan_information"])
    //                 console.log(prod["price_rate"])
    //                 prod["plan_information"] = prod["plan_information"].split(',,', 3000);
    //                 prod["price_rate"] = prod["price_rate"].split('..', 3000);
    //             }
    //         });

    // }
   
    ngAfterViewInit() {
        $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
            responsive: true,
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records',
            }


        });

        const table = $('#datatables').DataTable();

        // Edit record
        table.on('click', '.edit', function () {
            const $tr = $(this).closest('tr');

            const data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        });

        // Delete a record
        table.on('click', '.remove', function (e: any) {
            const $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });

        // Like record
        table.on('click', '.like', function () {
            alert('You clicked on Like button');
        });

    }
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        const Results = {}

        this.obj.searchProduct(this.username).subscribe(response => {
            // localStorage.setItem('products',response['Results']);


            this.sg['products'] = response['Results'];
            // console.log(this.sg['products']);
            // for (let prod of this.sg['products']) {
            //     //console.log(prod["plan_information"])
            //     //console.log(prod["price_rate"])
            //     prod["plan_information"] = prod["plan_information"].split(',,', 3000);
            //     prod["price_rate"] = prod["price_rate"].split('..', 3000);

            // }

            this.data.changeProducts(this.sg['products']);
            this.prod_loaded = true;
            this.prods_loaded = true;
            //  this.allItems = this.sg['products'];
            //console.clear()
            // console.log(response['Total Result']);
           // this.pager = this.pagerService.getPager(response['Total Result'], page, 10);

            //this.setPage(1);
            // initialize to page 1
            // console.log(this.sg['products']);

        }


        );


        // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }
   


}