import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http/src/http_module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MdModule,
        MaterialModule,
        HttpModule,
        //SlickModule.forRoot()
    ],
    declarations: []
})


export class HomeModule {

}
