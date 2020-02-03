import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatloadsComponent } from './patloads.component';

describe('PatloadsComponent', () => {
  let component: PatloadsComponent;
  let fixture: ComponentFixture<PatloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
