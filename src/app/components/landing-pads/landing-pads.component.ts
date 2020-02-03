import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetLandingPads } from '../../store/app.actions';

@Component({
  selector: 'app-landing-pads',
  templateUrl: './landing-pads.component.html',
  styleUrls: ['./landing-pads.component.css']
})
export class LandingPadsComponent implements OnInit {
  landingPads: any;

  constructor(private store:Store<{landingpads:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetLandingPads());
    this.store.select((state)=>{
      return state.landingpads.landingpads;
    }).pipe().subscribe((landindpads)=>{
      this.landingPads = landindpads;
    })
  }

}
