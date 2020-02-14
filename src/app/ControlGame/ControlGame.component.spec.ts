/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControlGameComponent } from './ControlGame.component';

describe('ControlGameComponent', () => {
  let component: ControlGameComponent;
  let fixture: ComponentFixture<ControlGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
