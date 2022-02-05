import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '@modules/blog/services/blog.service';
import { Article } from '@modules/shared/models/articleDto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit, OnDestroy {
  routeSub: Subscription = new Subscription();
  articleId = '';
  article: any;
  category = '';
  comments: any[] = [];
  isAdmin = false;
  isEditActive = false;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly blogService: BlogService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.router.url.includes('admin');
    this.routeSub = this.route.params.subscribe(param => {
      this.articleId = param.articleId;
      this.getSingleArticle(this.articleId);
      this.getCommentsForArticle(this.articleId);
    });
  }

  getSingleArticle(id: string): void {
    this.blogService.getArticle(id)
      .subscribe((res) => {
        this.article = res;
        this.getCategoryById(res.category_id);
      });
  }

  getCommentsForArticle(id: string): void {
    this.blogService.getArticleComments(id)
      .subscribe(res => this.comments = res.data);
  }

  getCategoryById(id: number): void {
    this.blogService.getCategoryById(id)
    .subscribe(res => {
      this.category = res.data.name;
    });
  }

  editArticle(): void {
    this.isEditActive = true;
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

}
