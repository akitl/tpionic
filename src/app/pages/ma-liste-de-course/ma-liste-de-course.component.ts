import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../ingredient';

import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-ma-liste-de-course',
  templateUrl: './ma-liste-de-course.component.html'
})
export class MaListeDeCourseComponent implements OnInit {

  liste : Ingredient[];
    //ingredient slection actuellement
    selectedIng: Ingredient;
    
    
      addDetailBool: boolean = false;
    
  constructor(private IngredientService: IngredientService) { }

    // methode pour binder l'ingredient selectioner
    onSelect(ing: Ingredient): void {
      this.selectedIng = ing;
    }
  
    //supprimer l'ingredient selectioner
    onSelectDel(ing: Ingredient): void {
      this.IngredientService.delIngredientsDansLaList(ing);
    }
  getListDeCourse(): void  {
    this.IngredientService.getListDeCourse()
    .subscribe(liste => this.liste = liste);
  }


    //methode apeller quand on clique sur ajouter un ingredient 
    addDetail(): void{
      this.addDetailBool = true;    
    }
  
    // methode appeller quand l'ingredient as été ajouter
    ingredientAdd(): void{
      this.addDetailBool = false;    
    }
  
    clearList():void{
      this.IngredientService.clearList();
    }

    addDansLeFrigo(ing):void{
      this.IngredientService.addIngredientsDansLeFrigo(ing);
      this.IngredientService.delIngredientsDansLaList(ing);
    }

  ngOnInit() {
    this.getListDeCourse();
  }

}

