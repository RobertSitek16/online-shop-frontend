import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  adminAccess = false;

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    return token != null && this.notExpired(token);
  }

  private notExpired(token: string): boolean {
    let exp = jwt_decode<any>(token).exp;
    return (exp * 1000) > new Date().getTime();
  }

  public getAdminAccess(): boolean {
    return this.adminAccess;
  }

  public setAdminAccess(adminAccess: boolean) {
    this.adminAccess = adminAccess;
  }

}
