import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanettedetailComponent } from './components/planettedetail/planettedetail.component';
import { VaisseaudetailComponent } from './components/vaisseaudetail/vaisseaudetail.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { AddVaisseauComponent } from './components/add-vaisseau/add-vaisseau.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanetsComponent,
    VaisseauxComponent,
    PlanettedetailComponent,
    VaisseaudetailComponent,
    AddPlanetComponent,
    AddVaisseauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
