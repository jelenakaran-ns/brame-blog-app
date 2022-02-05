import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@modules/shared/services/localStorageService';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  token: any;
  constructor(
    private readonly localStorageService: LocalStorageService,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: any = {};
    const token = this.localStorageService.getToken();
    if (token ) {
      headers.Authorization = `Bearer ${token}`;
    }
    const apiReq = req.clone({
      url: `http://18.192.182.140/api/${req.url}`,
      setHeaders: headers,
    });
    return next.handle(apiReq);
  }
}
