import { Application, Request, Response } from 'express';
import TeamService from '../services/team.service';
import TeamController from '../controllers/team.controller';
import TeamDao from '../models/team.dao';

class TeamRoutes {
    teamController = new TeamController(new TeamService(new TeamDao))

    public route(app: Application) {

        app.get('/api/teams', (req: Request, res: Response) => {
            this.teamController.getAll(req, res);
        });

        app.post('/api/teams', (req: Request, res: Response) => {
            // res.setHeader('Content-Type', 'application/json');
            this.teamController.create(req, res);
        });

        app.get('/api/teams/:id', (req: Request, res: Response) => {
            this.teamController.getById(req, res);
        });

        app.put('/api/teams/:id', (req: Request, res: Response) => {
            this.teamController.update(req, res);
        });

        app.delete('/api/teams/:id', (req: Request, res: Response) => {
            this.teamController.delete(req, res);
        });


        
        
    }
}

export default new TeamRoutes;