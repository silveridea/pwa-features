import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionComponent } from './motion.component';

describe('MotionComponent', () => {
  let component: MotionComponent;
  let fixture: ComponentFixture<MotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
