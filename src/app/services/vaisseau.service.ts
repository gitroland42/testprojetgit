import { Injectable } from '@angular/core';
import {Vaisseau} from '../models/vaisseau';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1, 'Faucon millenium', 'Peugeot', true, 10,'Faucon millenium.jpg'),
    new Vaisseau(2, 'XWing', 'BMW', false, 2,'XWing.jpg')
  ];

  constructor() { }

  getAllVehiculs(): Vaisseau[] {
    return this.vehiculs;
  }

  getById(id:number): Vaisseau {
    // marche aussi avec le nom toto
    // return this.vehiculs.filter(toto=>toto.id==id)[0];  //[0] pour retourner un objet planette

    // fonction fleche vaisseau est le nom de l'argument passer à une fonction
    //function maFonction(argument){
    //  return arguments.length;
    //}
    // equivalent à argument=>argument.length

   return this.vehiculs.filter(vaisseau=>vaisseau.id==id)[0];
  }

  ajoutVaisseauForm(vaisseauFormulaire:Vaisseau):void{
     this.vehiculs.push(vaisseauFormulaire);
 }

 deleteVaisseau(vaisseau:Vaisseau):Vaisseau[]{
  // console.log(vaisseau);
  // on filtre le tableau en prenant les valeurs qui sont differentes de la valeur du parametre
  this.vehiculs=this.vehiculs.filter(vaisseausupprime=> vaisseau!==vaisseausupprime);
  // console.log(this.vehiculs);
  return this.vehiculs;
}

majVaisseauForm(vehicul:Vaisseau):Vaisseau[]{
  this.vehiculs.filter(vehiculMaj=>vehicul===vehiculMaj)[0]=vehicul
  // console.log(this.vehiculs);
  return this.vehiculs;
}

}
