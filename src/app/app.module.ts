import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoodComponent } from './hood/hood.component';
import { BusinessComponent } from './business/business.component';
import { PostComponent } from './post/post.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    BusinessComponent,
    PostComponent,
    BusinessDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
