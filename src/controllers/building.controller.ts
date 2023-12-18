import { Request, Response } from 'express';
import { Building } from '../models/Building';

export const createNewBuilding = async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
    }
  };
  
  export const getBuildings = async (req: Request, res: Response) => {
    try {
        const buildings = await Building.findAll();

        res.json(buildings);
      } catch (error) {
        console.error(error);
        
        res.status(500).send('Internal Server Error');
      }
  }
  
  export const getBuildingById = async (req: Request, res: Response) => {
      try {
      } catch (error:any) {
      }
  }
  
  export const editBuilding = async (req: Request, res: Response) => {
      try {
      } catch (error:any) {
      }
  }
  
  export const deleteBuilding = async (req: Request, res: Response) => {
      try {
      } catch (error:any) {
      }
  }