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

}

export default new BuildingRepository();