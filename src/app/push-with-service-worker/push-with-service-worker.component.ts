import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-push-with-service-worker',
  templateUrl: './push-with-service-worker.component.html',
  styleUrls: ['./push-with-service-worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushWithServiceWorkerComponent implements OnInit {
  private permissionGranted = false;
  constructor(private location: Location) {
  }
  ngOnInit() {
    if (!!('Notification' in window)) {
      Notification.requestPermission()
        .then((result) => {
          this.permissionGranted = (result === 'granted');
        }).catch((err)=>{
        });
    }
  }

  onNotif() {
    const title = 'Hello';
    navigator.serviceWorker.ready.then((swRegistration) => {
      const opt = {
        body: 'Native Push Notification with Service Worker',
        icon: this.location.normalize('/assets/icons/silveridea-192x192.png'),
        renotify: true,
        tag: 'sameforall',
        silent: false,
        dir: 'ltr' as NotificationDirection,
        vibrate: [20, 2, 20],
        // actions: [
        //   { 'action': 'yes', 'title': 'Yes', 'icon': `${this.location.normalize('/assets/yes.png')}` },
        //   { 'action': 'no', 'title': 'No', 'icon': `${this.location.normalize('/assets/no.png')}` }
        // ],
        data: {
          url: this.location.path()
        }
      };

      swRegistration.showNotification(title, opt).then((res) => {
        // do something
      }).catch(err => {
        console.log('Error: ' + err);
      });
    });
  }
}
