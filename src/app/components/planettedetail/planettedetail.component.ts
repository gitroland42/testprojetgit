import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import {ActivatedRoute} from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';
import { Injectable } from '@angular/core';

//import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planettedetail',
  templateUrl: './planettedetail.component.html',
  styleUrls: ['./planettedetail.component.scss']
})
export class PlanettedetailComponent implements OnInit {
  id: number;
  planet: Planet;

  constructor(private route: ActivatedRoute,private planetService: PlanetService){ }

  // quand la page est chargé
  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.planet=this.planetService.getById(this.id)
  }


}
