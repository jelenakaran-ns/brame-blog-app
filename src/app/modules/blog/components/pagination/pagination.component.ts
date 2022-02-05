import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() paginationLinks: any[] = [];
  @Output() paginationChange: EventEmitter<any> = new EventEmitter();

  onLinkClick(link: any): void {
    this.paginationChange.emit(link);
  }

}
