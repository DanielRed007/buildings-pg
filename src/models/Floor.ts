import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db/database';

class Floor extends Model {
  public id!: number;
  public name!: string;
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
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
