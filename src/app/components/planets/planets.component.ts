import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';
import { LoggerService } from 'src/app/services/logger.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})

export class PlanetsComponent implements OnInit {
  mesPlanettes:Planet[];


  // vuePlanette:Planet;
  dateJour= new Date();
  constructor(private planetService: PlanetService,private messageLog:LoggerService,private toaster:ToastrService){}

  // executer à la fin du chargement
  ngOnInit(): void {
    this.mesPlanettes = this.planetService.getAllPlanets();
    this.messageLog.affichelog();
  }


  supprimerPlanete(planete:Planet){
    // appel de la fonction deletePlanete dans le service planetee

   this.planetService.deletePlanete(planete);
    // recharger les planetes
   this.mesPlanettes = this.planetService.getAllPlanets();
   this.toaster.info("suppression effectuée")
  }
}




