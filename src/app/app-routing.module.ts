import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {HomeComponent} from './components/home/home.component';
import {ReservationsComponent} from './components/reservations/reservations.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
          path: 'aboutUs',
          component: AboutusComponent
      },
      {
        path: 'contactus',
        component: ContactusComponent
      },
      {
        path: 'reservations',
        component: ReservationsComponent
      },

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
