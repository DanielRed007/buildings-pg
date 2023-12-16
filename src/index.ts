import express, { Request, Response } from 'express';
import { Building } from './models/Building';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Building DB in Postgres DB');
});

app.get('/buildings', async (req: Request, res: Response) => {
  try {
    const buildings = await Building.findAll();
    res.json(buildings);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
