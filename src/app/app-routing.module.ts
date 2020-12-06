import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoodComponent } from '../app/hood/hood.component';
import { ViewhoodInfoComponent } from '../app/viewhood-info/viewhood-info.component'
import { LoginComponent } from '../app/login/login.component'
import { SignupComponent } from '../app/signup/signup.component'
import { AllpostsComponent } from '../app/allposts/allposts.component'
import { BusinessComponent } from '../app/business/business.component';
import { ProfileComponent } from '../app/profile/profile.component'


const routes: Routes = [
  { path: 'hood', component: HoodComponent },
  { path: 'viewhood', component: ViewhoodInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'allposts', component: AllpostsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
