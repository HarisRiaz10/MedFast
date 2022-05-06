module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("seller", {
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      address:{
        type:Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.STRING
      }
    });
    return Tutorial;
  };