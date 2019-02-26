import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushWithHtml5Component } from './push-with-html5.component';

describe('PushWithHtml5Component', () => {
  let component: PushWithHtml5Component;
  let fixture: ComponentFixture<PushWithHtml5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushWithHtml5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushWithHtml5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
