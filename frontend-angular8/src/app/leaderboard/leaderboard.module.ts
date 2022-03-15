import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { TeamComponent } from './team/team.component';
import { TeamFormComponent } from './team/team-form/team-form.component';

@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    TeamComponent,
    TeamFormComponent,
  ],
  entryComponents:[
    UserFormComponent,
    TeamFormComponent
  ],
  imports: [CommonModule, LeaderboardRoutingModule, SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class LeaderboardModule {}
