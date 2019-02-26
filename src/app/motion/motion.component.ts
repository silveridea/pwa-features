import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Observable, of } from 'rxjs';
import { merge, delay } from 'rxjs/operators';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotionComponent implements OnInit {
  public compatible = true;
  public displayX = 0;
  public displayY = 0;
  public displayZ = 0;
  public shaked$: Observable<boolean> = of(false);
  public lastShake = {
    lastTime: new Date(),
    lastX: null,
    lastY: null,
    lastZ: null
  };
  private options = {
    threshold: 15, // default velocity threshold for shake to register
    timeout: 1000 // default interval between events
  };
  private observer: any;
  private Shaked = new Observable((observer: any) => {
    if (!this.checkCompatibility()) {
      const err = 'Motion is not available in this browser.';
      console.error(err);
      observer.error(err);
      observer.complete();
    }
    this.observer = observer;
  });
  constructor() {
  }
  ngOnInit() {
    this.shaked$ = of(false).pipe(delay(this.options.timeout * 10));//.pipe(merge(of(false)));
    this.Shaked.subscribe(event => {
      this.shaked$ = of(true).pipe(merge(of(false).pipe(delay(this.options.timeout * 3))));
    });
    this.compatible = this.checkCompatibility();
  }
  public checkCompatibility () {
    return !!('DeviceMotionEvent' in window);
  }
  @HostListener('window:devicemotion', ['$event']) handleMotion(event: DeviceMotionEvent) {
    // https://developers.google.com/web/fundamentals/native-hardware/device-orientation/
    // https://developer.mozilla.org/en-US/docs/Web/API/DeviceMotionEvent
    // phone facing the user

    // const accelerationIncludingGravity = event.accelerationIncludingGravity;
    // const acceleration = event.acceleration;
    // not moving = [0, 0, 0]
    // moving up = [0, 5, 0]
    // moving right = [0, 3, 0]
    // moving up and right = [5, 5, 0]

    // const rotationRate = event.rotationRate;
    // const interval = event.interval;
    this.displayX = event.acceleration.x;
    this.displayY = event.acceleration.y;
    this.displayZ = event.acceleration.z;
    this.checkShake(event);
  }

  private checkShake(e: DeviceMotionEvent) {
    const current = e.accelerationIncludingGravity;
    let currentTime;
    let timeDifference;
    let deltaX = 0;
    let deltaY = 0;
    let deltaZ = 0;

    if ((this.lastShake.lastX === null) && (this.lastShake.lastY === null) && (this.lastShake.lastZ === null)) {
      this.lastShake.lastX = current.x;
      this.lastShake.lastY = current.y;
      this.lastShake.lastZ = current.z;
      return;
    }

    deltaX = Math.abs(this.lastShake.lastX - current.x);
    deltaY = Math.abs(this.lastShake.lastY - current.y);
    deltaZ = Math.abs(this.lastShake.lastZ - current.z);

    if (((deltaX > this.options.threshold) && (deltaY > this.options.threshold)) || ((deltaX > this.options.threshold) && (deltaZ > this.options.threshold)) || ((deltaY > this.options.threshold) && (deltaZ > this.options.threshold))) {
        // calculate time in milliseconds since last shake registered
        currentTime = new Date();
        timeDifference = currentTime.getTime() - this.lastShake.lastTime.getTime();

        if (timeDifference > this.options.timeout) {
          this.observer.next(e);
          // window.dispatchEvent(this.event);
          this.lastShake.lastTime = new Date();
        }
    }

    this.lastShake.lastX = current.x;
    this.lastShake.lastY = current.y;
    this.lastShake.lastZ = current.z;
  }
}
