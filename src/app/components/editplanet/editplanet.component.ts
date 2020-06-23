import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editplanet',
  templateUrl: './editplanet.component.html',
  styleUrls: ['./editplanet.component.scss']
})
export class EditplanetComponent implements OnInit {

  id: number;
  newPlanete: Planet; // meme nom de varaible que le html, pas d'initialisation car on est en modif
  // elle sera chargé avec notre planete en cours dans le ngOnInit
  constructor(private planetService: PlanetService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));  // recuperation id planet en cours
    this.newPlanete=this.planetService.getById(this.id);  //  recuperation de la planete correspondant à l'id
    //console.log(this.id);
  }

  editerPlanete(planet:Planet):void{
   //console.log(this.newPlanete);
   this.planetService.majPlaneteForm(this.newPlanete);
    // recharge la table des planetes
    this.router.navigate(['/planets']);
  }
}
