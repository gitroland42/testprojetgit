import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Router } from '@angular/router';
import { VaisseauService } from 'src/app/services/vaisseau.service';
// import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.scss']
})
export class AddVaisseauComponent implements OnInit {
  newVaisseau= new Vaisseau();
  vaisseau: Vaisseau;

  constructor(private vaisseauService: VaisseauService,private router: Router) { }

  ngOnInit(): void {
    this.vaisseau = new Vaisseau();
  }

  ajoutVaisseau():void{
    // console.log(this.newVaisseau);

    this.vaisseauService.ajoutVaisseauForm(this.newVaisseau);
    this.router.navigate(['/vaisseaux']);
  }

  //private readonly notifier: NotifierService
  // constructor(notifierService: NotifierService) {
  //   this.notifier = notifierService; 
  //}
}



// this.planetService.ajoutPlaneteForm(this.newPlanete);
// this.router.navigate(['/planets']);
// onSubmit() {
//   this.planetService.addPlanet(this.planet);
//   this.router.navigate(['/planets']);
//   }
// planet: Planet;
// constructor(private planetService: PlanetsService, private router: Router) { }
// ngOnInit() {
// this.planet = new Planet();
// }
