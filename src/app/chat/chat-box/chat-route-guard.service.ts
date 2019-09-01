import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ChatRouteGuardService implements CanActivate {

  constructor(private router: Router, public Cookie: CookieService) { }

  canActivate(_route:ActivatedRouteSnapshot): boolean {
    console.log("in guard service");

    if (this.Cookie.get('authtoken') === undefined || this.Cookie.get('authtoken') === '' || this.Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;


    }
  }
}