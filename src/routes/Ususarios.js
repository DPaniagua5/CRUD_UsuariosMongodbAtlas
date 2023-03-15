const express = require("express");
const userSchema = require("../models/Usuarios");

const router = express.Router();

//Crear Usuario
router.post('/Usuarios', (req,res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});  

//Read Users (Obtener los usuarios)
router.get('/Usuarios', (req,res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

//Read Users (Obtener usuarios específicos)
router.get('/Usuarios/:id', (req,res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

//Update a user (Actualizar un usuario) 
router.put('/Usuarios/:id', (req,res) => {
    const {id} = req.params;
    const{name, age, email} = req.body; 
    userSchema
    .updateOne({_id: id},{ $set: {name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

//Delete a user (Eliminar un usuario)
router.delete('/Usuarios/:id', (req,res) => {
    const { id } = req.params;
    userSchema
    .findOneAndRemove({_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error }));
});

module.exports = router;
