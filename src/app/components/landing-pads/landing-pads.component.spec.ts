import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPadsComponent } from './landing-pads.component';

describe('LandingPadsComponent', () => {
  let component: LandingPadsComponent;
  let fixture: ComponentFixture<LandingPadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
