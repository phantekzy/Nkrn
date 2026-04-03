import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database";

export const Product = sequelize.define("product", {
  id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
  sku: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING, allowNull: false },
});
