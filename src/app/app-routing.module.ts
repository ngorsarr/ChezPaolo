import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FooterBeverageComponent } from './footer-beverage/footer-beverage.component';
import { HomeComponent } from './home/home.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {path: 'accomodations', component: AccomodationComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'footer-beverage', component: FooterBeverageComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: 'weddings', component: WeddingComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
