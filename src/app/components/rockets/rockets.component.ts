import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetRockets } from '../../store/app.actions';


@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets: any;

  constructor(private store:Store<{rockets:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetRockets());
    this.store.select((state)=>{
      return state.rockets.rockets;
    }).pipe().subscribe((rockets)=>{
      this.rockets = rockets;
    })
  }

}
