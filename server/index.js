const express = require("express");

const PORT = process.env.PORT || 5001;

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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