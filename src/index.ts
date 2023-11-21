import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/test', (req: Request, res: Response) => {
    console.log('---- test call ')
    res.send('Express + TypeScript Server test');
});

app.get('/', (req: Request, res: Response) => {
    console.log('---- root call ')
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});   