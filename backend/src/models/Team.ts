'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

interface TeamAttributes {
  team_id: number;
  label: string;
}

export class Team extends Model<TeamAttributes> implements TeamAttributes {
  public team_id!: number;
  public label!: string;

  static associate(models: any) {
    // define association here
  }
}

Team.init(
  {
    team_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'team',
    timestamps: false,
  }
);

export default Team;
