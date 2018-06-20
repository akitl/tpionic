import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../../ingredient';

import { IngredientService } from '../../ingredient.service';
import { Recette } from '../../recette';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.component.html'
})
export class MesRecettesComponent implements OnInit {

  ings : Ingredient[];
  recs : Recette[];
  recsFaisable : boolean[] = [];

  selectedRec: Recette;
  addDetailBool: boolean = false;
  addRecBo : boolean = false;

  ngOnInit() {
    this.getIngredients();
    this.getRecettes();
    this.getRecettesFaisable();
  }

  constructor(private IngredientService: IngredientService) {

   }

   onSelect(rec: Recette): void {
     if (rec == this.selectedRec){
       this.selectedRec=null;
     }else{
      this.selectedRec = rec;
     }
     this.getRecettesFaisable();

    
  }

  onSelectDel(rec: Recette): void {
    this.IngredientService.delRecette(rec);
  }
  
   getIngredients(): void {
    this.IngredientService.getIngredients()
        .subscribe(ings => this.ings = ings);
  }

  getRecettes(): void {
    this.IngredientService.getRecettes()
        .subscribe(recs => this.recs = recs);   
  }

  getRecettesFaisable(): void {
    this.recs.forEach((rec,i)=>{
      this.recsFaisable.push(true);
        rec.list.forEach((ingR,ii)=>{
          if(!this.IngredientService.getIngredientByNameDansLeFrigo(ingR.nom)){
            this.recsFaisable[i]=false;
          }
        });
    });
  }

  addRec(): void{
    this.addRecBo = true;
  }

  RecetteAdd(): void{
    this.addRecBo = true;
  }

  realiserRec(rec:Recette): void {
    this.IngredientService.realiserRec(rec);

  }

  
  
}
