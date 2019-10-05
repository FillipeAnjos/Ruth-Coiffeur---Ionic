import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabelosPage } from './cabelos.page';

describe('CabelosPage', () => {
  let component: CabelosPage;
  let fixture: ComponentFixture<CabelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabelosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
