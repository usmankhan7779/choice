import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { PagerService } from '../pager.service';
import { HttpClientModule } from '@angular/common/http'
import {ProductsComponent} from "./products.component";
import {ExtendedTableComponent} from "../tables/extendedtable/extendedtable.component";
import {RegularTableComponent} from "../tables/regulartable/regulartable.component";
import {ProductsRoutes} from './products.routing';
import {PremiseDialog} from './products.component';
//import {  plandetailDialog} from './products.component';

import {StarRatingModule} from 'angular-star-rating';
import { HomeService } from '../home/home.service';
import { SimpleGlobal } from 'ng2-simple-global';
// import { Pipe, PipeTransform } from "@angular/core";
// import { HttpClientModule } from '@angular/common/http'
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductsRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
      HttpClientModule,
      StarRatingModule
    ],
    declarations: [
        ProductsComponent,
        ExtendedTableComponent,
        RegularTableComponent,
        PremiseDialog,
       // plandetailDialog,
        //PrettyPlanDetails
    ],
    providers: [
        PagerService,
        SimpleGlobal,
        HomeService
    ],
    entryComponents: [PremiseDialog]
 
})

export class ProductsModule {}
