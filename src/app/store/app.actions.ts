import { Action } from '@ngrx/store';

export enum AppActionTypes{
    GET_CAPSULES='[Capsules] get capsule details',
    GET_CAPSULES_SUCCESS='[capsules] get capsule success',
    GET_CORES='[Cores] get core details',
    GET_CORES_SUCCESS='[Cores] get core success',
    GET_DRAGONS='[Dragons] get dragon details',
    GET_DRAGONS_SUCCESS='[Dragons] get dragon success',
    GET_LANDINGPADS='[LandingPads] get landingPads details',
    GET_LANDINGPADS_SUCCESS='[LandingPads] get landingPads success',
    GET_LAUNCHES='[Launches] get launches details',
    GET_LAUNCHES_SUCCESS='[Launches] get launches success',
    GET_LAUNCHINGPADS='[LaunchingPads] get launchingPads details',
    GET_LAUNCHINGPADS_SUCCESS='[LaunchingPads] get launchingPads success',
    GET_MISSIONS='[missions] get mission details',
    GET_MISSIONS_SUCCESS='[missions] get mission success',
    GET_PAYLOADS='[payloads] get payload details',
    GET_PAYLOADS_SUCCESS='[payload] get payloads success',
    GET_ROADSTERS='[roadsters] get roadster details',
    GET_ROADSTERS_SUCCESS='[roadsters] get roadster success',
    GET_ROCKETS='[rockets] get rockets details',
    GET_ROCKETS_SUCCESS='[rockets] get rockets success',
    GET_SHIPS='[ships] get ships details',
    GET_SHIPS_SUCCESS='[ships] get ships success',
}

export class GetCapsules implements Action{
    readonly type:string = AppActionTypes.GET_CAPSULES;
    constructor(){}
}
export class CapsulesSuccess implements Action{
    readonly type:string = AppActionTypes.GET_CAPSULES_SUCCESS;
    constructor(public capsules:any){}
}
export class GetCores implements Action{
    readonly type:string = AppActionTypes.GET_CORES;
    constructor(){}
}
export class CoresSuccess implements Action{
    readonly type:string = AppActionTypes.GET_CORES_SUCCESS;
    constructor(public cores:any){}
}
export class GetDragons implements Action{
    readonly type:string = AppActionTypes.GET_DRAGONS;
    constructor(){}
}
export class DragonsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_DRAGONS_SUCCESS;
    constructor(public dragons:any){}
}
export class GetLandingPads implements Action{
    readonly type:string = AppActionTypes.GET_LANDINGPADS;
    constructor(){}
}
export class LandingPadsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_LANDINGPADS_SUCCESS;
    constructor(public landingpads:any){}
}
export class GetLaunches implements Action{
    readonly type:string = AppActionTypes.GET_LAUNCHES;
    constructor(){}
}
export class LaunchesSuccess implements Action{
    readonly type:string = AppActionTypes.GET_LAUNCHES_SUCCESS;
    constructor(public launches:any){}
}
export class GetLaunchingPads implements Action{
    readonly type:string = AppActionTypes.GET_LAUNCHINGPADS;
    constructor(){}
}
export class LaunchingPadsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_LAUNCHINGPADS_SUCCESS;
    constructor(public launchingpads:any){}
}
export class GetMissions implements Action{
    readonly type:string = AppActionTypes.GET_MISSIONS;
    constructor(){}
}
export class MissionsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_MISSIONS_SUCCESS;
    constructor(public missions:any){}
}
export class GetPayloads implements Action{
    readonly type:string = AppActionTypes.GET_PAYLOADS;
    constructor(){}
}
export class PayloadsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_PAYLOADS_SUCCESS;
    constructor(public payloads:any){}
}
export class GetRoadsters implements Action{
    readonly type:string = AppActionTypes.GET_ROADSTERS;
    constructor(){}
}
export class RoadstersSuccess implements Action{
    readonly type:string = AppActionTypes.GET_ROADSTERS_SUCCESS;
    constructor(public roadster:any){}
}
export class GetRockets implements Action{
    readonly type:string = AppActionTypes.GET_ROCKETS;
    constructor(){}
}
export class RocketsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_ROCKETS_SUCCESS;
    constructor(public rockets:any){}
}
export class GetShips implements Action{
    readonly type:string = AppActionTypes.GET_SHIPS;
    constructor(){}
}
export class ShipsSuccess implements Action{
    readonly type:string = AppActionTypes.GET_SHIPS_SUCCESS;
    constructor(public ships:any){}
}