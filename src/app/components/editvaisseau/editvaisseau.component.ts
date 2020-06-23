import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Vaisseau } from 'src/app/models/vaisseau';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editvaisseau',
  templateUrl: './editvaisseau.component.html',
  styleUrls: ['./editvaisseau.component.scss']
})
export class EditvaisseauComponent implements OnInit {
  id:number;
  newVaisseau:Vaisseau;
constructor(private vaisseauService:VaisseauService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.newVaisseau=this.vaisseauService.getById(this.id);
  }

  editerVaisseau(vaisseau:Vaisseau):void{
    //console.log(this.newPlanete);
    this.vaisseauService.majVaisseauForm(this.newVaisseau);
     // recharge la table des planetes
     this.router.navigate(['/vaisseaux']);
   }

}
