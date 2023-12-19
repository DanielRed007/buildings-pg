import { Building } from "../models/Building";
import { Op } from "sequelize";

interface IBuildingRepository {
  retrieveAll(searchParams: {title: string, published: boolean}): Promise<Building[]>;
}

class BuildingRepository implements IBuildingRepository {

    async retrieveAll(): Promise<Building[]> {
        try {
          return await Building.findAll();
        } catch (error) {
          throw new Error("Failed to retrieve Buildings!");
        }
    }

    async create(building: Building): Promise<Building> {
      try {
        return await Building.create({
          name: building.name,
          address: building.address
        });
      } catch (err) {
        throw new Error("Failed to create Tutorial!");
      }
  }

}

export default new BuildingRepository();