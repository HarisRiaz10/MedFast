const db = require("../models");
const Buyer = db.buyer;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
console.log('buyer has: ',Buyer)
exports.create = (req, res) => {

    console.log('data',req.body,Buyer);

    // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    //   }
      // Create a Tutorial
      const buyer = {
        name: req.body.name,
        pass: req.body.pass,
        phoneNo:req.body.phoneNo,
        email:req.body.email
      //   description: req.body.description,
      //   published: req.body.published ? req.body.published : false
      };
      // Save Tutorial in the database
      Buyer.create(buyer)
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
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.params.name;
    const pass = req.params.pass;
    var condition = name ? { name: { [Op.like]: `${name}` } } : null;
    var condition2= pass ? { pass: { [Op.like]: `${pass}` } } : null;
    Buyer.findAll({ where: condition && condition2 })
      .then(data => {
        console.log('I am here');
        res.send([...data,{buyer:true}]);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
   
    const name = req.params.name;
    Buyer.findByPk(name)     //error here as we dont have any find by function and tutorial object
      .then(data => {
        if (data) {
        console.log('data',data);
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find entity with name=${name}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + name
        });
      });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    const name = req.params.name;
    Buyer.findAll({ where: { name: name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };