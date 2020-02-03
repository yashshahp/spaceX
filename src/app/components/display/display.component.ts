import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../spacex.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  info;
  constructor(private spacex: SpacexService, private router: Router) { }

  ngOnInit() {
    this.spacex.getInfo().subscribe((response: any) => {
      this.info = response;
    });
  }
  redirect() {
    window.open(this.info.links.website, '_blank');
  } 
}
