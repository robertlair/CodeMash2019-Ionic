import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPicturePage } from './session-picture.page';

describe('SessionPicturePage', () => {
  let component: SessionPicturePage;
  let fixture: ComponentFixture<SessionPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionPicturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
