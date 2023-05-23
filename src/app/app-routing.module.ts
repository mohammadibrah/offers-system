import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: '/sys-panel', pathMatch: 'full' },
  { path: 'sys-panel', component: NavBarComponent,
    children: [
      {path: 'dashboard', component: OffersComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'bills', component: OffersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
