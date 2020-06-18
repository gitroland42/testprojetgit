import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.scss']
})

export class AddPlanetComponent implements OnInit {

  newPlanete=new Planet();
  planet: Planet;

  constructor() { }

  ngOnInit(): void {

  }

  ajoutPlanete():void{
    console.log(this.newPlanete);
    this.planet = new Planet();
  }
}



// planet: Planet;
// constructor(private planetService: PlanetsService, private router: Router) { }
// ngOnInit() {
// this.planet = new Planet();
// }

