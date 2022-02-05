import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '@modules/blog/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
  isEditActive = false;
  category?: any;
  routeSub: Subscription = new Subscription();
  categoryId = '';
  constructor(
    private readonly route: ActivatedRoute,
    private readonly blogService: BlogService,
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      this.categoryId = param.categoryId;
      this.getCategoryById(this.categoryId);
    });
  }

  getCategoryById(id: string): void {
    this.blogService.getCategoryById(id)
    .subscribe(res => {
      this.category = res.data;
    });
  }

  editCategory(): void {
    this.isEditActive = true;
  }
}
