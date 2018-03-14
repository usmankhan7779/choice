import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { HomeService } from "../home/home.service";
import { DataService } from '../data.service';
import { CompanyService } from "../company.service";
import { PagerService } from '../pager.service';
import { SimpleGlobal } from 'ng2-simple-global';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    providers: [
        PagerService,
        SimpleGlobal,
        HomeService,
        CompanyService,
        DataService
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
