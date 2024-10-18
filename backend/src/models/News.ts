'use strict';

import { Model, DataTypes } from 'sequelize';
import sequelize from './index';

interface NewsAttributes {
  news_id: number;
  title: string | null;
  summary: string | null;
  description: string | null;
  date: Date;
  image: string | null;
}

export class News extends Model<NewsAttributes> implements NewsAttributes {
  public news_id!: number;
  public title!: string | null;
  public summary!: string | null;
  public description!: string | null;
  public date!: Date;
  public image!: string | null;

  static associate(models: any) {
    // define association here
  }
}

News.init(
  {
    news_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'news',
    timestamps: false, // Si vous n'utilisez pas de timestamps
  }
);

export default News;
