import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetLaunches } from '../../store/app.actions';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: any;

  constructor(private store:Store<{launches:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetLaunches());
    this.store.select((state)=>{
      return state.launches.launches;
    }).pipe().subscribe((launches)=>{
      this.launches = launches;
    })
  }

}
