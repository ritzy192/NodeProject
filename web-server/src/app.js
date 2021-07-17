const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const pathTemplate = path.join(__dirname, '../templates/views');
const pathPartials = path.join(__dirname, '../templates/partials');

//setup handlebar engine and views location
app.set('views', pathTemplate);
app.set('view engine', 'hbs');
hbs.registerPartials(pathPartials);

//setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')));

//application routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Rythem Datta',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Rythem Datta',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Rythem Datta',
    msg: 'Help text',
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
