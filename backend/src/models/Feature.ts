'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

interface FeatureAttributes {
  feature_id: number;
  label: string | null;
  type: 'role' | 'right';
}

export class Feature extends Model<FeatureAttributes> implements FeatureAttributes {
  public feature_id!: number;
  public label!: string | null;
  public type!: 'role' | 'right';

  static associate(models: any) {
    // define association here
  }
}

Feature.init(
  {
    feature_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM('role', 'right'),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'feature',
    timestamps: false,
  }
);

export default Feature;
