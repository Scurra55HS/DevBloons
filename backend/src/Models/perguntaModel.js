import { DataTypes } from "sequelize";
import conn from "../config/connDb.js";

const Pergunta = conn.define("perguntas", {
  pergunta: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  correta: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
});

export default Pergunta;
