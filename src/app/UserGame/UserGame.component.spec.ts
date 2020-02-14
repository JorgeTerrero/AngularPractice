/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserGameComponent } from './UserGame.component';

describe('UserGameComponent', () => {
  let component: UserGameComponent;
  let fixture: ComponentFixture<UserGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
