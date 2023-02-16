import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._authService.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        return !isLoggedIn ?
          true :
          this._router.parseUrl(route.data['redirectUrl'])
      })
    )
  }
}
