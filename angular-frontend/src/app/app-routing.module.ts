import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';


const routes: Routes = [
  { path: 'phone', component: PhoneNumberComponent },
  { path: 'code', component: CodeComponent },
  {path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],},
  { path: 'home', component: HomeComponent },
  { path: 'donate', component : DonateComponent},
  { path: '', redirectTo: '/phone', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
