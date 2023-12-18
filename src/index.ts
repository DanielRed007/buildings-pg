import express, { Application } from 'express';
import buildingRoutes from './routes/building.route';
import Server from './server';

const app: Application = express();
const server: Server = new Server(app);
const PORT = 3000;

// app.use('/api/buildings', buildingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
