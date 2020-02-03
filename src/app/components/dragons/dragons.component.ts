import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { GetDragons } from '../../store/app.actions';


@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {
dragons;
  constructor(private store:Store<{dragons:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetDragons());
    this.store.select((state)=>{
      return state.dragons.dragons;
    }).pipe().subscribe((dragons)=>{
      this.dragons = dragons;
    })
  }

}
