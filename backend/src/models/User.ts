'use strict';

import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from './index';
import bcrypt from 'bcrypt';

interface UserAttributes {
  user_id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  public user_id!: number;
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    // define association here
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'user',
    timestamps: false, 
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(user.password, salt);
          user.password = hashedPassword;
        }

        if (user.lastname) {
          user.lastname = user.lastname.charAt(0).toUpperCase() + user.firstname.slice(1).toLowerCase();
        }
        
        if (user.firstname) {
          user.firstname = user.firstname.trim().charAt(0).toUpperCase() + user.firstname.trim().slice(1);
        }

        if (user.email) {
          user.email = user.email.toLowerCase();
        }
      },
    },
  }
);
export default User;
