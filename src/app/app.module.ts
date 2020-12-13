import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListLivreComponent } from './list-livre/list-livre.component';
import { HomeLivreComponent } from './home-livre/home-livre.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { PageNotFounfComponent } from './page-not-founf/page-not-founf.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    ListLivreComponent,
    HomeLivreComponent,
    ContactezNousComponent,
    DetailLivreComponent,
    PageNotFounfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
