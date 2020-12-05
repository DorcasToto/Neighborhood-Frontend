import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodComponent } from './hood/hood.component';

import { ViewhoodInfoComponent } from './viewhood-info/viewhood-info.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { AllpostsComponent } from './allposts/allposts.component';



@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    ViewhoodInfoComponent,
    LoginComponent,
    SignupComponent,
    AllpostsComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
