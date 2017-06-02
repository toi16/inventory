import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { InventoryModule } from './inventory/inventory.module';
import { SettingsModule } from './settings/settings.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar.component';
import { NotFoundComponent } from './not-found.component';

import { routing } from './app.routing';
import { inventoryRouting } from './inventory/inventory.routing';
import { settingRouting } from './settings/settings.routing';


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
    SettingsModule,
    SharedModule,
    inventoryRouting,
    settingRouting,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
