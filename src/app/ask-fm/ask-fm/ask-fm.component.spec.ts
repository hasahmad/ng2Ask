/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AskFmComponent } from './ask-fm.component';

describe('AskFmComponent', () => {
  let component: AskFmComponent;
  let fixture: ComponentFixture<AskFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
