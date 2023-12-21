import { Request, Response } from "express";
import { Building } from "../models/Building";
import buildingsRepository from "../repositories/buildings.repository";

export default class BuildingController {

  async findAll(req: Request, res: Response) {
    try {
      const buildings = await buildingsRepository.retrieveAll();

      res.status(200).json({
        message: "findAll OK",
        buildings
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async createBuilding(req: Request, res: Response) {
    try {
      const newBuilding = await buildingsRepository.create(req.body);

      res.status(201).json({
        message: "create OK",
        reqBody: newBuilding
      });
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

}