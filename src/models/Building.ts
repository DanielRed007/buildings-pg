import { Model, DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../config/db/database';

class Building extends Model {
  public id!: string;
  public name!: string;
  public address!: string;
}

Building.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'buildings',
    timestamps: true,
  }
);

export { Building };