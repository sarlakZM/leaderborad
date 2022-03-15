import express from "express";
import session from "express-session";

import * as bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import teamRouters from "../routers/team.router";
import userRouters from "../routers/user.router";
import commonRoutes from "../routers/common.router";

class App {

   public app: express.Application;

   constructor() {
      this.app = express();
      this.config();
      teamRouters.route(this.app);
      userRouters.route(this.app);
      commonRoutes.route(this.app);

   }

   private config(): void {
        // this.app.use(helmet());
        this.app.use(cors());

        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
        this.app.use(express.json());
      
   }


}
export default new App().app;