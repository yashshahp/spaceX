import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetMissions } from '../../store/app.actions';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions: any;

  constructor(private store:Store<{missions:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetMissions());
    this.store.select((state)=>{
      return state.missions.missions;
    }).pipe().subscribe((missions)=>{
      this.missions = missions;
    })
  }

}
