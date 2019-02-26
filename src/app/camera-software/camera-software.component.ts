import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-camera-software',
  templateUrl: './camera-software.component.html',
  styleUrls: ['./camera-software.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraSoftwareComponent implements OnInit {
  @ViewChild('anyImageFileInput') anyImageFileInput: ElementRef;
  @ViewChild('selfieImageFileInput') selfieImageFileInput: ElementRef;
  @ViewChild('mainImageFileInput') mainImageFileInput: ElementRef;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  setFile($event) {
    const selectedFile = $event.target.files || $event.srcElement.files;
    if (selectedFile !== null && selectedFile !== '' && selectedFile.length > 0) {
      const oFile = selectedFile[0];
      const fileName = oFile.name;
      const fileExtension = oFile.name.split('.').pop().toLowerCase();
      this.clearFile();
      // explanation on how to upload a file
      // const formData = new FormData();
      // formData.append('file', oFile, oFile.name);
      // const apiUrl = '';
      // this.http.post(apiUrl , formData)
      //                 .map((res: Response) => res || {})
      //                 .subscribe((res) => {
      //                   // do something on success
                           // this.clearFile();
      //                 }, (err: any) => {
      //                   // do something on failure
                           // this.clearFile();
      //                   console.error(err);
      //                 });
    }
  }
  public clearFile() {
    this.anyImageFileInput.nativeElement.value = null;
    this.selfieImageFileInput.nativeElement.value = null;
    this.mainImageFileInput.nativeElement.value = null;
  }
}
