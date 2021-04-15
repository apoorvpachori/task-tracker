const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema

const TaskSchema = new Schema({
    text: {
      type: String,
      required: true
    },
    day: {
        type: String,
        required: true
    },
    reminder: {
        type: Boolean,
        required: true
    }
  });
  const Task = mongoose.model('task',TaskSchema);

module.exports = Task;