import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './components/display/display.component';
import { 
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule 
 } from '@angular/material';
 import {SpacexService} from "./spacex.service";
import { HttpClientModule} from '@angular/common/http';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { CoresComponent } from './components/cores/cores.component';
import { DragonsComponent } from './components/dragons/dragons.component';
import { LandingPadsComponent } from './components/landing-pads/landing-pads.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchingPadsComponent } from './components/launching-pads/launching-pads.component';
import { MissionsComponent } from './components/missions/missions.component';
import { PayloadsComponent } from './components/payloads/payloads.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RoadstersComponent } from './components/roadsters/roadsters.component';
import { ShipsComponent } from './components/ships/ships.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {AppEffects} from './store/app.effects'
import { reducer } from './store/app.reducer';
import { DateSuffix } from './date-formatter.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CapsulesComponent,
    CoresComponent,
    DragonsComponent,
    LandingPadsComponent,
    LaunchesComponent,
    LaunchingPadsComponent,
    MissionsComponent,
    PayloadsComponent,
    RocketsComponent,
    RoadstersComponent,
    ShipsComponent,
    DateSuffix,
    LoaderComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    NgScrollbarModule,
    MatProgressBarModule,
    StoreModule.forRoot({capsules:reducer,
      cores:reducer,
      dragons:reducer,
      landingpads:reducer,
      launches:reducer,
      missions:reducer,
      launchingpads:reducer, 
      payloads:reducer,
      rockets:reducer,
      ships:reducer,
      roadster:reducer,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [SpacexService,
    LoaderService,
  { provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
