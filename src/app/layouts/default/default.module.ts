import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component';
import {AboutusComponent} from '../../components/aboutus/aboutus.component';
import {ContactusComponent} from '../../components/contactus/contactus.component';
import {HomeComponent} from '../../components/home/home.component';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    DefaultComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
