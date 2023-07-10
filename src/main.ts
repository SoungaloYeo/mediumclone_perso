import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideRouterStore, routerReducer} from '@ngrx/router-store'
import { provideEffects } from '@ngrx/effects';
import { provideStore, provideState } from '@ngrx/store';
import { appRoutes } from './app/app-routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { authFeatureKey, authReducer } from './app/auth/store/reducer';
import { provideHttpClient } from '@angular/common/http';
import * as authEffects from './app/auth/store/effects'


bootstrapApplication(AppComponent, { 
    providers: [
        provideHttpClient(),
        provideRouter(appRoutes), 
        provideStore({router: routerReducer}),
        provideRouterStore(),
        provideState(authFeatureKey, authReducer),
        provideEffects(authEffects),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        })]
})
