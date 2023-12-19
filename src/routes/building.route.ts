import { Router } from 'express';
import BuildingsController from "../controllers/building.controller";

class BuildingRoutes {
    router = Router();
    controller = new BuildingsController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        this.router.get("/", this.controller.findAll);

        this.router.post("/", this.controller.createBuilding);
    }
}

export default new BuildingRoutes().router;