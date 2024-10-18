'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

interface ClubAttributes {
  club_id: number;
  description: string | null;
  history: string | null;
}

export class Club extends Model<ClubAttributes> implements ClubAttributes {
  public club_id!: number;
  public description!: string | null;
  public history!: string | null;

  static associate(models: any) {
    // define association here
  }
}

Club.init(
  {
    club_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    history: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'club',
    timestamps: false,
  }
);

export default Club;
