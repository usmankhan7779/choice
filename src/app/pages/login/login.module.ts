import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { MdModule } from '../md/md.module';
import { MaterialModule } from '../../app.module';

import {LoginComponent} from "./login.component";
// import {SignupRoutes} from "./login.routing";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { SweetAlertService } from 'ng2-sweetalert2';
import { LoginRoutes } from './login.routing';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        HttpClientModule,
            
    ],
    declarations: [LoginComponent],
    providers: [
        SweetAlertService
    ]
})

export class LoginModule {}

