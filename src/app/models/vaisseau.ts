
export class Vaisseau {
  id:number;
  nom:string;
  model:string;
  lightSpeed:boolean;
  nbPassager:number;
  image:string;


  constructor(id: number=null,nom: string=null,model:string=null,lightSpeed: boolean=null,nbPassager:number=null,image:string=null){
    this.id=id;
    this.nom=nom;
    this.model=model;
    this.lightSpeed=lightSpeed;
    this.nbPassager=nbPassager;
    this.image=image;
  }
}
