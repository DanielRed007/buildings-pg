import { Building } from "../models/Building";
import { Op } from "sequelize";

interface ITutorialRepository {
  retrieveAll(searchParams: {title: string, published: boolean}): Promise<Building[]>;
}

class TutorialRepository implements ITutorialRepository {

    async retrieveAll(searchParams?: {title?: string, published?: boolean}): Promise<Building[]> {
        try {
          let condition: any = {};
      
          if (searchParams?.published) condition.published = true;
      
          if (searchParams?.title)
            condition.title = { [Op.like]: `%${searchParams.title}%` };

          return await Building.findAll();
        } catch (error) {
          throw new Error("Failed to retrieve Buildings!");
        }
    }

}

export default new TutorialRepository();