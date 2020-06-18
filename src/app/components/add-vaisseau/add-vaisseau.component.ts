import { Component, OnInit } from '@angular/core';
import { Vaisseau } from 'src/app/models/vaisseau';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.scss']
})
export class AddVaisseauComponent implements OnInit {
  newVaisseau= new Vaisseau();

  constructor() { }

  ngOnInit(): void {
  }

  ajoutVaisseau():void{
    console.log(this.newVaisseau);
  }
}
