import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {IvyCarouselModule} from 'angular-responsive-carousel';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { EmployeeService } from './employee.service';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import firebase from 'firebase';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
//import { StyleClassModule } from 'primeng/styleclass';
//import { RippleModule } from 'primeng/ripple';
//import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberComponent,
    CodeComponent,
    DashboardComponent,
    //EmployeeDetailComponent,
    //EmployeeListComponent,
    HomeComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
  //ButtonModule,
   //RippleModule,
  //StyleClassModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    AppRoutingModule,
    NgOtpInputModule,
    IvyCarouselModule,
  ],

  providers: [AuthService, AuthGuard ],
  bootstrap: [AppComponent],
})
export class AppModule {}
