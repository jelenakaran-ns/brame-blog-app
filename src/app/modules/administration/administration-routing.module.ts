import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from '@modules/blog/components/articles/articles.component';
import { SingleArticleComponent } from '@modules/blog/components/single-article/single-article.component';
import { AdminBaseComponent } from './components/admin-base/admin-base.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBaseComponent,
    data: {
      title: 'Admin',
      noLayout: true,
    },
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'articles/create',
    component: ArticleFormComponent,
  },
  {
    path: 'categories/create',
    component: CategoryFormComponent,
  },
  {
    path: 'categories/:categoryId',
    component: SingleCategoryComponent,
  },
  {
    path: 'articles/:articleId',
    component: SingleArticleComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }
