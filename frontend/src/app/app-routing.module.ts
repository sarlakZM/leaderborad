import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [ 
  { path: '', loadChildren: () => import('./leaderboard/leaderboard.module').then(m => m.LeaderboardModule) },
  { path: '**', 
  component: PageNotFoundComponent // PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
