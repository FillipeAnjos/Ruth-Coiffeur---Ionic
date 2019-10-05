import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemModalPage } from './imagem-modal.page';

describe('ImagemModalPage', () => {
  let component: ImagemModalPage;
  let fixture: ComponentFixture<ImagemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
