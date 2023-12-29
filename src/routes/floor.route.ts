import { Router } from 'express';
import FloorsController from "../controllers/floor.controller";

class FloorRoutes {
    router = Router();
    controller = new FloorsController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        this.router.get("/", this.controller.findAll);

        this.router.get("/:id", this.controller.findById);

        this.router.post("/", this.controller.createFloor);

        this.router.put("/:id", this.controller.updateFloor);

        this.router.delete("/:id", this.controller.deleteFloor);
    }
}

export default new FloorRoutes().router;