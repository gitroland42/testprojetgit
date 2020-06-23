import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})

// creer nos fonctions a l'interieur, qui seroint accessibles dans tous les autres composants
export class PlanetService {

  planets = [
    new Planet(1, 'Alderran', 0, 'Auvergnate', 199,'Alderran.jpg'),
    new Planet(2, 'Tatooine', 100, 'Savoyarde', 1000,'Tatooine.jpg')
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
   return this.planets;
  }

  getById(id:number): Planet {
     return this.planets.filter(planet=>planet.id==id)[0];  //[0] pour retourner un objet planette
   }

   ajoutPlaneteForm(planeteFormulaire:Planet):void{
      // console.log(planeteFormulaire);
      this.planets.push(planeteFormulaire);
   }

   deletePlanete(planete:Planet):Planet[]{
     //console.log("delete")
     this.planets=this.planets.filter(planetesupprime=> planete!==planetesupprime);
     //console.log(this.planets);
     return this.planets;
   }

   majPlaneteForm(planete:Planet):Planet[]{
    this.planets.filter(planetMaj=>planete===planetMaj)[0]=planete;
    return this.planets;
   }
}
