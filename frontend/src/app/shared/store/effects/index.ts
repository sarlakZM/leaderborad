import { ErrorEffects } from './error.effect';
import { SuccessEffects } from './success.effect';
import { TeamEffects } from './team.effect';
import { UserEffects } from './user.effect';

export const effects: any[] = [UserEffects, TeamEffects, ErrorEffects, SuccessEffects];