import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetRoadsters } from '../../store/app.actions';

@Component({
  selector: 'app-roadsters',
  templateUrl: './roadsters.component.html',
  styleUrls: ['./roadsters.component.css']
})
export class RoadstersComponent implements OnInit {
roadsters;

  constructor(private store:Store<{roadster:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetRoadsters());
    this.store.select((state)=>{
      return state.roadster.roadster;
    }).pipe().subscribe((roadster)=>{
      this.roadsters = roadster;
    })
  }

}
