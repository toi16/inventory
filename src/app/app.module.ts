import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { InventoryModule } from './inventory/inventory.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';

import { routing } from './app.routing';
import { inventoryRouting } from './inventory/inventory.routing';

export const firebaseConfig = {
    apiKey: "AIzaSyCB7GkmPNub9WiBGoTBPMDBMt-x12COpyg",
    authDomain: "inventory-5c316.firebaseapp.com",
    databaseURL: "https://inventory-5c316.firebaseio.com",
    storageBucket: "inventory-5c316.appspot.com",
    messagingSenderId: "772597159534"
      
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InventoryModule,
    SharedModule,
    inventoryRouting,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
