'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
import Team from './Team';

interface MatchAttributes {
  match_id: number;
  score: string | null;
  date_match: Date | null;
  status: 'victoire' | 'défaite' | 'nul';
  team_id: number;
}

export class Match extends Model<MatchAttributes> implements MatchAttributes {
  public match_id!: number;
  public score!: string | null;
  public date_match!: Date ;
  public status!: 'victoire' | 'défaite' | 'nul';
  public team_id!: number;

  static associate(models: any) {
    Match.belongsTo(models.Team, { foreignKey: 'team_id' });
  }
}

Match.init(
  {
    match_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    score: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    date_match: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('victoire', 'défaite', 'nul'),
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'match',
    timestamps: false,
  }
);

export default Match;
