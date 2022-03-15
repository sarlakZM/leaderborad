import { Application, Request, Response } from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import UserDao from '../models/user.dao';

class UserRoutes {

    userController = new UserController(new UserService(new UserDao))
     
    public route(app: Application) {

        app.get('/api/users', (req: Request, res: Response) => {
            this.userController.getAll(req, res);
        });

        app.get('/api/users/:id', (req: Request, res: Response) => {
            this.userController.getById(req, res);
        });

        app.get('/api/users/team/:id', (req: Request, res: Response) => {
            this.userController.getAllByFilter(req, res);
        }); 

        app.post('/api/users', (req: Request, res: Response) => {
            // res.setHeader('Content-Type', 'application/json');
            this.userController.create(req, res);   
        });
        app.put('/api/users/:id',  (req: Request, res: Response) => {
           this.userController.update(req, res);
        });

        app.delete('/api/users/:id', (req: Request, res: Response) => {
            this.userController.delete(req, res);
        });


        
        
    }

}

export default new UserRoutes;
