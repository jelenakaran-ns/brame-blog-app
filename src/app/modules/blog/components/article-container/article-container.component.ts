import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {
  @Input() article: any;
  @Input() isAdmin?: boolean;
  routeLink: any;
  constructor() { }

  ngOnInit(): void {
    this.routeLink = this.isAdmin ? ['/admin/articles', this.article.id] : ['/articles', this.article.id];
  }

}
