import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core';

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
  }
}
