import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('devbloons', 'root', 'brubru69', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
