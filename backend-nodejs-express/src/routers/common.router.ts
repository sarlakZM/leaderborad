import { Application, Request, Response } from 'express';

class CommonRoutes {
    public route(app: Application) {

        // Mismatch URL
        app.all('*', function (req: Request, res: Response) {
            res.status(404).send({ error: 'Check your URL please' });
        });

    }
}

export default new CommonRoutes;