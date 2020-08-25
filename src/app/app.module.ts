import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CatalogueserviceComponent } from './catalogueservice/catalogueservice.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueserviceComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
