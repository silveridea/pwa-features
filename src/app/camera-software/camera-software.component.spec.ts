import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraSoftwareComponent } from './camera-software.component';

describe('CameraSoftwareComponent', () => {
  let component: CameraSoftwareComponent;
  let fixture: ComponentFixture<CameraSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
