import { Component, OnInit } from '@angular/core';
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

  constructor(private drinksService: DrinksService) { }

  ngOnInit(): void {
    this.drinksService.getDrinks()
      .subscribe(data => this.drinks = [...data.drinks]);
  }

}
