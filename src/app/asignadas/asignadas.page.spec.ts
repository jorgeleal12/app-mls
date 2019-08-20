import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignadasPage } from './asignadas.page';

describe('AsignadasPage', () => {
  let component: AsignadasPage;
  let fixture: ComponentFixture<AsignadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
