import express, { Application } from 'express';
import Server from './server';

const app: Application = express();
const server: Server = new Server(app);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
