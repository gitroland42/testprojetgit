import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
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

}
