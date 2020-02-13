/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestServerComponent } from './testServer.component';

describe('TestServerComponent', () => {
  let component: TestServerComponent;
  let fixture: ComponentFixture<TestServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
