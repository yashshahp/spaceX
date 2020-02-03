import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { CapsulesComponent } from './components/capsules/capsules.component';
import { CoresComponent } from './components/cores/cores.component';
import { DragonsComponent } from './components/dragons/dragons.component';
import { LandingPadsComponent } from './components/landing-pads/landing-pads.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchingPadsComponent } from './components/launching-pads/launching-pads.component';
import { MissionsComponent } from './components/missions/missions.component';
import { PayloadsComponent } from './components/payloads/payloads.component';
import { RoadstersComponent } from './components/roadsters/roadsters.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { ShipsComponent } from './components/ships/ships.component';


const routes: Routes = [
  {path:'home',component: DisplayComponent},
  {path:'capsules',component: CapsulesComponent},
  {path:'cores',component: CoresComponent},
  {path:'dragons',component: DragonsComponent},
  {path:'landingpads',component: LandingPadsComponent},
  {path:'launches',component: LaunchesComponent},
  {path:'launchpads',component: LaunchingPadsComponent},
  {path:'missions',component: MissionsComponent},
  {path:'payloads',component: PayloadsComponent},
  {path:'roadster',component: RoadstersComponent},
  {path:'rockets',component: RocketsComponent},
  {path:'ships',component: ShipsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
