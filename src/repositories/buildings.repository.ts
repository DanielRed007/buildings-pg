import { Building } from "../models/Building";
import { Op } from "sequelize";

interface IBuildingRepository {
  retrieveAll(): Promise<Building[]>;
  create(building: Building): Promise<Building>;
}

class BuildingRepository implements IBuildingRepository {

  async retrieveAll(): Promise<Building[]> {
    try {
      return await Building.findAll();
    } catch (error) {
      throw error;
    }
  }

  async create(building: Building): Promise<Building> {
    try {
      return await Building.create({
        name: building.name,
        address: building.address
      });
    } catch (error) {
      throw error;
    }
  }

  async retrieveById(id: string): Promise<Building | null> {
    try {
      return await Building.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: string, updates: Partial<Building>): Promise<Building | null> {
    try {
      const building = await Building.findByPk(id);

      if(building){
        await building.update(updates);
        return building;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<boolean> {
    try {
      const building = await Building.findByPk(id);

      if(building){
        await building.destroy();
        return true;
      }

      return false;
    } catch (error) {
      throw error;
    }
  }
}

export default new BuildingRepository();