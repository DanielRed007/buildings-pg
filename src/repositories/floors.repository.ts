import { Floor } from "../models/Floor";

interface IFloorRepository {
  retrieveAll(): Promise<Floor[]>;
  retrieveById(id: string): Promise<Floor | null>; 
}

class FloorRepository implements IFloorRepository {

  async retrieveAll(): Promise<Floor[]> {
    try {
      return await Floor.findAll();
    } catch (error) {
      throw error;
    }
  }

  async retrieveById(id: string): Promise<Floor | null> {
    try {
      return await Floor.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async create(floorData: any): Promise<Floor> {
    try {
      return await Floor.create({
        name: floorData.name,
        capacity: floorData.capacity,
        buildingId: floorData.buildingId
      });
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: string, updates: Partial<Floor>): Promise<Floor | null> {
    try {
      const floor = await Floor.findByPk(id);

      if(floor){
        await floor.update(updates);
        return floor;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  async deleteById(id: string): Promise<boolean> {
    try {
      const floor = await Floor.findByPk(id);

      if(floor){
        await floor.destroy();
        return true;
      }

      return false;
    } catch (error) {
      throw error;
    }
  }
}

export default new FloorRepository();