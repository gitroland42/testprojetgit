import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.scss']
})

export class AddPlanetComponent implements OnInit {

  newPlanete=new Planet();
  // planet: Planet;
  // dans le constructeur pour pouvoir utiliser les services dans les fonctions ci dessous
  constructor(private planetService: PlanetService, private router: Router) { }


  ngOnInit(): void {
    // this.planet = new Planet();
  }

  ajoutPlanete():void{
    // console.log(this.newPlanete);
    //this.planet = new Planet();

    this.planetService.ajoutPlaneteForm(this.newPlanete);
    this.router.navigate(['/planets']);
  }


}




