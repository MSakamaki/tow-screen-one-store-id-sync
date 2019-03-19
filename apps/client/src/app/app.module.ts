import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreCoreModule } from '@tow-screen-one-store-id-sync/store/core';
import { StoreSubModule } from '@tow-screen-one-store-id-sync/store/sub';
import { CustomSerializer, reducers } from './custom-route-serializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreCoreModule,
    StoreSubModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'page-one',
          loadChildren:
            '@tow-screen-one-store-id-sync/features/page-one#FeaturesPageOneModule'
        },
        {
          path: 'page-tow',
          loadChildren:
            '@tow-screen-one-store-id-sync/features/page-tow#FeaturesPageTowModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(reducers, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
