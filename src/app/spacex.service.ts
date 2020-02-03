import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http:HttpClient) { }
  private Url: string="https://api.spacexdata.com/v3";
  getInfo(){
    return this.http.get(this.Url+'/info')
  }
  getHistory(){
    return this.http.get(this.Url+'/history')
  }
  getCapsules(){
    return this.http.get(this.Url+'/capsules')
  }
  getCores(){
    return this.http.get(this.Url+'/cores')
  }
  getDragons(){
    return this.http.get(this.Url+'/dragons')
  }
  getLandingPads(){
    return this.http.get(this.Url+'/landpads')
  }
  getLaunches(){
    return this.http.get(this.Url+'/launches')
  }
  getLaunchinPads(){
    return this.http.get(this.Url+'/launchpads')
  }
  getMissions(){
    return this.http.get(this.Url+'/missions')
  }
  getPayloads(){
    return this.http.get(this.Url+'/payloads')
  }
  getRockets(){
    return this.http.get(this.Url+'/rockets')
  }
  getRoadster(){
    return this.http.get(this.Url+'/roadster')
  }
  getShips(){
    return this.http.get(this.Url+'/ships')
  }
}
