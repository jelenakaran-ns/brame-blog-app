import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@modules/shared/services/localStorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) { }

  setToken(): void {
    this.localStorageService.setToken('9aK4W3D7NpbWwPzJmUOIcyPmyehl0PHZLWP14rzQqKzUPtcFCo0Tn051CvwN');
    this.router.navigateByUrl('admin');
  }

  navigateToArticles(): void {
    this.router.navigateByUrl('articles');
  }

}
