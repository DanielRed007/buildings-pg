import { Application } from "express";
import buildingRoutes from "./building.route";
import floorRoutes from "./floor.route";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/buildings", buildingRoutes);
    app.use("/api/floors", floorRoutes);  
  }
}