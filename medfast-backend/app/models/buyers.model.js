module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("buyer", {
      name: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNo:{
        type: Sequelize.STRING
      }
    });
    return Tutorial;
  };