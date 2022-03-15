import { Request, Response } from 'express';
import { ITeam } from '../interfaces/team';
import TeamService from '../services/team.service';
import BaseController from './base.controller';

export default class TeamController extends BaseController<ITeam, TeamService>{
    
    constructor(entityService: TeamService ){
        super(entityService)
     }

     updateScoreTeam(req: Request, res: Response, mode: string): boolean {
        const team_id: number = req.body.team_id;
        const step_counter: number =req.body.step_counter;
        const prev_step_counter: number =req.body.prev_step_counter;
        const user_id: number =req.body.id;
        try {
            return this.entityService.updateScoreTeam(team_id, step_counter, prev_step_counter,user_id, mode);
          } catch (e: any) {
            return e.message;
        }
    }

}
