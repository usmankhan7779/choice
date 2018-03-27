import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { Config } from "../Config";
import { Subscription } from 'rxjs/Subscription';
import { CompanyService } from "../company.service";
import { ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { NgForm, FormControl, Validators, FormGroupDirective } from "@angular/forms";
import { Pipe, PipeTransform } from "@angular/core";
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Headers, Http, Response } from '@angular/http';
import { HomeService } from "../home/home.service";
import { PagerService } from '../pager.service';
import { ResponseContentType } from '@angular/http/src/enums';
import { Console } from '@angular/core/src/console';
// import {Config} from "../Config";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
// import { ValueUnwrapper } from '@angular/core/src/change_detection/change_detection_util';
//import { Http } from '@angular/http/src/http';
import { PageEvent } from '@angular/material';
import { DeleteService } from './delete.service';
import { DataService } from '../data.service';
import { EditService } from './edit.service';




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
    constructor(private route: ActivatedRoute, private https: HttpClient, private newService: DeleteService,private serve:EditService,
        private router: Router, private http: Http, private pagerService: PagerService, private homeService: HomeService, private sg: SimpleGlobal, private obj: HomeService, private dialog: MatDialog, private dataa: DataService, private companyService: CompanyService) {

    }


    // array of all items to be paged
    // pager object
    pageSizeOptions;
    private allItems: any[];
    pager: any = {};
    home: any = {};
    id: number;
    page: any[];

    // paged items
    pagedItems: any[];
    private sub: Subscription;
    private zip: any;
    prod_loaded = false;
    prods_loaded = false;
    localVar;
    public products: any;
    rating;
    closeResult: string;
    // startAnimationForLineChart(chart: any) {
    //     let seq: any, delays: any, durations: any;
    //     seq = 0;
    //     delays = 80;
    //     durations = 500;
    //     chart.on('draw', function(data: any) {

    //       if (data.type === 'line' || data.type === 'area') {
    //         data.element.animate({
    //           d: {
    //             begin: 600,
    //             dur: 700,
    //             from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
    //             to: data.path.clone().stringify(),
    //             // easing: Chartist.Svg.Easing.easeOutQuint
    //           }
    //         });
    //       } else if (data.type === 'point') {
    //             seq++;
    //             data.element.animate({
    //               opacity: {
    //                 begin: seq * delays,
    //                 dur: durations,
    //                 from: 0,
    //                 to: 1,
    //                 easing: 'ease'
    //               }
    //             });
    //         }
    //     });

    //     seq = 0;
    // }
    // startAnimationForBarChart(chart: any) {
    //     let seq2: any, delays2: any, durations2: any;
    //     seq2 = 0;
    //     delays2 = 80;
    //     durations2 = 500;
    //     chart.on('draw', function(data: any) {
    //       if (data.type === 'bar') {
    //           seq2++;
    //           data.element.animate({
    //             opacity: {
    //               begin: seq2 * delays2,
    //               dur: durations2,
    //               from: 0,
    //               to: 1,
    //               easing: 'ease'
    //             }
    //           });
    //       }
    //     });

    //     seq2 = 0;
    // }
    setPage(username) {
        // alert("username")
        //  console.log("usernameeeeeeeeeeeee",username)

        const Results = {}

        this.companyService.searchProduct(username).subscribe(Response => {
            // console.log(Response.id);
            // this.id = Response.id;
            console.log('service');       // localStorage.setItem('products',response['Results']);
            this.sg['products'] = Response['Results'];
            console.log(this.sg['products']);
            for (let prod of this.sg['products']) {
                this.id = prod["id"];
                console.log(prod["id"])
                //console.log(prod["plan_information"])
                //console.log(prod["price_rate"])
                prod["plan_information"] = prod["plan_information"].split(',,', 3000);
                prod["price_rate"] = prod["price_rate"].split('..', 3000);

            }
            this.dataa.changeProducts(this.sg['products']);
            this.prod_loaded = true;
            this.prods_loaded = true;
            this.allItems = this.sg['products'];
            // console.clear()
            console.log(Response['Total Result']);
            //  this.pager = this.pagerService.getPager(Response['Total Result'], page, 10);
            //this.setPage(1);
            // initialize to page 1
            // console.log(this.sg['products']);

        });
        //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    data;
    public username;
    // updatedata() {
    //     // alert(this.premiseID.toString().length)
    //     // alert('hello');

    //     let headers = new HttpHeaders();
    //     headers.append('Content-Type', 'application/json');
    //     // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    //     //  this.https.put(Config.api + 'dataup/'+ this.id +'' , { headers: headers })
    //     this.https.put('http://192.168.30.52:9000/choice/dataup/' + this.id + '', { headers: headers })
    //         .subscribe(Res => {
    //             console.log(Res);
    //             // this.city = Res[0].city;
    //             // this.state = Res[0].state;
    //             // localStorage.setItem("signupDetails", JSON.stringify(Res));
    //             // localStorage.setItem("signedupcompanyid", this.product_id);
    //             // localStorage.setItem("consumerPremiseID", this.premiseID);

    //             //   return JSON.parse(localStorage.getItem("premiseID"))
    //             // this.sg['products'] = Res.json()['Results'];
    //             // this.data.changeProducts(this.sg['products']);

    //         });

    // }
    //initialization of variables
    dataId = '';
    list = 'Hello';

    //Event Binding of Delete Buttons
    btnDeleteClick(id) {
        this.dataId = id;
        console.log('id : ' + this.dataId);
    }

    //Event Binding of PopUp Delete Modal

    deleteClick(id) {
        console.log('delete' + id);

        //Calling Delete Service
        this.newService.DeleteTodoList(id).subscribe(data => {
            console.log(data);

            this.route.params.subscribe(params => {


                //  console.log('paramsssssssssss',params['username'])
                this.setPage(params['username'])
                //  this.setPage(1)
    
            });
            //  alert("junaid");
            // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
            // this.data.currentProducts
            this.Sub = this.route.params.subscribe(params => {
                this.username = +params['username'];
                //  this.setPage(1)
                // alert(this.username);
            });

        }, error => {
        });
     //   window.location.reload();

    }
    PId = '';
   // list = 'Hello';

    //Event Binding of Delete Buttons
    btnEditClick(id) {
        this.PId = id;
        console.log('id : ' + this.PId);
    }

    //Event Binding of PopUp Delete Modal

    editClick(id) {
        console.log('edit' + id);

        //Calling Delete Service
        this.serve.editTodoList(id).subscribe(data => {
            console.log(data);

            this.route.params.subscribe(params => {


                //  console.log('paramsssssssssss',params['username'])
                this.setPage(params['username'])
                //  this.setPage(1)
    
            });
            //  alert("junaid");
            // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
            // this.data.currentProducts
            this.Sub = this.route.params.subscribe(params => {
                this.username = +params['username'];
                //  this.setPage(1)
                // alert(this.username);
            });

        }, error => {
        });
      //  window.location.reload();

    }

    // deletedata() {
    //     // alert(this.premiseID.toString().length)
    //     // alert('hello');
    //     // if (this.data.id.checked) {

    //     let headers = new HttpHeaders();
    //     headers.append('Content-Type', 'application/json');
    //     // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    //     this.https.delete(Config.api + 'mydata/' + this.id + '', { headers: headers })
    //         //this.https.put('http://192.168.30.52:9000/choice/dataup/'+ this.id +'' , { headers: headers })
    //         .subscribe(Res => {
    //             console.log(Res);
    //             // this.city = Res[0].city;
    //             // this.state = Res[0].state;
    //             // localStorage.setItem("signupDetails", JSON.stringify(Res));
    //             // localStorage.setItem("signedupcompanyid", this.product_id);
    //             // localStorage.setItem("consumerPremiseID", this.premiseID);

    //             //   return JSON.parse(localStorage.getItem("premiseID"))
    //             // this.sg['products'] = Res.json()['Results'];
    //             // this.data.changeProducts(this.sg['products']);

    //         });
    //     // }
    // }
    private Sub: Subscription;
    // constructor(private navbarTitleService: NavbarTitleService) { }
    public ngOnInit() {
        this.route.params.subscribe(params => {


            //  console.log('paramsssssssssss',params['username'])
            this.setPage(params['username'])
            //  this.setPage(1)

        });
        //  alert("junaid");
        // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
        // this.data.currentProducts
        this.Sub = this.route.params.subscribe(params => {
            this.username = +params['username'];
            //  this.setPage(1)
            // alert(this.username);
        });
        // this.setPage();
        //  console.log()

        //    console.log("fatimaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        //   this.tableData = {
        //       headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
        //       dataRows: [
        //           ['US', 'USA', '2.920	', '53.23%'],
        //           ['DE', 'Germany', '1.300', '20.43%'],
        //           ['AU', 'Australia', '760', '10.35%'],
        //           ['GB', 'United Kingdom	', '690', '7.87%'],
        //           ['RO', 'Romania', '600', '5.94%'],
        //           ['BR', 'Brasil', '550', '4.34%']
        //       ]
        //    };
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        const dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        //  const optionsDailySalesChart = {
        //       lineSmooth: Chartist.Interpolation.cardinal({
        //           tension: 0
        //       }),
        //       low: 0,
        //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        //   };

        //   const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        //   this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        //   const optionsCompletedTasksChart = {
        //       lineSmooth: Chartist.Interpolation.cardinal({
        //           tension: 0
        //       }),
        //       low: 0,
        //       high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better
        //       // look
        //       chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        //   };

        //  const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart,
        //   optionsCompletedTasksChart);

        //  this.startAnimationForLineChart(completedTasksChart);

        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        const dataWebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        const optionsWebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        const responsiveOptions: any = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        //   const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

        //   this.startAnimationForBarChart(websiteViewsChart);

        const mapData = {
            'AU': 760,
            'BR': 550,
            'CA': 120,
            'DE': 1300,
            'FR': 540,
            'GB': 690,
            'GE': 200,
            'IN': 200,
            'RO': 600,
            'RU': 300,
            'US': 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    'fill-opacity': 0.9,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 0
                }
            },

            series: {
                regions: [{
                    values: mapData,
                    scale: ['#AAAAAA', '#444444'],
                    normalizeFunction: 'polynomial'
                }]
            },
        });
    }
    ngAfterViewInit() {
        const breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                const $fix_button = $(this);
                const $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');

                    $card.attr('data-count', 0);

                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });

                $card.mouseenter(function () {
                    const $this = $(this);
                    const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    }
}