import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@modules/shared/services/localStorageService';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss']
})
export class AdminBaseComponent {
  links = [
    {
      path: ['/admin/articles'],
      label: 'Articles',
    },
    {
      path: ['/admin/categories'],
      label: 'Categories',
    },
  ];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  deleteToken(): void {
    this.localStorageService.removeToken();
    this.router.navigateByUrl('login');
  }

}
