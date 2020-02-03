import { Component, OnInit } from '@angular/core';
import { GetShips } from '../../store/app.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: any;

  constructor(private store:Store<{ships:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetShips());
    this.store.select((state)=>{
      return state.ships.ships;
    }).pipe().subscribe((ships)=>{
      this.ships = ships;
    })
  }

}
