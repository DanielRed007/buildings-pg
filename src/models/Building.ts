import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db/database';

class Building extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public type!: string;
  public foundationYear!: string;
  public status!: string; 

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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foundationYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
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
