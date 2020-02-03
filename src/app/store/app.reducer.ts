import { Action } from '@ngrx/store';
import { AppActionTypes, CapsulesSuccess, CoresSuccess, DragonsSuccess, LandingPadsSuccess, MissionsSuccess, LaunchesSuccess, LaunchingPadsSuccess, PayloadsSuccess, RoadstersSuccess, RocketsSuccess, ShipsSuccess } from './app.actions';

const initialState ={
    capsules:[],
    cores:[],
    dragons:[],
    launches:[],
    landingpads:[],
    missions:[],
    launchingpads:[],
    payloads:[],
    rockets:[],
    ships:[],
    roadster:[],

};

export function reducer(state: any = initialState, action: Action): any {
    switch (action.type) {
        case AppActionTypes.GET_CAPSULES_SUCCESS:
            return Object.assign({}, state, { capsules: (action as CapsulesSuccess).capsules });
        case AppActionTypes.GET_CORES_SUCCESS:
            return Object.assign({}, state, { cores: (action as CoresSuccess).cores});
        case AppActionTypes.GET_DRAGONS_SUCCESS:
            return Object.assign({}, state, { dragons: (action as DragonsSuccess).dragons });
        case AppActionTypes.GET_LANDINGPADS_SUCCESS:
            return Object.assign({}, state, { landingpads: (action as LandingPadsSuccess).landingpads });
        case AppActionTypes.GET_MISSIONS_SUCCESS:
            return Object.assign({}, state, { missions: (action as MissionsSuccess).missions});
        case AppActionTypes.GET_LAUNCHES_SUCCESS:
            return Object.assign({}, state, { launches: (action as LaunchesSuccess).launches});
        case AppActionTypes.GET_LAUNCHINGPADS_SUCCESS:
            return Object.assign({}, state, { launchingpads: (action as LaunchingPadsSuccess).launchingpads});  
        case AppActionTypes.GET_PAYLOADS_SUCCESS:
            return Object.assign({}, state, { payloads: (action as PayloadsSuccess).payloads});
        case AppActionTypes.GET_ROADSTERS_SUCCESS:
            return Object.assign({}, state, { roadster: (action as RoadstersSuccess).roadster});  
        case AppActionTypes.GET_ROCKETS_SUCCESS:
            return Object.assign({}, state, { rockets : (action as RocketsSuccess).rockets});
        case AppActionTypes.GET_SHIPS_SUCCESS:
            return Object.assign({}, state, { ships : (action as ShipsSuccess).ships});
        default:
            return state;    
    }
}