import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushWithServiceWorkerComponent } from './push-with-service-worker.component';

describe('PushWithServiceWorkerComponent', () => {
  let component: PushWithServiceWorkerComponent;
  let fixture: ComponentFixture<PushWithServiceWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushWithServiceWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushWithServiceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
