import { Component, OnInit } from '@angular/core';
import { GetCapsules } from '../../store/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {
capsules;
  constructor(private store: Store<{ capsules: any }>) { }

  ngOnInit() {
    this.store.dispatch(new GetCapsules());
    this.store.select((state)=>{
      return state.capsules.capsules;
    }).pipe().subscribe((capsules)=>{
      this.capsules = capsules;
    })
  }

}
