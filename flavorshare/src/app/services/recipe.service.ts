import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private http = inject(HttpClient);
  private baseUrl ='http://localhost:3000/recipe';

  getALL(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.baseUrl);
  }

  getById(id: number): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);

  }

  create(recipe: Omit<Recipe, 'id'>): Observable<Recipe>{
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }

  update(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(`${this.baseUrl}/${recipe.id}`, recipe);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`); 
  }
}
