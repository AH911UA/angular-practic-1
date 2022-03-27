import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DrinksType } from './card-list.component';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private configUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) { }

  public getDrinks(name: string = 'margarita'):Observable<DrinksType> {
    return this.http.get<DrinksType>(this.configUrl + name);
  }
}
