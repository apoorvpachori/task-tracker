const express = require("express");
const mongoose = require('mongoose');
const tasks = require('./routes/api/tasks');
const PORT = process.env.PORT || 5001;
const app = express();
const cors = require('cors');


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

app.get("/", (req, res) => {
  const tasks = 
 [
      {
        "id": "2",
        "text": "Meeting",
        "day": "Feb 6th",
        "reminder": true
      },
      {
        "id": "3",
        "text": "Food Shopping",
        "day": "Feb 7th",
        "reminder": true
      },
      {
        "text": "hello",
        "day": "hello",
        "reminder": true,
        "id": "mvQLyUk"
      }
    ]
    res.json(tasks);
  });


  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });