import { Request, Response } from "express";
import { Building } from "../models/Building"
import buildingsRepository from "../repositories/buildings.repository";

export default class TutorialController {

  async findAll(req: Request, res: Response) {
    try {
      const buildings = await buildingsRepository.retrieveAll();

      res.status(200).json({
        message: "findAll OK",
        ...buildings
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

}