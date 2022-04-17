import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { effects } from './shared/store/effects';
import { metaReducers, reducers } from './shared/store/reducers/';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    LeaderboardModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 50, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
      // autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

