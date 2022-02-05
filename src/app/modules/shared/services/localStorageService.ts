import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public getToken(): string |null {
    return localStorage.getItem('token')
  }

  public setToken(token: string): void{
     localStorage.setItem('token',token);
  }

  public removeToken(): void {
     localStorage.removeItem('token');
  }

}
