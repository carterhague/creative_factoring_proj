const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

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
  sage_primality = "Prime/Composite" // FIX THIS
  sage_factorization = "1 * 2 * 3 * lol" // FIX THIS
  const item = new Item({
    number: posted_number,
    primality: sage_primality,
    factorization: sage_factorization,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
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
    item.primailty = req.body.primailty
    item.factorization = req.body.factorization
    await item.save()
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
