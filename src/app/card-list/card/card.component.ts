import { Component, Input, OnInit } from '@angular/core';
import { DrinkType } from '../card-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() drink: DrinkType = {
    "idDrink": "",
    "strDrink": "",
    "strDrinkThumb": "",
    "strInstructions": ""
  };

  constructor() { }

  ngOnInit(): void {

  }

}
