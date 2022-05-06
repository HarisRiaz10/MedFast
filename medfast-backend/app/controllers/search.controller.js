const db = require("../models");
const products = db.product;
const Op = db.Sequelize.Op;
exports.find = (req, res) => {
    // const query="SELECT * FROM products"
    
    // res.send(query)
    products.findAll()    //error here as we dont have any find by function and tutorial object
      .then(data => {
        if (data) {
        console.log('data',data);
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find entity with name.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" 
        });
      });
  };
  exports.create = (req, res) => {

    console.log('data',req.body);

    // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    //   }
      // Create a Tutorial
      const productx = {
        prdname: req.body.prdname,
        type: req.body.type,
        dosage:req.body.dosage,
        price:req.body.price,
        details:req.body.details,
        ratings:req.body.ratings
      //   description: req.body.description,
      //   published: req.body.published ? req.body.published : false
      };
      // Save Tutorial in the database
      products.create(productx)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the instance."
          });
        });
};

