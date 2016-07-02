import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';

//libs
import { Store, ActionReducer, Action} from '@ngrx/store';

//app

/**
 * ng-rx setup start 
 */
export const AUTH_ACTIONS: any = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

// reducer
export const AuthReducer: ActionReducer<any> = (
    state: any = [],
    action: Action) => {
        switch (action.type) {
            case AUTH_ACTIONS.LOGIN:
                return [...action.payload];
            case AUTH_ACTIONS.LOGOUT:
                return [...state, action.payload];
            default:
                return state;
        }
};

/**
 * auth service
 */
@Injectable()
export class AuthService {
    private auth: Observable<any>;

    constructor(private store: Store<any>,
                private http: Http) {
                    this.auth = store.select('auth');
                }
    
    login(credentials?: Object) {
        this.http.get('assets/data.json')
            .subscribe((results: Response) => {
                this.store.dispatch({
                    type: AUTH_ACTIONS.LOGIN,
                    payload: results
                });    
            });
    }
}