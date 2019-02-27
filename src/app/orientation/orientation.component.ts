import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrientationComponent implements OnInit {
  public compatible = true;
  public displayAlpha = 0;
  public displayBeta = 0;
  public displayGamma = 0;
  public transformStyles$ = new BehaviorSubject<any>(null);
  constructor(private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.compatible = this.checkCompatibility();
  }
  public checkCompatibility () {
    return !!('DeviceOrientationEvent' in window);
  }
  @HostListener('window:deviceorientation', ['$event']) handleOrientation(event: DeviceOrientationEvent) {
    // https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent
    // https://developers.google.com/web/fundamentals/native-hardware/device-orientation/
    this.displayAlpha = event.alpha;  // In degree in the range [-180,180] //rotateDegrees
    this.displayBeta = event.beta;  // In degree in the range [-180,180] frontToBack
    this.displayGamma = event.gamma; // In degree in the range [-90,90] //leftToRight

    const transdata = this.getStylesString( event.alpha,  event.beta,  event.gamma);
    this.transformStyles$.next(transdata);
  }
  private getStylesString(alpha: number, beta:number, gamma: number): any {
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms
    //alpha moves between 0 and 360 deg, rotates around z axis
    //beta moves between -180 and 180 deg, rotates around x axis
    //gamma moves between -90 and 90 deg, rotates around y axis
    // let x = 0;
    // if (record.beta >= -90  && record.beta <= 90) {
    //   x = Math.abs(record.beta - 90);
    // } else if ((record.beta > 90 && record.beta < 180) ||
    //           (record.beta < -90 && record.beta >= -180)) {
    //   x = 360 - (record.beta - 90);
    // }
    let x = 0;
    if (beta >= -90 && beta <= 90) {
      x = Math.abs(beta - 90);
    } else {
      x = Math.abs(beta - 90) * (-1);
    }
    const y = gamma;
    const z = (alpha - 180) * (-1);
    this.cd.markForCheck();
    return {
      //'transform': `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
      'transform': `rotateX(${x}deg) rotateY(${y}deg)`
    };
  }
}
