import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImageSPage } from './view-image-s.page';

describe('ViewImageSPage', () => {
  let component: ViewImageSPage;
  let fixture: ComponentFixture<ViewImageSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewImageSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewImageSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
