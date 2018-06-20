import { Component, OnInit , Input} from '@angular/core';

import { Recette } from '../../../recette';
import { Ingredient } from '../../../ingredient';

import { IngredientService } from '../../../ingredient.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.css']
})
export class RecetteDetailComponent implements OnInit {

  @Input() rec: Recette;
  ings: Ingredient[];
  addBo: boolean = false;
  ingAdd:Ingredient;
  constructor(private IngredientService: IngredientService) { }

  getIngredients(): void {
    this.ings = this.rec.list;
  }

  addIngquatite(ing): void{
    this.IngredientService.addIngredientQuantiteToRecette(this.rec,ing);
  }

  delIngquatite(ing): void{
    this.IngredientService.delIngredientQuantiteToRecette(this.rec,ing);
  }

  addIngBo(): void{
   this.addBo = true;
  }
  addIngredient(): void{
    this.addBo = false;
    this.IngredientService.addIngredientToRecette(this.rec,this.ingAdd);
  }

  ngOnInit() {
    this.getIngredients();
    this.ingAdd = new Ingredient;
    this.ingAdd.nom = "";
    this.ingAdd.quantite = 0;
    this.ingAdd.unite = "";
  }

}
