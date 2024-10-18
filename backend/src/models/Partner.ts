'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

interface PartnerAttributes {
  partner_id: number;
  logo: string | null;
  url: string | null;
}

export class Partner extends Model<PartnerAttributes> implements PartnerAttributes {
  public partner_id!: number;
  public logo!: string | null;
  public url!: string | null;

  static associate(models: any) {
    // define association here
  }
}

Partner.init(
  {
    partner_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'partner',
    timestamps: false,
  }
);

export default Partner;
