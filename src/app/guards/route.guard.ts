import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdministrationService } from '@modules/administration/services/administration.service';


@Injectable()
export class RouteGuard implements CanActivate {
  constructor(
    private readonly administrationService: AdministrationService,
    private readonly router: Router,
  ) {}
  canActivate(): boolean {
    const hasToken = this.administrationService.isAuthorized();
    if (!hasToken){
      this.router.navigateByUrl('login');
    }
    return hasToken;
  }
}
