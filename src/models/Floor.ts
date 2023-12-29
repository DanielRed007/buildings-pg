import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db/database';

class Floor extends Model {
  public id!: number;
  public name!: string;
  public capacity!: number;
  public buildingId!: number;

  static associate(models: any) {
    Floor.belongsTo(models.Building, { foreignKey: 'buildingId' });
  }
}

Floor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    buildingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'buildings',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'floors',
    timestamps: true,
  }
);

export { Floor };
