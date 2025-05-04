const { mongoose } = require('mongoose');
const ToDoModel = require('../models/ToDoModel');

const ToDoController = {

    async getAll(req, res) {
        try {
            const allToDos = await ToDoModel.find();
            res.send(allToDos);
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    },

    async create(req, res) {
        try {
            const newToDo = new ToDoModel({
                text: req.body.text
            });
            ToDoModel
            .create(newToDo)
            .then((data) => {
                res.json('ToDo added!')
                console.log(data);
            })
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    },

    async update(req, res) {
        try {
            const { id, text } = req.body;
            
            // Use await to handle async operation properly
            const data = await ToDoModel.findByIdAndUpdate(id, { text }, { new: true });
    
            if (!data) {
                return res.status(404).json('ToDo not found!');
            }
    
            res.json('ToDo updated!');
            console.log(data);
        } catch (error) {
            console.error(error);
            res.status(500).json('Server Error');
        }
    },
    
    async delete(req, res) {
        try {
            const {id} = req.body;
            ToDoModel
            .findByIdAndDelete(id)
            .then((data) => {
                res.json('ToDo deleted!')
                console.log(data);
            })
        } catch (error) {
            console.log(error);
            res.status(500).json('Server Error');
        }
    }
}

module.exports = ToDoController;