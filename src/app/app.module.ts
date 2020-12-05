import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodComponent } from './hood/hood.component';
import { BusinessComponent } from './business/business.component';
import { PostComponent } from './post/post.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    BusinessComponent,
    PostComponent,
    BusinessDetailComponent,
    NavbarComponent,
    BusinessFormComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
