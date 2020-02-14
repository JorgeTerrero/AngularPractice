/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventControlGameComponent } from './EventControlGame.component';

describe('EventControlGameComponent', () => {
  let component: EventControlGameComponent;
  let fixture: ComponentFixture<EventControlGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventControlGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventControlGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
