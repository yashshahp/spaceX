import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetLaunchingPads } from '../../store/app.actions';

@Component({
  selector: 'app-launching-pads',
  templateUrl: './launching-pads.component.html',
  styleUrls: ['./launching-pads.component.css']
})
export class LaunchingPadsComponent implements OnInit {
  launchPads: any;

  constructor(private store:Store<{launchingpads:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetLaunchingPads());
    this.store.select((state)=>{
      return state.launchingpads.launchingpads;
    }).pipe().subscribe((launches)=>{
      this.launchPads = launches;
    })
  }

}
