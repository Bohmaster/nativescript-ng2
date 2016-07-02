// libs
import {provideStore} from '@ngrx/store';

// app
import {nameListReducer} from './services/name-list.service';
import {AuthReducer} from './services/auth';

import {MULTILINGUAL_PROVIDERS, MultilingualStateI, multilingualReducer} from '../i18n.framework/index';

// state definition
export interface AppStoreI {
  i18n: MultilingualStateI;
  names: Array<string>;
  auth: any;
};

export const APP_PROVIDERS: any[] = [
  MULTILINGUAL_PROVIDERS,
  provideStore({ 
    i18n: multilingualReducer,
    names: nameListReducer,
    auth: AuthReducer
  })
];

// services
export * from './services/app-config.service';
export * from './services/name-list.service';
export * from './services/auth';
