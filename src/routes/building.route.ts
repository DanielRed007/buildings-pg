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
    }
}

export default new BuildingRoutes().router;