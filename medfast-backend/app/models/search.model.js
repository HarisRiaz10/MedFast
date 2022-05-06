module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("product", {
      productID:{
        type: Sequelize.INTEGER,autoIncrement: true ,primaryKey: true
      },
      prdname: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM('ointment', 'syrup', 'tablets', 'gel')
      },
      dosage: {
        type: Sequelize.STRING
      },
      price:{
        type: Sequelize.FLOAT
      },
      details:{
          type: Sequelize.STRING
      },
      ratings:{
          type: Sequelize.ENUM('1', '2', '3', '4', '5')
      }
    });
    return Result;
  };