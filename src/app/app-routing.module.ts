import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {LivreComponent} from './livre/livre.component';
import {ListLivreComponent} from './list-livre/list-livre.component';
import {HomeLivreComponent} from './home-livre/home-livre.component';
import {ContactezNousComponent} from './contactez-nous/contactez-nous.component';
import {DetailLivreComponent} from './detail-livre/detail-livre.component';
import {PageNotFounfComponent} from './page-not-founf/page-not-founf.component';

const ROUTES: Routes = [
  {path: '' , redirectTo: '/AfficheProduit', pathMatch: 'full'},
  {path: 'GestionProduit' , component: LivreComponent},
  {path: 'AfficheProduit' , component: HomeLivreComponent},
  {path: 'Contact' , component: ContactezNousComponent},
  {path: 'AfficheProduit/detail/:id' , component: DetailLivreComponent},
  {path: '**' , component: PageNotFounfComponent}


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
