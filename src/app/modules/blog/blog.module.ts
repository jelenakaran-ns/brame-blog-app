import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { BlogService } from './services/blog.service';
import { BlogRoutingModule } from './blog-routing.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ArticleContainerComponent } from './components/article-container/article-container.component';
import { ArticleFormComponent } from '@modules/administration/components/article-form/article-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@modules/shared/shared.module';



@NgModule({
  declarations: [
    ArticlesComponent,
    SingleArticleComponent,
    ArticleContainerComponent,
    ArticleFormComponent,
  ],
  providers: [
    BlogService,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class BlogModule { }
