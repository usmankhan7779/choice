import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { PagerService } from '../pager.service';
import { SimpleGlobal } from 'ng2-simple-global';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CompanyService } from '../company.service';

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
        CompanyService
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
