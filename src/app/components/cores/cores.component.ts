import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCores } from '../../store/app.actions';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.css']
})
export class CoresComponent implements OnInit {
cores;
  constructor(private store:Store<{cores:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetCores());
    this.store.select((state)=>{
      return state.cores.cores;
    }).pipe().subscribe((cores)=>{
      this.cores = cores;
    })
  }

}
