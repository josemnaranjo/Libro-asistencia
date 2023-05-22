import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Jornada } from "./Jornadas.js";

export const Trabajador = sequelize.define(
  "Trabajador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras",
        },
        notEmpty: true,
        max: 10,
        min: 4,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "El apellido solo puede contener letras",
        },
        notEmpty: true,
        max: 10,
        min: 4,
      },
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "El RUT ya existe en la base de datos",
      },
    },
    inicioLicencia: {
      type: DataTypes.DATEONLY,
    },
    finLicencia: {
      type: DataTypes.DATEONLY,
    },
    licencia: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    paranoid: true,
    deletedAt: "deletedAt",
    timestamps: true,
  }
);

Trabajador.hasMany(Jornada, {
  foreignKey: "trabajadorId",
  sourceKey: "id",
});

Jornada.belongsTo(Trabajador, {
  foreignKey: "trabajadorId",
  targetId: "id",
});
