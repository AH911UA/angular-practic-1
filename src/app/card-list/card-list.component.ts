import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DrinksService } from './card-list.service';


export interface DrinkType {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  btn?: string;
}

export interface DrinksType {
  drinks: DrinkType[]
}

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [DrinksService]
})
export class CardListComponent implements OnInit {

  public drinks: DrinkType[] | null = null;

  public drinkSearch!: FormGroup; 

  public searchOnChange() {    
    this.drinksService.getDrinks(this.drinkSearch.value.drinkName)
      .subscribe(data => {
        if (data['drinks']) {
          this.drinks = [...data.drinks]
        }
      });
  }


  constructor(private drinksService: DrinksService,
              private fb: FormBuilder
    ) {
     
  }

  ngOnInit(): void {
    this.drinkSearch = this.fb.group({drinkName: ['margarita']});

    this.drinksService.getDrinks()
      .subscribe(data => this.drinks = [...data.drinks]);
  }

}
