import express, { Request, Response } from 'express';
import buildingRoutes from './routes/building.route';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('api/buildings', buildingRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Building DB in Postgres DB');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
