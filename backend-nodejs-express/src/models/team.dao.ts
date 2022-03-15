import { ITeam } from "../interfaces/team";
import BaseDao from "./base.dao";


export default class TeamDao extends BaseDao<ITeam> {
    constructor(){
        super('teams')
    } 
    
    updateScoreTeam = (team_id:number, step_counter:number, prev_step_counter:number, user_id:number, mode:string): boolean => {
        if (mode === 'add'){
            this.items[this.entity][team_id].step_counter = this.items[this.entity][team_id] ? 
                ( this.items[this.entity][team_id].step_counter  + step_counter ) :  step_counter ;

        }else if (mode === 'update'){
           if( prev_step_counter  ===  step_counter ){ //Don't need to continue to update
                return true;
           }
           if(this.items[this.entity][team_id] && step_counter > 0){
                if( prev_step_counter > 0){
                     this.items[this.entity][team_id].step_counter = 
                                this.items[this.entity][team_id].step_counter - prev_step_counter ;
               }
               this.items[this.entity][team_id].step_counter = 
                        this.items[this.entity][team_id].step_counter + step_counter;
           }

        }
        return true
    }

}

