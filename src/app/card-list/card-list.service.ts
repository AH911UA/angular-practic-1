import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DrinksType } from './card-list.component';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private configUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  constructor(private http: HttpClient) { }

  public getDrinks():Observable<DrinksType> {
    return this.http.get<DrinksType>(this.configUrl)
  }
}
