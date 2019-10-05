import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhasPage } from './unhas.page';

describe('UnhasPage', () => {
  let component: UnhasPage;
  let fixture: ComponentFixture<UnhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnhasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
