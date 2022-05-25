import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { TeamComponent } from './leaderboard/team/team.component';

export interface RouteData {
  title?: string;
}

export const routes: Routes = [

  {
    path: '',
    loadChildren: './leaderboard/leaderboard.module#LeaderboardModule',

  },
  { path: '**', 
    component:PageNotFoundComponent // PageNotFoundComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
