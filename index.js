const express = require("express");
const mongoose = require('mongoose');
const tasks = require('./routes/api/tasks');
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors())
//DB config

const db = require('./config/keys').mongoURI;

//connect to our mongo db

mongoose
  .connect(db,
    { useNewUrlParser: true,
      useUnifiedTopology: true
     } 
    )
  .then(() => {console.log('Mongo DB connected...');})
  .catch(err => console.log(err));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/api/tasks',tasks);

//serve our statis assets if in production

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'));
}


  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });