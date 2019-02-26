import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';
import { Location } from '@angular/common';

@Component({
  selector: 'app-push-with-html5',
  templateUrl: './push-with-html5.component.html',
  styleUrls: ['./push-with-html5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushWithHtml5Component implements OnInit {

  constructor(private _pushNotificationService: PushNotificationService, private location: Location) { }

  ngOnInit() {
    this._pushNotificationService.requestPermission().subscribe(res => {
      console.log('Permission: ' + res);
    }, err => {
      console.log('Permission Error:' + err);
    });
  }

  onNotif() {
    const title = 'Hello';
    const options = new PushNotificationOptions();
    options.body = 'Native Push Notification with HTML5';
    options.icon = this.location.normalize('/assets/icons/silveridea-192x192.png'),
    options.renotify = true,
    options.tag = 'sameforall',
    options.silent = false,
    options.dir = 'ltr',
    options.vibrate = [2, 10, 1];

    this._pushNotificationService.create(title, options).subscribe((notif) => {
      console.log(notif.notification);
      console.log(notif.event);
      if (notif.event.type === 'show') {
        console.log('onshow');
        setTimeout(() => {
          notif.notification.close();
        }, 3000);
      }
      if (notif.event.type === 'click') {
        console.log('click');
        notif.notification.close();
      }
      if (notif.event.type === 'close') {
        console.log('close');
      }
    },
    (err) => {
         console.log(err);
    });
  }
}
