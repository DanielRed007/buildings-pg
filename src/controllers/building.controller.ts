import { Request, Response } from "express";
import { Building } from "../models/Building";
import buildingsRepository from "../repositories/buildings.repository";

export default class BuildingController {

  async findAll(req: Request, res: Response) {
    try {
      const buildings = await buildingsRepository.retrieveAll();

      res.status(200).json({
        buildings        
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const building = await buildingsRepository.retrieveById(id);

      res.status(200).json({
        building
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

      res.status(201).json(newBuilding);
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

  async updateBuilding(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updates = req.body;

      const updateBuilding = await buildingsRepository.updateById(id,updates);

      res.status(201).json(updateBuilding);
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

  async deleteBuilding(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleteBuilding = await buildingsRepository.deleteById(id);

      res.status(200).json(deleteBuilding);
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

}