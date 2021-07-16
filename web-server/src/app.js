const path = require('path');
const express = require('express');
const app = express();

const pathTemplate = path.join(__dirname, '../templates');

//setup handlebar engine and views location
app.set('views', pathTemplate);
app.set('view engine', 'hbs');

//setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

//application routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'hbs title',
    name: 'rythem',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'rythem',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    msg: 'Help msg',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Delhi',
    forcast: 50,
  });
});

app.listen(3000, () => {
  console.log('Server started at port no 3000');
});
