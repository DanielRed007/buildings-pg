import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db/database';

class Building extends Model {
  public id!: number;
  public name!: string;
  public address!: string;

  static associate(models: any){
    Building.hasMany(models.Floor);
  }
}

Building.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
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
