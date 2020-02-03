import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchingPadsComponent } from './launching-pads.component';

describe('LaunchingPadsComponent', () => {
  let component: LaunchingPadsComponent;
  let fixture: ComponentFixture<LaunchingPadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchingPadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchingPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
