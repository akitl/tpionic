import { Component, OnInit ,Output } from '@angular/core';

import { Recette } from '../../recette';
import { Ingredient } from '../../ingredient';

import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html'
})
export class PlanificationComponent implements OnInit {


  recs : Recette[];
  recSelect :Recette;

  constructor(private IngredientService: IngredientService) { }


  getRecettes(): void {
    this.IngredientService.getRecettes()
        .subscribe(recs => this.recs = recs);   
  }

  onSelect(rec):void{
 this.recSelect = rec;
  }

  ngOnInit() {
    this.getRecettes();
  }

}
