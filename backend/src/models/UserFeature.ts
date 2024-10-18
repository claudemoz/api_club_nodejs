'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
import User from './User';
import Feature from './Feature';

interface UserFeatureAttributes {
  user_feature_id?: number;
  user_id: number;
  feature_id: number;
}

export class UserFeature extends Model<UserFeatureAttributes> implements UserFeatureAttributes {
  public user_feature_id!: number;
  public user_id!: number;
  public feature_id!: number;

  static associate(models: any) {
    UserFeature.belongsTo(models.User, { foreignKey: 'user_id' });
    UserFeature.belongsTo(models.Feature, { foreignKey: 'feature_id' });
  }
}

UserFeature.init(
  {
    user_feature_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feature_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'user_feature',
    timestamps: false,
  }
);

export default UserFeature;
