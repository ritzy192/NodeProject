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
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Rythem Datta',
    notFoundMessage: 'Help article not found',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide a address',
    });
  }
  res.send({
    forcast: 50,
    location: req.query.address,
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Please provide a search term',
    });
  }
  res.send({
    products: [],
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Rythem Datta',
    notFoundMessage: 'Page not Found',
  });
});

app.listen(3000, () => {
  console.log('Server started at port no 3000');
});
