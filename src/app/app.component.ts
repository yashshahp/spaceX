import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoaderService} from './loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaceX';
 
  constructor(private router:Router,private load:LoaderService){}
  isLoading: Subject<boolean> = this.load.isLoading;
  home(){
    this.router.navigate([''])
  }
  handleClick(data) {
    if (data == 'capsules') {
      this.router.navigate(['capsules'])
    }
    if (data == 'cores') {
      this.router.navigate(['cores'])
    }
    if (data == 'dragons') {
      this.router.navigate(['dragons'])
    }
    if (data == 'landingpads') {
      this.router.navigate(['landingpads'])
    }
    if (data == 'launches') {
      this.router.navigate(['launches'])
    }
    if (data == 'launchpads') {
      this.router.navigate(['launchpads'])
    }
    if (data == 'missions') {
      this.router.navigate(['missions'])
    }
    if (data == 'payloads') {
      this.router.navigate(['payloads'])
    }
    if (data == 'roadster') {
      this.router.navigate(['roadster'])
    }
    if (data == 'rockets') {
      this.router.navigate(['rockets'])
    }
    if (data == 'ships') {
      this.router.navigate(['ships'])
    }
  }
}
