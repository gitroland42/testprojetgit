import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.scss']
})

export class VaisseauxComponent implements OnInit {
  // creer variable vide de type Vaisseau (classe Vaisseau)
  mesVaisseaux:Vaisseau[];
  dateJour= new Date();
  // vaisseauService et de type VaisseauService ( classe )
  constructor(private vaisseauService: VaisseauService,private messageLog:LoggerService) { }

  // lancer a la fin du chargement de la page
  ngOnInit(): void {
    // init de la variable en appelant la procedur getAllVehiculs qui est creer dans vaisseauservice.ts
    this.mesVaisseaux = this.vaisseauService.getAllVehiculs();
    this.messageLog.affichelog();
  }

  supprimerVaisseau(vaisseau:Vaisseau){
    // appel de la fonction deleteVaisseau dans le service vaisseau

   this.vaisseauService.deleteVaisseau(vaisseau);
    // recharger les vaisseaux
    this.mesVaisseaux = this.vaisseauService.getAllVehiculs();
  }
}
