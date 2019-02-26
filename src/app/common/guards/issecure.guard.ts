import {Injectable, isDevMode} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class IsSecureGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!(isDevMode()) && window.location.href.toLowerCase().indexOf('//localhost') === -1 && (location.protocol !== 'https:')) {
      location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      return false;
    }
    return true;
  }

}
