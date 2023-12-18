import { Application } from "express";
import buildingRoutes from "./building.route";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/buildings", buildingRoutes);  
  }
}