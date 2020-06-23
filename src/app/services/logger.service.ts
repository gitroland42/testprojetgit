import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  affichelog():void{
    console.log("test affichage console");
  }
}
