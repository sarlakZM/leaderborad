import { Request, Response } from 'express';
import { IUser } from '../interfaces/user';
import UserService from '../services/user.service';
import BaseController from './base.controller';
import teamRoutes from '../routers/team.router'

export default class UserController extends BaseController<IUser, UserService>{
    
    constructor(entityService: UserService ){
        super(entityService)
        
     }

    
    async getAllByFilter(req: Request, res: Response) {
        const team_id: number = parseInt(req.params.id, 10);
        if(!team_id){
            res.status(404).json("team not found") 
        }
        const filter = { 'team_id' : team_id};
        try {
            const users:  Array<IUser> = await this.entityService.getAllByFilter(filter);;
            res.status(200).json(users);
          } catch (e: any) {
            res.status(500).json(e.message);
        }
        
    
    }

    //Override super create
    async create(req: Request, res: Response) {
        try {
            const result = teamRoutes.teamController.updateScoreTeam(req, res, 'add');
            let item = null;
            if(result){
                const body = req.body;
                item = await this.entityService.create(body); 
            }
            res.status(201).json(item);
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const result = teamRoutes.teamController.updateScoreTeam(req, res, 'update');
            let item = null;
            if(result){
                const id: number = parseInt(req.params.id, 10);
                const body = req.body;
                item = await this.entityService.update(id, body);
            }
            item ? res.status(201).json(item):  res.status(404).json("item not found") ;
        } catch (e: any) {
            res.status(500).json(e.message);
        }
    }

    // async getScoreByTeam(req: Request, res: Response) {
    //     const team_id: number | null = req.params && req.params.id ? parseInt(req.params.id, 10) : null ;
    //     try {
    //         const score:  IScore| number = await this.entityService.getScoreByTeam(team_id);
    //         res.status(200).json(score);
    //       } catch (e: any) {
    //         res.status(500).json(e.message+"sfdsf");
    //     }
    // }

}
