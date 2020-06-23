import { Pipe, PipeTransform } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Pipe({
  name: 'initiale'
})
export class InitialePipe implements PipeTransform {
  // fonction transforme ( valeur a tansformé,tableau d'argumment): type valeur de retour
  transform(value:String, ...args: any[]): string {
    //return null;
    const prenomNomTab = value.split(' ');  // separation de la  valeur dans un tableau ( separateur espace)
    return prenomNomTab[0][0] + prenomNomTab[1][0];

  }

}
