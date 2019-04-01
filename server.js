const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://fried:fried@fried-7vefi.mongodb.net/test?retryWrites=true";
const dbName = "fried";

app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  //console.log(db)
  db.collection('fried').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result[0].easy)
    res.render('index.ejs', {Foods: result})
  })
})

app.post('/fried', (req, res) => {
  db.collection('fried').save({name: req.body.name, msg: req.body.msg, easy: 0, medium:0, hard:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/fried', (req, res) => {
  console.log(req.body.easy)
  db.collection('fried')
  .findOneAndUpdate({type: req.body.name.toLowerCase()}, {
    $set: {
        easy: req.body.easy + 1
    }
  }, {
    sort: {_id: -1},
    upsert: false
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/fried/med', (req, res) => {
  db.collection('fried')
  .findOneAndUpdate({type: req.body.name.toLowerCase()}, {
    $set: {
        med: req.body.med + 1
    }
  }, {
    sort: {_id: -1},
    upsert: false
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.put('/fried/hard', (req, res) => {
  console.log('harddddddddd', req.body)
  db.collection('fried')
  .findOneAndUpdate({type: req.body.name.toLowerCase()}, {
    $set: {
        hard: req.body.hard + 1
    }
  }, {
    sort: {_id: -1},
    upsert: false
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/fried', (req, res) => {
  db.collection('fried').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
