import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})

export class PlanetsComponent implements OnInit {
  mesPlanettes:Planet[];
  vuePlanette:Planet;

  constructor(private planetService: PlanetService){}

  ngOnInit(): void {
    this.mesPlanettes = this.planetService.getAllPlanets();

  }

}




