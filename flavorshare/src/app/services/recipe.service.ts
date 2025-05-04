import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getALL(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Recipe> {  // Change id type to string
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  create(recipe: Omit<Recipe, 'id'>): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }

  update(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.baseUrl}/${recipe.id}`, recipe);
  }

  delete(id: string): Observable<void> {  // Change id type to string
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
