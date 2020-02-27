import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendImagePage } from './send-image.page';

describe('SendImagePage', () => {
  let component: SendImagePage;
  let fixture: ComponentFixture<SendImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
