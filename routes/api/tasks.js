const express = require('express');
const router = express.Router();

//Item model
const Task = require('../../models/TaskModel');

// @route GET api/items
// @desc Get All Items
// @access Public 
router.get('/',(req,res) =>
{
    Task.find()
    .then(tasks =>res.json(tasks))
})

// @route POST api/items
// @desc post an item
// @access Public 
router.post('/',(req,res) =>
{
    const newItem = new Task({
        text:req.body.text,
        day:req.body.day,
        reminder:req.body.reminder
    });
    newItem.save().then(item => res.json(item));
})

// @route POST api/items/:id
// @desc post an item
// @access Public 
router.delete('/:id',(req,res) =>
{
    Task.findById(req.params.id).then(task => task.remove(() => res.json({success:true}))).catch(err => res.status(404).json({success:false}))
})



module.exports = router;