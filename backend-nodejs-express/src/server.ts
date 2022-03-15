import app from "./config/app";
import env from './config'

const PORT: number = parseInt(env.port as string, 10);

app.listen(PORT, () => {
   console.log('Express server listening on port ' + PORT);
});