import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera-hardware',
  templateUrl: './camera-hardware.component.html',
  styleUrls: ['./camera-hardware.component.scss']
})
export class CameraHardwareComponent implements OnInit, AfterViewInit {
  @ViewChild('video1') videoRef: ElementRef;
  @ViewChild('canvas1') canvasRef: ElementRef;
  private canvas: any;
  private video: any;
  public videoCapable = true;
  public pictureTaken = false;
  public downloadLink: string;
  private mediaStream: any;
  constructor() { }

  ngOnInit() {
  }
  // note that "#video" is the name of the template variable in the video element
  // https://embed.plnkr.co/Vwaz5oklrV0llzohhnOo/
  // https://developers.google.com/web/fundamentals/media/capturing-images/
  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.video = this.videoRef.nativeElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        })
        .then(stream => {
          this.mediaStream = stream;
          this.videoCapable = true;
          const that = this;
          this.video.srcObject = this.mediaStream;
          this.video.play().then(value => {
            that.canvas.width = that.video.videoWidth;
            that.canvas.height = that.video.videoHeight;
          });
        })
        .catch(err => {
          this.videoCapable = false;
        });
    }
  }
  onSnap() {
    this.canvasRef.nativeElement.height = this.videoRef.nativeElement.videoHeight;
    this.canvasRef.nativeElement.width = this.videoRef.nativeElement.videoWidth;
    const ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');
    ctx.drawImage(this.video , 0, 0, this.canvas.width, this.canvas.height);
    this.pictureTaken = true;
    this.downloadLink = this.canvas.toDataURL();
    this.video.pause();
    for (const track of this.mediaStream.getTracks()) {
      track.stop();
    }
    this.video.srcObject = null;
  }
}
