import { DataTypes } from "sequelize";
import conn from "../config/connDb.js";

const Resposta = conn.define("respostas", {
  resposta: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  pergunta_id: {
    type: DataTypes.INTEGER,
    references: { 
        model: "perguntas", 
        key: "id" 
    },
  },
});

export default Resposta;
