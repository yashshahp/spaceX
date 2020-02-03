import { Injectable } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { AppActionTypes, CapsulesSuccess, GetCapsules, GetCores, CoresSuccess, GetDragons, DragonsSuccess, GetLandingPads, LandingPadsSuccess, GetLaunches, LaunchesSuccess, GetMissions, MissionsSuccess, GetLaunchingPads, LaunchingPadsSuccess, GetPayloads, PayloadsSuccess, GetRockets, RocketsSuccess, GetShips, ShipsSuccess, GetRoadsters, RoadstersSuccess } from './app.actions';

@Injectable()

export class AppEffects {
    constructor(private spacex: SpacexService, private action: Actions) { }
    @Effect()
    getCapsules = this.action.pipe(
        ofType(AppActionTypes.GET_CAPSULES),
        switchMap((action: GetCapsules) => {
            return this.spacex.getCapsules().pipe(
                map((response: any) => {
                    return new CapsulesSuccess(response)
                })
            );
        }))

    @Effect()
    getCores = this.action.pipe(
        ofType(AppActionTypes.GET_CORES),
        switchMap((action: GetCores) => {
            return this.spacex.getCores().pipe(
                map((response: any) => {
                    return new CoresSuccess(response)
                })
            );
        }))
    @Effect()
    getDragons = this.action.pipe(
        ofType(AppActionTypes.GET_DRAGONS),
        switchMap((action: GetDragons) => {
            return this.spacex.getDragons().pipe(
                map((response: any) => {
                    return new DragonsSuccess(response)
                })
            );
        }))
    @Effect()
    getLandingPads = this.action.pipe(
        ofType(AppActionTypes.GET_LANDINGPADS),
        switchMap((action: GetLandingPads) => {
            return this.spacex.getLandingPads().pipe(
                map((response: any) => {
                    return new LandingPadsSuccess(response)
                })
            );
        }))
    @Effect()
    getLaunches = this.action.pipe(
        ofType(AppActionTypes.GET_LAUNCHES),
        switchMap((action: GetLaunches) => {
            return this.spacex.getLaunches().pipe(
                map((response: any) => {
                    return new LaunchesSuccess(response)
                })
            );
        }))
    @Effect()
    getMissions = this.action.pipe(
        ofType(AppActionTypes.GET_MISSIONS),
        switchMap((action: GetMissions) => {
            return this.spacex.getMissions().pipe(
                map((response: any) => {
                    return new MissionsSuccess(response)
                })
            );
        }))
    @Effect()
    getLaunchingpads = this.action.pipe(
        ofType(AppActionTypes.GET_LAUNCHINGPADS),
        switchMap((action: GetLaunchingPads) => {
            return this.spacex.getLaunchinPads().pipe(
                map((response: any) => {
                    return new LaunchingPadsSuccess(response)
                })
            );
        }))
    @Effect()
    getPayloads = this.action.pipe(
        ofType(AppActionTypes.GET_PAYLOADS),
        switchMap((action: GetPayloads) => {
            return this.spacex.getPayloads().pipe(
                map((response: any) => {
                    return new PayloadsSuccess(response)
                })
            );
        }))
    @Effect()
    getRockets = this.action.pipe(
        ofType(AppActionTypes.GET_ROCKETS),
        switchMap((action: GetRockets) => {
            return this.spacex.getRockets().pipe(
                map((response: any) => {
                    return new RocketsSuccess(response)
                })
            );
        }))
    @Effect()
    getShips = this.action.pipe(
        ofType(AppActionTypes.GET_SHIPS),
        switchMap((action: GetShips) => {
            return this.spacex.getShips().pipe(
                map((response: any) => {
                    return new ShipsSuccess(response)
                })
            );
        }))
    @Effect()
    getRaodster = this.action.pipe(
        ofType(AppActionTypes.GET_ROADSTERS),
        switchMap((action: GetRoadsters) => {
            return this.spacex.getRoadster().pipe(
                map((response: any) => {
                    return new RoadstersSuccess(response)
                })
            );
        }))
}