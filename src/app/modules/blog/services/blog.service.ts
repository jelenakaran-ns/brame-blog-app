import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '@modules/shared/models/articleDto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articlesUrl = 'articles';
  categoriesUrl = 'categories';
  constructor(
    private readonly http: HttpClient,
  ) { }


  getArticles(page: string): Observable<any> {
    return this.http.get<any>(`${this.articlesUrl}?page=${page}`);
  }

  getCategories(page: string): Observable<any> {
    return this.http.get<any>(`${this.categoriesUrl}?page=${page}`);
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<any>(`${this.articlesUrl}/${id}`)
      .pipe(
        map(res => res.data),
      );
  }

  getCategoryById(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.categoriesUrl}/${id}`);
  }

  getArticleComments(id: string): Observable<any> {
    return this.http.get<any>(`${this.articlesUrl}/${id}/comments`);
  }
}
