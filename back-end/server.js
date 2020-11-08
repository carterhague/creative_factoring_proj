const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const { exec } = require('child_process');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  let { stdout } = await sh('ls');
  for (let line of stdout.split('\n')) {
    console.log(`ls: ${line}`);
  }
}

// connect to the database
mongoose.connect('mongodb://localhost:27017/factorbase', {
  useNewUrlParser: true
});

// Create a scheme for items in the db: a number, primailty, and a factorization
const itemSchema = new mongoose.Schema({
  number: String,
  primality: String,
  factorization: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Create a new item in the db: takes a number. sage computes a factorization & primailty
app.post('/api/numbers', async (req, res) => {
  posted_number = req.body.number
  sage_primality = "Computing!" // FIX THIS
  sage_factorization = "Calculating!" // FIX THIS
  let item = new Item({
    number: posted_number,
    primality: sage_primality,
    factorization: sage_factorization,
  });
  await item.save()
  res.send(item);
  try {
    let { stdout } = await sh('sage script.sage ' + posted_number);
    sage_primality = stdout.split('\n')[0]
    sage_factorization = stdout.split('\n')[1]
    item.primality = sage_primality
    item.factorization = sage_factorization
    await item.save();
  } catch (error) {
    console.log(error);
  }
});

// Get a list of all of the items in the database
app.get('/api/numbers', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Delete a item from the database
app.delete('/api/numbers/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Edit an item's db entry, give all info manually
app.put('/api/numbers/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.primality = req.body.primality
    item.factorization = req.body.factorization
    //console.log(item)
    await item.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3001, () => console.log('Server listening on port 3001!'));
