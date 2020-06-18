import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.scss']
})

export class VaisseauxComponent implements OnInit {
  // creer variable vide de type Vaisseau (classe Vaisseau)
  mesVaisseaux:Vaisseau[];

  // vaisseauService et de type VaisseauService ( classe )
  constructor(private vaisseauService: VaisseauService) { }

  ngOnInit(): void {
    // init de la variable en appelant la procedur getAllVehiculs qui est creer dans vaisseauservice.ts
    this.mesVaisseaux = this.vaisseauService.getAllVehiculs();
  }

}
