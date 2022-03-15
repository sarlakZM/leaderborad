import TeamDao from "../models/team.dao";
import { ITeam } from "../interfaces/team";
import BaseService from "./base.service";

export default class TeamService extends BaseService<ITeam, TeamDao> {
    constructor(teamDao: TeamDao){
        super(teamDao)
    }

   updateScoreTeam = (team_id:number, step_counter:number, prev_step_counter: number, user_id:number, mode:string): boolean => 
                        this.entityDao.updateScoreTeam(team_id, step_counter, prev_step_counter, user_id, mode);

}

