import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepiceItemComponent } from './repice-item.component';

describe('RepiceItemComponent', () => {
  let component: RepiceItemComponent;
  let fixture: ComponentFixture<RepiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
