import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadstersComponent } from './roadsters.component';

describe('RoadstersComponent', () => {
  let component: RoadstersComponent;
  let fixture: ComponentFixture<RoadstersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadstersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
