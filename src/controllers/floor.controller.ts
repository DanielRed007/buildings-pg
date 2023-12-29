import { Request, Response } from "express";
import floorsRepository from "../repositories/floors.repository";
import buildingsRepository from "../repositories/buildings.repository";

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

  async createFloor(req: Request, res: Response) {
    try {
      const buildingId = req.body.buildingId;
      
      const building = await buildingsRepository.retrieveById(buildingId);

      if(!building){
        res.status(404).json({
          message: 'Building not found'
        });

        return;
      }

      const newFloor = {
        name: req.body.name,
        capacity: req.body.capacity,
        alias: req.body.alias,
        buildingId: buildingId
      };

      await floorsRepository.create(newFloor);

      res.status(201).json({
        message: 'Floor Created'
      });
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  }

  async updateFloor(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updates = req.body;

      const updateFloor = await floorsRepository.updateById(id,updates);

      res.status(201).json(updateFloor);
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

  async deleteFloor(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleteFloor = await floorsRepository.deleteById(id);

      res.status(200).json(deleteFloor);
    } catch (error) {

      res.status(500).json({
        message: error
      });
    }
  }

}