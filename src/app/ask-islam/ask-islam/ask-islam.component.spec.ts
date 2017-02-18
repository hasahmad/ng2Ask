/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AskIslamComponent } from './ask-islam.component';

describe('AskIslamComponent', () => {
  let component: AskIslamComponent;
  let fixture: ComponentFixture<AskIslamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskIslamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
