import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db/database';

class Floor extends Model {
  public id!: typeof DataTypes.UUID;
  public name!: string;
  public buildingId!: typeof DataTypes.UUID;

  static associate(models: any) {
    Floor.belongsTo(models.Building, { foreignKey: 'buildingId' });
  }
}

Floor.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buildingId: {
      type: DataTypes.UUID,
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
