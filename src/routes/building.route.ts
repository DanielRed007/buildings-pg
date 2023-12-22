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

        this.router.get("/:id", this.controller.findById);

        this.router.post("/", this.controller.createBuilding);

        this.router.put("/:id", this.controller.updateBuilding);

        this.router.delete("/:id", this.controller.deleteBuilding);
    }
}

export default new BuildingRoutes().router;