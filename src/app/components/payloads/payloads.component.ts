import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { GetPayloads } from '../../store/app.actions';

@Component({
  selector: 'app-payloads',
  templateUrl: './payloads.component.html',
  styleUrls: ['./payloads.component.css']
})
export class PayloadsComponent implements OnInit {
  payloads: any;

  constructor(private store:Store<{payloads:any}>) { }

  ngOnInit() {
    this.store.dispatch(new GetPayloads());
    this.store.select((state)=>{
      return state.payloads.payloads;
    }).pipe().subscribe((payloads)=>{
      this.payloads = payloads;
    })
  }

}
