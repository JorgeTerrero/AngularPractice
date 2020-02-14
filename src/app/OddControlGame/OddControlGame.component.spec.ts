/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OddControlGameComponent } from './OddControlGame.component';

describe('OddControlGameComponent', () => {
  let component: OddControlGameComponent;
  let fixture: ComponentFixture<OddControlGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddControlGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddControlGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
