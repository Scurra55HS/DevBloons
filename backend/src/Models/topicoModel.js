import { DataTypes } from "sequelize";
import conn from "../config/connDb.js";

const Topico = conn.define("topicos", {
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  descricao: { 
    type: DataTypes.TEXT, 
    allowNull: false 
},
});

export default Topico;
