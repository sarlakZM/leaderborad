import { IScore } from "../interfaces/base_item";
import { IUser } from "../interfaces/user";
import BaseDao from "./base.dao";


export default class UserDao extends BaseDao<IUser> {
    constructor(){
        super('users')
    }


    getAllByFilter = async (filter: any): Promise<Array<IUser>>  => {
        const usersFilter: Array<IUser>= [];
        const items = this.items[this.entity];
        for(let item in items){
            if(filter.hasOwnProperty('team_id')){
                if(items[item]?.team_id == filter['team_id']) {
                    usersFilter.push(items[item])
                }
            }
        } 
        return usersFilter
    }


    //Testing method, Calculate scores of each team    
    getScoreByTeam = async (team_id: number | null): Promise< IScore| number> => {
        const score: {[key:number]: number} = {};
        const items = this.items[this.entity];
        for(let item in items){
            score[items[item]?.team_id ?? 0]  = score[items[item].team_id ?? 0] ? 
                                    ( Number(score[items[item].team_id ?? 0])  + Number(items[item].step_counter) ) : 
                                    Number(items[item].step_counter)

        } 
        return team_id ? score[team_id] : score
    }

    
}

