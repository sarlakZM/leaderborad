import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { toRouteData } from '../shared/model/route-data.model';
import { UserComponent } from '../leaderboard/user/user.component';
import { TeamComponent } from '../leaderboard/team/team.component';


const routes: Routes = [
   {
    path: '',
    component: TeamComponent,
    data: toRouteData({
      title: 'Teams',
    }),
  },
  {
    path: 'teams/:id',
    component: UserComponent,
    data: toRouteData({
      title: 'Users',
    }),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderboardRoutingModule {constructor(){ }}
