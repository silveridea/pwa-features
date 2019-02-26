import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraHardwareComponent } from './camera-hardware.component';

describe('CameraHardwareComponent', () => {
  let component: CameraHardwareComponent;
  let fixture: ComponentFixture<CameraHardwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraHardwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
