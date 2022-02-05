import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@modules/shared/models/articleDto';
import { LocalStorageService } from '@modules/shared/services/localStorageService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  token: any = this.localStorageService.getToken();
  categoriesUrl = 'categories';
  articlesUrl = 'articles';

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService,
  ) {
  }

  editArticle(id: string, payload: Article): Observable<Article> {
    return this.http.put<any>(`${this.articlesUrl}/${id}?api_token=${this.token}`, payload)
      .pipe(
        map(res => res.data),
      );
  }

  createArticle(payload: Article): Observable<Article> {
    return this.http.post<any>(`${this.articlesUrl}?api_token=${this.token}`, payload)
      .pipe(
        map(res => res.data),
      );
  }

  editCategory(id: any, payload: any): Observable<any> {
    return this.http.put<any>(`${this.categoriesUrl}/${id}?api_token=${this.token}`, payload);
  }

  createCategory(payload: any): Observable<any> {
    return this.http.post<any>(`${this.categoriesUrl}?api_token=${this.token}`, payload);
  }

  isAuthorized(): boolean {
    return !!this.token;
  }
}
