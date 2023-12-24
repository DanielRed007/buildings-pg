import { Request, Response } from "express";
import floorsRepository from "../repositories/floors.repository";

export default class BuildingController {

  async findAll(req: Request, res: Response) {
    try {
      const floors = await floorsRepository.retrieveAll();

      res.status(200).json({
        floors        
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
      const building = await floorsRepository.retrieveById(id);

      res.status(200).json({
        building
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

}