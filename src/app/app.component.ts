import { Component, isDevMode } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarCollapsed = true;
  title = 'PWA Features demo';

  constructor(private swUpdate: SwUpdate) {
    if (!isDevMode()) {
      this.swUpdate.available.subscribe(event => {
        console.log('A newer version is now available. Refresh the page now to update the cache');
        console.log('reloading...');
        setTimeout(() => {
          window.location.reload();
        }, 1);
      });
      this.swUpdate.checkForUpdate();
    }
  }
}
