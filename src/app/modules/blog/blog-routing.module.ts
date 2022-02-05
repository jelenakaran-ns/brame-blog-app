import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'Articles',
      noLayout: true,
    },
  },
  {
    path: ':articleId',
    component: SingleArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
