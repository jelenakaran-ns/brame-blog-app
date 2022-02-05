import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '@modules/blog/services/blog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  page = '1';
  categories: any;
  constructor(
    private readonly blogService: BlogService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories(this.page);
  }

  getCategories(page: string): void {
    this.blogService.getCategories(page)
      .subscribe(res => this.categories = res);
  }

  createNewCategory(): void {
    this.router.navigateByUrl('admin/categories/create');
  }

  onPaginationChange(paginationLink: any): void {
    if (paginationLink.url) {
      this.page = paginationLink.url.split('=')[1];
      this.getCategories(this.page);
    }
  }

}
