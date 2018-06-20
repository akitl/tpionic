import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../../ingredient';

import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-mon-frigo',
  templateUrl: './mon-frigo.component.html'
})
export class MonFrigoComponent implements OnInit {

  //liste des ingrédients
  ings : Ingredient[];

  //ingredient slection actuellement
  selectedIng: Ingredient;


  addDetailBool: boolean = false;

  ngOnInit() {
    this.getIngredients();
  }

  constructor(private IngredientService: IngredientService) { }


  // methode pour binder l'ingredient selectioner
  onSelect(ing: Ingredient): void {
    this.selectedIng = ing;
  }

  //supprimer l'ingredient selectioner
  onSelectDel(ing: Ingredient): void {
    this.IngredientService.delIngredientsDansLeFringo(ing);
  }

  //permet de récupéré la liste des ingredient dans le frigo depuis le service
  getIngredients(): void {
    this.IngredientService.getIngredientsDansLeFrigo()
        .subscribe(ings => this.ings = ings);
  }

  //methode apeller quand on clique sur ajouter un ingredient 
  addDetail(): void{
    this.addDetailBool = true;    
  }

  // methode appeller quand l'ingredient as été ajouter
  ingredientAdd(): void{
    this.addDetailBool = false;    
  }

 
  add(): void{
    
      
  }


}
