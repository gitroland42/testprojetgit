import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau.service';

@Component({
  selector: 'app-vaisseaudetail',
  templateUrl: './vaisseaudetail.component.html',
  styleUrls: ['./vaisseaudetail.component.scss']
})
export class VaisseaudetailComponent implements OnInit {
  id:number;
  vaisseaux: Vaisseau;
  // vaisseaux variable de type Vaisseau( models/class)


  constructor(private route: ActivatedRoute,private vaisseauService: VaisseauService){ }

  // quand la page est chargé
  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.vaisseaux=this.vaisseauService.getById(this.id)
  }
}
