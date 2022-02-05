import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '@modules/blog/services/blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  isAdmin = false;
  page = '1';
  articles: any;
  constructor(
    private readonly blogService: BlogService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.router.url.includes('admin');
    this.getArticles(this.page);
  }

  createNew(): void {
    this.router.navigateByUrl('admin/articles/create');
  }

  getArticles(page: string): void {
    this.blogService.getArticles(page)
      .subscribe(res => this.articles = res);
  }

  onPaginationChange(paginationLink: any): void {
    if (paginationLink.url) {
      this.page = paginationLink.url.split('=')[1];
      this.getArticles(this.page);
    }
  }

}
