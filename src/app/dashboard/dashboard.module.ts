import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
<<<<<<< HEAD

=======
import { PagerService } from '../pager.service';
import { SimpleGlobal } from 'ng2-simple-global';
>>>>>>> c764f652eb2d7e1972a3017ec14b5e4fb6252fb0
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
<<<<<<< HEAD
=======
    providers: [
        PagerService,
        SimpleGlobal,
        CompanyService
    ],
>>>>>>> c764f652eb2d7e1972a3017ec14b5e4fb6252fb0
    declarations: [DashboardComponent]
})

export class DashboardModule {}
